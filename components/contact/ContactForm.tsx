"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Info, LoaderCircle, Mail, Send } from "lucide-react";
import { budgetOptions, serviceOptionGroups, serviceOptions } from "@/lib/content";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

type Fields = {
  name: string;
  business: string;
  email: string;
  service: string;
  budget: string;
  details: string;
};

function mailtoHref(f: Fields) {
  const subject = `Project enquiry from ${f.name || "website visitor"}`;
  const body = [
    `Name: ${f.name}`,
    `Business: ${f.business}`,
    `Email: ${f.email}`,
    `Service: ${f.service}`,
    `Budget: ${f.budget}`,
    "",
    f.details,
  ].join("\n");
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm({ configured }: { configured: boolean }) {
  const params = useSearchParams();
  const preset = params.get("service");
  const initialService = preset && serviceOptions.includes(preset) ? preset : "";

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fields, setFields] = useState<Fields>({
    name: "",
    business: "",
    email: "",
    service: initialService,
    budget: "",
    details: "",
  });

  const update = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    // No email service connected: hand the enquiry to the visitor's email app instead.
    if (!configured) {
      window.location.href = mailtoHref(fields);
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    const honeypot = (new FormData(e.currentTarget).get("company_website") as string) ?? "";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, company_website: honeypot }),
      });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (res.status === 503) {
        setStatus("unconfigured");
        return;
      }
      setError(data.error ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-surface flex flex-col items-center p-10 text-center sm:p-14"
        role="status"
      >
        <span className="grid size-16 place-items-center rounded-full bg-gold/15 text-gold">
          <Check aria-hidden className="size-7" />
        </span>
        <h2 className="mt-8 font-display text-4xl text-white">Thank you, {fields.name.split(" ")[0]}.</h2>
        <p className="mt-4 max-w-md text-muted">
          Your enquiry has been received. We&apos;ll review the details and reply to {fields.email} with
          next steps.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-surface p-6 sm:p-10">
      {!configured && (
        <p className="mb-8 flex items-start gap-3 rounded-xl border border-gold/25 bg-gold/5 p-4 text-sm leading-relaxed text-white/80">
          <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-gold" />
          <span>
            Online submissions aren&apos;t connected yet. Submitting will open your email app with your
            details filled in, addressed to <strong className="text-gold-light">{site.contact.email}</strong>.
          </span>
        </p>
      )}

      {/* Honeypot: hidden from people and assistive tech, tempting for bots. */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" required>
          <input id="name" className="field" required autoComplete="name" value={fields.name} onChange={update("name")} />
        </Field>
        <Field label="Business name" htmlFor="business">
          <input id="business" className="field" autoComplete="organization" value={fields.business} onChange={update("business")} />
        </Field>
        <Field label="Email" htmlFor="email" required className="sm:col-span-2">
          <input
            id="email"
            type="email"
            className="field"
            required
            autoComplete="email"
            value={fields.email}
            onChange={update("email")}
          />
        </Field>
        <Field label="Service required" htmlFor="service" className="sm:col-span-2">
          <Select id="service" value={fields.service} onChange={update("service")} groups={serviceOptionGroups} />
        </Field>
        <Field label="Project budget (USD)" htmlFor="budget" className="sm:col-span-2">
          <Select id="budget" value={fields.budget} onChange={update("budget")} options={budgetOptions} />
        </Field>
        <Field label="Project details" htmlFor="details" required className="sm:col-span-2">
          <textarea
            id="details"
            className="field min-h-40 resize-y"
            required
            minLength={10}
            placeholder="Tell us about your business, goals, timeline and anything you'd like us to know."
            value={fields.details}
            onChange={update("details")}
          />
        </Field>
      </div>

      <AnimatePresence>
        {(status === "error" || status === "unconfigured") && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="alert"
            className="mt-6 text-sm text-gold-light"
          >
            {status === "error" ? (
              error
            ) : (
              <>
                If your email app didn&apos;t open, write to us directly at{" "}
                <a className="underline underline-offset-4" href={mailtoHref(fields)}>
                  {site.contact.email}
                </a>
                .
              </>
            )}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted sm:max-w-xs">
          We use your details only to respond to your enquiry.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold text-ink shadow-[0_10px_40px_-12px_rgba(198,161,91,0.6)] transition-all duration-500 ease-luxe hover:-translate-y-0.5 hover:shadow-[0_14px_50px_-10px_rgba(229,201,139,0.75)] disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <LoaderCircle aria-hidden className="size-4 animate-spin" /> Sending…
            </>
          ) : configured ? (
            <>
              Send enquiry <Send aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </>
          ) : (
            <>
              Send via email <Mail aria-hidden className="size-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2.5 block text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
        {label}
        {required && (
          <span className="text-gold" aria-hidden>
            {" "}
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

function Select({
  id,
  value,
  onChange,
  options,
  groups,
}: {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: readonly string[];
  groups?: readonly { label: string; options: readonly string[] }[];
}) {
  const renderOptions = (list: readonly string[]) =>
    list.map((o) => (
      <option key={o} value={o} className="bg-ink-2">
        {o}
      </option>
    ));

  return (
    <div className="relative">
      <select id={id} className="field appearance-none pr-10" value={value} onChange={onChange}>
        <option value="">Select an option</option>
        {groups
          ? groups.map((g) => (
              <optgroup key={g.label} label={g.label} className="bg-ink-2">
                {renderOptions(g.options)}
              </optgroup>
            ))
          : renderOptions(options ?? [])}
      </select>
      <svg aria-hidden viewBox="0 0 20 20" className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2">
        <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" className="stroke-gold" />
      </svg>
    </div>
  );
}
