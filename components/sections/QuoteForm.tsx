"use client";

import { useState } from "react";
import { site, services, serviceArea } from "@/lib/site";

const field =
  "w-full rounded-xl border border-line-2 bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-faint transition focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";
const label =
  "mb-2 block font-[family-name:var(--font-display)] text-[0.8rem] font-semibold uppercase tracking-wide text-muted";

/** Services the customer can request, drawn from the verticals + a recurring-contract option. */
const serviceOptions = [...services.map((s) => s.name), "Recurring contract"];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("botcheck")) return; // honeypot
    setStatus("sending");

    // collect multi-checkbox "services needed" into one readable line
    const needed = fd.getAll("services_needed").map(String);

    const payload: Record<string, string> = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
      subject: "New quote request from cleancorejanitorial.com",
      from_name: "Clean Core Janitorial Website",
    };
    fd.forEach((v, k) => {
      if (k === "services_needed") return; // handled below
      payload[k] = String(v);
    });
    payload.services_needed = needed.join(", ");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
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
            <path
              d="M5 13l4 4 10-10"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="display-md text-navy mt-6">Request received</h3>
        <p className="body text-muted mx-auto mt-3 max-w-md">
          Thanks. We will reach out shortly to set up your free quote. Need us sooner? Call us
          directly.
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
      {/* honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="qf-name">
            Name
          </label>
          <input id="qf-name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </div>
        <div>
          <label className={label} htmlFor="qf-business">
            Business name
          </label>
          <input
            id="qf-business"
            name="business_name"
            autoComplete="organization"
            className={field}
            placeholder="Your company"
          />
        </div>
        <div>
          <label className={label} htmlFor="qf-email">
            Email
          </label>
          <input
            id="qf-email"
            name="email"
            type="email"
            autoComplete="email"
            className={field}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className={label} htmlFor="qf-phone">
            Phone
          </label>
          <input
            id="qf-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={field}
            placeholder="(616) 000-0000"
          />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="qf-city">
            City / service area
          </label>
          <select id="qf-city" name="city" className={field} defaultValue="">
            <option value="">Select a city</option>
            {serviceArea.cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* services needed — multi checkbox */}
      <fieldset className="mt-6">
        <legend className={label}>Services needed</legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {serviceOptions.map((s) => (
            <label
              key={s}
              className="group flex cursor-pointer items-center gap-3 rounded-xl border border-line bg-surface px-4 py-2.5 transition hover:border-teal/60"
            >
              <input
                type="checkbox"
                name="services_needed"
                value={s}
                className="h-4 w-4 shrink-0 accent-[var(--color-teal-deep)]"
              />
              <span className="small font-[family-name:var(--font-display)] font-semibold text-navy">
                {s}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label className={label} htmlFor="qf-message">
          Tell us about your space
        </label>
        <textarea
          id="qf-message"
          name="message"
          rows={4}
          className={field}
          placeholder="Square footage, how often you need cleaning, anything specific you want handled..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-teal-deep px-7 py-4 font-[family-name:var(--font-display)] text-[0.95rem] font-bold text-white shadow-[0_8px_20px_-8px_rgba(21,128,143,0.7)] transition-colors hover:bg-teal active:translate-y-px disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Get My Free Quote"}
        {status !== "sending" ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </button>

      {status === "error" ? (
        <div className="small mt-4 flex items-center gap-2 rounded-xl border border-line-2 bg-surface px-4 py-3 text-muted">
          <span>
            Something went wrong. Please call us at{" "}
            <a href={site.phoneHref} className="font-semibold text-teal-deep underline">
              {site.phone}
            </a>
            .
          </span>
        </div>
      ) : (
        <p className="small mt-4 text-center text-faint">
          No spam, no pressure. We usually reply the same day.
        </p>
      )}
    </form>
  );
}
