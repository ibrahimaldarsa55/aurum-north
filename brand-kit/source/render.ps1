param([string]$Url, [string]$Out, [string]$Js, [int]$Width = 1440, [int]$Height = 1400)
# Minimal Chrome DevTools Protocol driver: load page, run JS (e.g. click), screenshot.
$edge = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
$profile = Join-Path $env:TEMP "cdp-profile-$(Get-Random)"
$proc = Start-Process -FilePath $edge -ArgumentList "--headless=new","--disable-gpu","--hide-scrollbars","--remote-debugging-port=9333","--user-data-dir=$profile","--window-size=$Width,$Height","about:blank" -PassThru -WindowStyle Hidden
try {
  for ($i = 0; $i -lt 30; $i++) { try { $targets = Invoke-RestMethod http://127.0.0.1:9333/json -ErrorAction Stop; break } catch { Start-Sleep -Milliseconds 300 } }
  $page = $targets | Where-Object { $_.type -eq 'page' } | Select-Object -First 1
  $ws = [System.Net.WebSockets.ClientWebSocket]::new()
  $ws.ConnectAsync([uri]$page.webSocketDebuggerUrl, [Threading.CancellationToken]::None).Wait()
  $script:id = 0
  function Send-Cdp($method, $params) {
    $script:id++
    $msg = @{ id = $script:id; method = $method; params = $params } | ConvertTo-Json -Depth 10 -Compress
    $bytes = [Text.Encoding]::UTF8.GetBytes($msg)
    $ws.SendAsync([ArraySegment[byte]]::new($bytes), 'Text', $true, [Threading.CancellationToken]::None).Wait()
    while ($true) {
      $sb = [Text.StringBuilder]::new()
      do {
        $buf = [byte[]]::new(1048576)
        $r = $ws.ReceiveAsync([ArraySegment[byte]]::new($buf), [Threading.CancellationToken]::None).Result
        [void]$sb.Append([Text.Encoding]::UTF8.GetString($buf, 0, $r.Count))
      } while (-not $r.EndOfMessage)
      $resp = $sb.ToString() | ConvertFrom-Json
      if ($resp.id -eq $script:id) { return $resp }
    }
  }
  Send-Cdp "Page.enable" @{} | Out-Null
  Send-Cdp "Emulation.setDeviceMetricsOverride" @{ width = $Width; height = $Height; deviceScaleFactor = 1; mobile = $false } | Out-Null
  Send-Cdp "Page.navigate" @{ url = $Url } | Out-Null
  Start-Sleep -Seconds 4
  if ($Js) { $res = Send-Cdp "Runtime.evaluate" @{ expression = $Js; awaitPromise = $true; returnByValue = $true }; "js result: " + ($res.result.result.value | ConvertTo-Json -Compress) }
  Start-Sleep -Milliseconds 900
  $shot = Send-Cdp "Page.captureScreenshot" @{ format = "png" }
  [IO.File]::WriteAllBytes($Out, [Convert]::FromBase64String($shot.result.data))
  "saved $Out"
} finally {
  Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
  Get-CimInstance Win32_Process -Filter "Name='msedge.exe'" | Where-Object { $_.CommandLine -match 'cdp-profile' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
}
