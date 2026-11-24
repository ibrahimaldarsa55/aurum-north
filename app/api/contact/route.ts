/**
 * Contact form endpoint.
 *
 * Sends enquiries by email through Resend (https://resend.com) using its REST API.
 * Required environment variables (see .env.example):
 *   RESEND_API_KEY      – API key from your Resend dashboard
 *   CONTACT_TO_EMAIL    – inbox that should receive enquiries
 *   CONTACT_FROM_EMAIL  – verified sender, e.g. "Aurum North <hello@yourdomain.ca>"
 *
 * If they are not set, the endpoint answers 503 and the form falls back to email,
 * so the site never pretends a message was sent when it was not.
 */

import { site } from "@/lib/site";
import { isContactConfigured } from "@/lib/contact";

type Payload = {
  name?: string;
  business?: string;
  email?: string;
  service?: string;
  budget?: string;
  details?: string;
  company_website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots tend to fill every field, including the hidden one. Pretend success.
  if (clean(body.company_website, 200)) {
    return Response.json({ ok: true });
  }

  const data = {
    name: clean(body.name, 120),
    business: clean(body.business, 160),
    email: clean(body.email, 200),
    service: clean(body.service, 120),
    budget: clean(body.budget, 60),
    details: clean(body.details, 5000),
  };

  if (!data.name || !EMAIL_RE.test(data.email) || data.details.length < 10) {
    return Response.json(
      { error: "Please provide your name, a valid email and a few details about your project." },
      { status: 422 },
    );
  }

  if (!isContactConfigured()) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const rows = [
    ["Name", data.name],
    ["Business", data.business || "—"],
    ["Email", data.email],
    ["Service", data.service || "—"],
    ["Budget", data.budget || "—"],
  ];

  const html = `
    <h2>New enquiry — ${escapeHtml(site.name)}</h2>
    <table cellpadding="6">${rows
      .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
      .join("")}</table>
    <p><strong>Project details</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(data.details)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? `${site.name} <onboarding@resend.dev>`,
      to: [process.env.CONTACT_TO_EMAIL],
      reply_to: data.email,
      subject: `New enquiry from ${data.name}${data.business ? ` (${data.business})` : ""}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return Response.json({ error: "We couldn't send your message right now." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
