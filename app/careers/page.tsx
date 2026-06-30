import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CareersForm } from "@/components/sections/CareersForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers — Join the Clean Core Cleaning Crew",
  description:
    "Now hiring commercial cleaners across West Michigan. Flexible day, evening, and overnight shifts. Apply online with your resume and shift and location preferences.",
};

const perks = [
  { t: "Steady, year-round work", d: "Commercial contracts mean consistent hours, not feast or famine." },
  { t: "Shifts that fit your life", d: "Day, evening, overnight, and weekend options across West Michigan." },
  { t: "A bilingual workplace", d: "English and Spanish are both spoken here. You'll be understood and supported." },
  { t: "Room to grow", d: "Reliable cleaners move up to crew lead and beyond. We promote from within." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Join the
            <br />
            <span className="text-teal-deep">Clean Core crew.</span>
          </>
        }
        lead="We're always looking for dependable, detail-minded people who take pride in a job done right. Tell us about yourself and what shifts work for you."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="wrap-wide grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow bubble mb-4">Why work with us</p>
            <h2 className="display-lg text-navy">Good work, good people.</h2>

            <div className="mt-8 space-y-6">
              {perks.map((p) => (
                <div key={p.t} className="flex gap-4">
                  <span className="check h-9 w-9 mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="display-md text-navy">{p.t}</h3>
                    <p className="body text-muted mt-1">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 card p-6">
              <p className="small font-[family-name:var(--font-display)] font-semibold uppercase tracking-wide text-muted">
                Questions about a role?
              </p>
              <a
                href={site.phoneHref}
                className="mt-1.5 block font-[family-name:var(--font-display)] text-[1.2rem] font-extrabold text-navy hover:text-teal-deep transition-colors"
              >
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="small text-teal-deep underline break-all">
                {site.email}
              </a>
            </div>
          </div>

          <div>
            <h2 className="display-md text-navy mb-5">Apply now</h2>
            <CareersForm />
          </div>
        </div>
      </section>
    </>
  );
}
