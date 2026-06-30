import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { trustPoints } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative bg-surface overflow-hidden">
      {/* soft bubble decorations */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-tint blur-2xl opacity-70" />
      <div className="pointer-events-none absolute top-40 -left-20 w-72 h-72 rounded-full bg-teal-light/20 blur-2xl" />

      <div className="relative wrap-wide pt-32 pb-16 md:pt-40 md:pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="eyebrow bubble mb-5">Commercial Cleaning · West Michigan</p>
          <h1 className="display-2xl text-navy">
            A spotless workplace,
            <span className="text-teal-deep"> handled.</span>
          </h1>
          <p className="lead text-ink-2 mt-6 max-w-xl">
            Dependable commercial janitorial for offices, medical, retail, and industrial spaces
            across Grand Rapids and West Michigan. Locally owned, bilingual, and fully committed to
            your space.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mt-8">
            <Button href="/contact" variant="primary">
              Get a Free Quote
            </Button>
            <Button href="/contact" variant="outline">
              Request a Walkthrough
            </Button>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2.5 mt-9">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-center gap-2 small text-ink-2">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="text-teal-deep shrink-0">
                  <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-[var(--shadow-lift)]">
            <Image
              src="/photos/band-wide-2.jpg"
              alt="A freshly cleaned corporate office maintained by Clean Core Janitorial"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/15 to-transparent" />
          </div>
          {/* floating proof card */}
          <div className="absolute -bottom-6 -left-4 sm:-left-6 card px-6 py-5 max-w-[15rem]">
            <div className="flex items-center gap-3">
              <span className="check w-9 h-9">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <div className="font-[family-name:var(--font-display)] font-extrabold text-navy leading-none">100%</div>
                <div className="small text-muted leading-tight mt-0.5">Satisfaction guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
