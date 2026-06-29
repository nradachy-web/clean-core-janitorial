import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work — Commercial Cleaning Case Studies",
  description:
    "Clean Core Janitorial is trusted by Michigan businesses across offices, medical, restaurants, retail, auto, and nonprofits. See the spaces we keep spotless across West and Central Michigan.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Trusted by Michigan
            <br />
            <span className="text-teal-deep">businesses.</span>
          </>
        }
        lead="From medical clinics to busy kitchens, dealerships to nonprofit offices, we keep working spaces across West and Central Michigan clean, healthy, and ready for the day."
      />

      {/* intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="wrap-wide max-w-3xl">
          <p className="eyebrow bubble mb-4">Who we clean for</p>
          <h2 className="display-lg text-navy">
            A track record across the industries that can&apos;t afford an off day.
          </h2>
          <p className="lead text-muted mt-5">
            We are proud to serve offices, medical and pediatric practices, restaurants, retail and
            medical supply, auto dealerships, and nonprofits. Here are a few of the spaces we keep
            spotless, week in and week out.
          </p>
        </div>
      </section>

      {/* client case-study cards */}
      <section className="bg-surface py-16 md:py-24">
        <div className="wrap-wide">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 70} className="h-full">
                <article className="card flex h-full flex-col p-7">
                  <span className="small inline-flex w-fit items-center gap-2 rounded-full bg-teal-tint px-3 py-1 font-[family-name:var(--font-display)] font-semibold text-teal-ink">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <circle cx="9" cy="9" r="6" opacity="0.9" />
                      <circle cx="16" cy="14" r="4" opacity="0.6" />
                    </svg>
                    {c.vertical}
                  </span>
                  <h3 className="display-md text-navy mt-5">{c.name}</h3>
                  <p className="body text-muted mt-3 grow">{c.note}</p>
                  <div className="mt-6 flex items-center gap-2 border-t border-line pt-5">
                    <span className="check h-7 w-7">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 6 9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="small font-[family-name:var(--font-display)] font-semibold text-navy/70">
                      Ongoing client
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
