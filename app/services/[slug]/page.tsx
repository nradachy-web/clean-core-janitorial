import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services, capabilities } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Params = { slug: string };

/** Spaces each program is built for, for the "Built for" chips. */
const builtFor: Record<string, string[]> = {
  office: ["Office buildings", "Corporate suites", "Coworking spaces", "Professional offices"],
  medical: ["Medical clinics", "Dental practices", "Therapy centers", "Specialty practices"],
  restaurant: ["Restaurants", "Cafes", "Bars & taprooms", "Commercial kitchens"],
  gym: ["Gyms", "Fitness studios", "Locker rooms", "Wellness centers"],
  retail: ["Retail storefronts", "Showrooms", "Shopping centers", "Boutiques"],
  school: ["Schools", "Daycares", "Training centers", "Education facilities"],
  industrial: ["Warehouses", "Manufacturing", "Distribution centers", "Job sites"],
  municipal: ["Town halls", "Government offices", "Public buildings", "Community centers"],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.name} in West Michigan`,
    description: service.blurb,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);
  const spaces = builtFor[slug] ?? [];

  return (
    <>
      <PageHero eyebrow={service.short} title={service.name} lead={service.blurb} photo={service.photo} />

      {/* detail + what's included */}
      <section className="bg-white py-20 md:py-28">
        <div className="wrap-wide grid gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:gap-16">
          <div>
            <span className="check mb-6 h-14 w-14 bg-teal-tint">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </span>
            <p className="eyebrow bubble mb-4">What this looks like</p>
            <p className="lead text-ink-2">{service.detail}</p>

            <h2 className="display-lg text-navy mt-12">What is included</h2>
            <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="check mt-0.5 h-7 w-7 shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="body text-ink-2">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Built for + capabilities sidebar */}
          <aside>
            <div className="card p-7 lg:sticky lg:top-24">
              <p className="eyebrow bubble mb-5">Built for</p>
              <ul className="flex flex-wrap gap-2">
                {spaces.map((sp) => (
                  <li
                    key={sp}
                    className="small rounded-full bg-teal-tint px-3.5 py-1.5 text-teal-ink"
                  >
                    {sp}
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-line pt-6">
                <p className="small mb-3 font-[family-name:var(--font-display)] font-semibold uppercase tracking-wide text-muted">
                  Also on the checklist
                </p>
                <ul className="flex flex-wrap gap-2">
                  {capabilities.slice(0, 6).map((c) => (
                    <li key={c} className="small rounded-full bg-surface-2 px-3 py-1.5 text-navy/70">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 border-t border-line pt-6">
                <p className="body text-muted">
                  Not sure exactly what your space needs? Tell us about it and we will put together
                  an honest plan and a free quote.
                </p>
                <Link
                  href="/contact"
                  className="group mt-5 inline-flex items-center gap-2 font-[family-name:var(--font-display)] font-bold text-[0.92rem] text-teal-deep"
                >
                  Get a free quote
                  <svg
                    width="16"
                    height="16"
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
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* other services */}
      <section className="bg-surface py-20 md:py-24">
        <div className="wrap-wide">
          <p className="eyebrow bubble mb-6">More of what we clean</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={(i % 4) * 60} className="h-full">
                <Link
                  href={`/services/${o.slug}`}
                  className="group card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <span className="check mb-4 h-11 w-11 transition-colors group-hover:bg-teal-deep group-hover:text-white">
                    <ServiceIcon name={o.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="display-md text-navy">{o.name}</h3>
                  <p className="small text-muted mt-2 grow">{o.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-[family-name:var(--font-display)] text-[0.85rem] font-bold text-teal-deep">
                    Learn more
                    <svg
                      width="14"
                      height="14"
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
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
