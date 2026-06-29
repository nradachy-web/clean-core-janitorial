import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services } from "@/lib/site";

export function ServicesGrid({
  heading = "Cleaning for every kind of space",
  eyebrow = "What we clean",
  intro = "From a single office to a multi-building facility, we tailor a recurring plan to your space and schedule.",
}: {
  heading?: string;
  eyebrow?: string;
  intro?: string;
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="wrap-wide">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow bubble mb-4">{eyebrow}</p>
          <h2 className="display-xl text-navy">{heading}</h2>
          <p className="lead text-muted mt-4">{intro}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 70} className="h-full">
              <Link
                href={`/services/${s.slug}`}
                className="group card h-full p-6 flex flex-col hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition-all duration-300"
              >
                <span className="check w-12 h-12 mb-5 group-hover:bg-teal-deep group-hover:text-white transition-colors">
                  <ServiceIcon name={s.icon} className="w-6 h-6" />
                </span>
                <h3 className="display-md text-navy">{s.name}</h3>
                <p className="body text-muted mt-2 grow">{s.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-[family-name:var(--font-display)] font-bold text-[0.88rem] text-teal-deep">
                  Learn more
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
