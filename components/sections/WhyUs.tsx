import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { whyUs, capabilities } from "@/lib/site";

export function WhyUs() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="wrap-wide grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-[var(--shadow-lift)]">
            <Image
              src="/photos/portrait-1.jpg"
              alt="A clean, organized office workspace maintained by Clean Core"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
          </div>
          <div className="absolute -top-5 -right-4 sm:-right-6 card px-5 py-4">
            <div className="font-[family-name:var(--font-display)] font-extrabold text-navy text-2xl leading-none">EN / ES</div>
            <div className="small text-muted mt-1">Bilingual team</div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <p className="eyebrow bubble mb-4">Why Clean Core</p>
          <h2 className="display-xl text-navy">The reliable crew busy managers actually keep.</h2>

          <div className="mt-9 space-y-6">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-4">
                <span className="check w-9 h-9 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="display-md text-navy">{w.title}</h3>
                  <p className="body text-muted mt-1">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 pt-7 border-t border-line-2">
            <p className="small font-[family-name:var(--font-display)] font-semibold uppercase tracking-wide text-muted mb-3">
              Also on the checklist
            </p>
            <div className="flex flex-wrap gap-2">
              {capabilities.map((c) => (
                <span key={c} className="small text-teal-ink bg-teal-tint rounded-full px-3.5 py-1.5">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
