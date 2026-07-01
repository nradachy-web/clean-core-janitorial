"use client";

import { useState } from "react";
import { site, serviceArea, shiftOptions } from "@/lib/site";

const field =
  "w-full rounded-xl border border-line-2 bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-faint transition focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";
const label =
  "mb-2 block font-[family-name:var(--font-display)] text-[0.8rem] font-semibold uppercase tracking-wide text-muted";

const positions = [
  "General Cleaner",
  "Floor Technician",
  "Day Porter",
  "Crew Lead",
  "Open to any role",
];

export function CareersForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("botcheck")) return; // honeypot

    setStatus("sending");

    // combine shift checkboxes into one readable field
    const shifts = fd.getAll("shift_preference").map(String);
    fd.delete("shift_preference");
    fd.append("shift_preference", shifts.join(", ") || "Not specified");

    // careers submissions route to careers@cleancorejanitorial.com via a dedicated key
    fd.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_CAREERS_KEY ?? "");
    fd.append("subject", "New job application from cleancorejanitorial.com");
    fd.append("from_name", "Clean Core Careers");

    try {
      // multipart submit (no JSON) so the resume file is attached
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="card p-8 text-center sm:p-10">
        <span className="check mx-auto h-14 w-14">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="display-md text-navy mt-6">Application received</h3>
        <p className="body text-muted mx-auto mt-3 max-w-md">
          Thanks for your interest in joining Clean Core. We review every application and will reach
          out if there is a fit. Questions? Give us a call.
        </p>
        <a
          href={site.phoneHref}
          className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-display)] font-bold text-teal-deep hover:text-teal transition-colors"
        >
          {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="cf-name">Full name</label>
          <input id="cf-name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </div>
        <div>
          <label className={label} htmlFor="cf-phone">Phone</label>
          <input id="cf-phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="(616) 000-0000" />
        </div>
        <div>
          <label className={label} htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@email.com" />
        </div>
        <div>
          <label className={label} htmlFor="cf-position">Position</label>
          <select id="cf-position" name="position" className={field} defaultValue="">
            <option value="">Select a role</option>
            {positions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="cf-location">Preferred location</label>
          <select id="cf-location" name="preferred_location" className={field} defaultValue="">
            <option value="">Select an area</option>
            {serviceArea.cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
            <option value="Flexible / Any">Flexible / Any</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="cf-start">Earliest start date</label>
          <input id="cf-start" name="start_date" className={field} placeholder="e.g. Immediately, or a date" />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className={label}>Shift preference</legend>
        <div className="flex flex-wrap gap-2.5">
          {shiftOptions.map((s) => (
            <label
              key={s}
              className="group flex cursor-pointer items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-2.5 transition hover:border-teal/60"
            >
              <input type="checkbox" name="shift_preference" value={s} className="h-4 w-4 shrink-0 accent-[var(--color-teal-deep)]" />
              <span className="small font-[family-name:var(--font-display)] font-semibold text-navy">{s}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label className={label} htmlFor="cf-resume">Resume (PDF or Word)</label>
        <input
          id="cf-resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full rounded-xl border border-line-2 bg-white px-4 py-2.5 text-[0.9rem] text-muted file:mr-4 file:rounded-full file:border-0 file:bg-teal-tint file:px-4 file:py-2 file:font-[family-name:var(--font-display)] file:text-[0.85rem] file:font-bold file:text-teal-deep hover:file:bg-teal-light/40"
        />
        <p className="small mt-1.5 text-faint">
          Optional. You can also email your resume to{" "}
          <a href={`mailto:${site.careersEmail}`} className="text-teal-deep underline">{site.careersEmail}</a>.
        </p>
      </div>

      <div className="mt-6">
        <label className={label} htmlFor="cf-message">Tell us about yourself</label>
        <textarea id="cf-message" name="message" rows={4} className={field} placeholder="Cleaning experience, availability, anything you'd like us to know..." />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-teal-deep px-7 py-4 font-[family-name:var(--font-display)] text-[0.95rem] font-bold text-white shadow-[0_8px_20px_-8px_rgba(21,128,143,0.7)] transition-colors hover:bg-teal active:translate-y-px disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Submit Application"}
        {status !== "sending" ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : null}
      </button>

      {status === "error" ? (
        <div className="small mt-4 flex items-center gap-2 rounded-xl border border-line-2 bg-surface px-4 py-3 text-muted">
          <span>
            Something went wrong. Please email your resume to{" "}
            <a href={`mailto:${site.careersEmail}`} className="font-semibold text-teal-deep underline">{site.careersEmail}</a>.
          </span>
        </div>
      ) : (
        <p className="small mt-4 text-center text-faint">We review every application personally.</p>
      )}
    </form>
  );
}
