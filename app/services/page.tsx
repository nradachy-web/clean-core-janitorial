import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services in West Michigan",
  description:
    "Office, medical, restaurant, retail, gym, school, industrial, and municipal cleaning across Grand Rapids and West Michigan. Recurring janitorial tailored to your space, with a 100% satisfaction guarantee.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Commercial cleaning,
            <br />
            <span className="text-teal-deep">handled for you.</span>
          </>
        }
        lead="Eight specialized cleaning programs, one dependable crew. We build a recurring plan around your space, your schedule, and the standard your customers expect."
      />

      <ServicesGrid
        heading="Commercial cleaning, tailored to your space"
        eyebrow="Our services"
      />

      {/* task-based capabilities */}
      <section className="bg-surface py-20 md:py-28">
        <div className="wrap-wide grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          <div>
            <p className="eyebrow bubble mb-4">On every checklist</p>
            <h2 className="display-xl text-navy">The tasks we take care of, every visit.</h2>
            <p className="lead text-muted mt-5 max-w-md">
              Whatever your building needs, we fold it into one clear scope of work so nothing
              gets missed. Need something that is not listed here? Just ask.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c} delay={(i % 2) * 60}>
                <div className="card flex items-center gap-3.5 px-5 py-4">
                  <span className="check h-9 w-9 shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-[family-name:var(--font-display)] font-semibold text-navy">
                    {c}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
