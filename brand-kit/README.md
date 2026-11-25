# Aurum North — Social Brand Kit

Obsidian black `#080808` · Champagne gold `#C6A15B` (light `#E5C98B`)

## Ready to upload

| File | Use |
| --- | --- |
| `logo-instagram.png` | Instagram profile picture (1080 × 1080) |
| `post-1-studio.png` | Launch post 1: introducing Aurum North |
| `post-2-detailing.png` | Launch post 2: Nocturne Atelier concept |
| `post-3-ecommerce.png` | Launch post 3: Halden & Vale concept |
| `instagram-profile.txt` | Name, bio options, handle ideas, captions, hashtags and alt text |

## Vector logos

| File | Use |
| --- | --- |
| `logo-instagram.svg` | Monogram on obsidian with frame rings; safe for circular crops |
| `logo-mark-transparent.svg` | Gold "AN" mark only, transparent background, for dark backgrounds, watermarks and story covers |

The monogram is pure geometry with no fonts, so it stays sharp at any size. The A's right leg doubles as the N's first stem, and a North Star crowns the N.

## Editing and re-rendering the posts

Post layouts are plain HTML in `source/`, sharing `source/post.css`. Concept screenshots are `source/nocturne-hero.png` and `source/halden-hero.png`, captured from the live concept sites at 1440 × 810.

To re-render a PNG after editing (Windows, uses Microsoft Edge):

```powershell
cd brand-kit
$file = (Resolve-Path source/post-1-studio.html).Path -replace '\\','/'
./source/render.ps1 -Url "file:///$file" -Out "$PWD/post-1-studio.png" -Width 1080 -Height 1080
```

The script also works for the SVG logo and for capturing live sites (pass an `https://` URL).
