import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { WhyUs } from "@/components/sections/WhyUs";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Clean Core — A Cleaning Crew You Can Keep",
  description:
    "Family and Latino-owned, bilingual, trained and insured, and backed by a 100% satisfaction guarantee. See how Clean Core Janitorial works, from walkthrough to ongoing quality checks.",
};

const steps = [
  {
    n: "01",
    title: "Walkthrough & quote",
    desc: "We visit your space, learn how it gets used, and put together a clear, free quote. No pressure, no obligation.",
  },
  {
    n: "02",
    title: "A plan built for your space",
    desc: "We tailor the scope, frequency, and schedule to your building and your operations, including after-hours service.",
  },
  {
    n: "03",
    title: "A vetted, trained crew",
    desc: "The same reliable, bilingual team handles your space, trained on current methods, safety, and your specific checklist.",
  },
  {
    n: "04",
    title: "Ongoing quality checks",
    desc: "We keep an eye on the details and stay in touch. If anything is ever missed, we come back and make it right.",
  },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Clean Core"
        title={
          <>
            The crew busy managers
            <br />
            <span className="text-teal-deep">actually keep.</span>
          </>
        }
        lead="A local, family and Latino-owned cleaning company built on reliability, clear communication, and a standard we stand behind. Here is what working with us looks like."
      />

      <WhyUs />

      {/* How we work */}
      <section className="bg-white py-20 md:py-28">
        <div className="wrap-wide">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow bubble mb-4">How we work</p>
            <h2 className="display-xl text-navy">Simple to start, easy to keep.</h2>
            <p className="lead text-muted mt-4">
              Getting set up with Clean Core is straightforward. Here is the path from first call to
              a spotless workplace, week after week.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 4) * 70} className="h-full">
                <div className="card flex h-full flex-col p-7">
                  <span className="font-[family-name:var(--font-display)] text-[2rem] font-extrabold leading-none text-teal-light">
                    {s.n}
                  </span>
                  <h3 className="display-md text-navy mt-4">{s.title}</h3>
                  <p className="body text-muted mt-2 grow">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* eco / enzyme + bilingual story + capabilities */}
      <section className="bg-surface py-20 md:py-28">
        <div className="wrap-wide grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="card h-full p-8">
              <span className="check mb-5 h-12 w-12 bg-teal-tint">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3C7 7 5 11 5 14a7 7 0 0 0 14 0c0-3-2-7-7-11Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M9 14c0-2 1.5-3.5 3-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="display-lg text-navy">Eco-friendly, enzyme-based cleaning</h3>
              <p className="body text-muted mt-4">
                We use environmentally responsible, enzyme-based cleaning agents that break down
                grime at the source. They are tough on dirt, odor, and bacteria, and easy on your
                space, your people, and the planet. It is a cleaner clean, without the harsh chemical
                smell.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="card h-full p-8">
              <span className="check mb-5 h-12 w-12 bg-teal-tint">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 5h11v8H7l-3 3V5ZM12 13v2a2 2 0 0 0 2 2h4l2 2V11a2 2 0 0 0-2-2h-1"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="display-lg text-navy">A bilingual, family-owned team</h3>
              <p className="body text-muted mt-4">
                Clean Core is a local, family and Latino-owned business led by Jovanni. Our bilingual
                (English and Spanish) crew communicates clearly with your team and ours, so nothing
                gets lost in translation. When you call, you reach people who take real pride in the
                work and stand behind it with our 100% satisfaction guarantee.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="wrap-wide mt-12">
          <p className="small mb-4 font-[family-name:var(--font-display)] font-semibold uppercase tracking-wide text-muted">
            Everything we handle
          </p>
          <div className="flex flex-wrap gap-2">
            {capabilities.map((c) => (
              <span key={c} className="small rounded-full bg-teal-tint px-3.5 py-1.5 text-teal-ink">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
