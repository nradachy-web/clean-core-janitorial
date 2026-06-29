import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote — Commercial Cleaning in West Michigan",
  description:
    "Request a free, no-pressure commercial cleaning quote from Clean Core Janitorial. Tell us about your space and we will put together a plan, or come do a free on-site walkthrough. 100% satisfaction guarantee.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free quote · No obligation"
        title={
          <>
            Get a free
            <br />
            <span className="text-teal-deep">quote.</span>
          </>
        }
        lead="Tell us about your space and we will put together a plan and a free quote. Prefer to walk it together? We will happily come to you."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="wrap-wide grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* form */}
          <div className="lg:order-last">
            <QuoteForm />
          </div>

          {/* contact info */}
          <aside className="lg:order-first">
            <p className="eyebrow bubble mb-4">Talk to us</p>
            <h2 className="display-lg text-navy">
              Prefer to call? We&apos;d love to hear about your space.
            </h2>

            <ul className="mt-8 divide-y divide-line border-y border-line">
              <li className="py-5">
                <p className="small mb-1.5 font-[family-name:var(--font-display)] font-semibold uppercase tracking-wide text-muted">
                  Phone
                </p>
                <a
                  href={site.phoneHref}
                  className="font-[family-name:var(--font-display)] text-[1.2rem] font-extrabold text-navy hover:text-teal-deep transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="py-5">
                <p className="small mb-1.5 font-[family-name:var(--font-display)] font-semibold uppercase tracking-wide text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="body text-ink-2 hover:text-teal-deep transition-colors break-all"
                >
                  {site.email}
                </a>
              </li>
              <li className="py-5">
                <p className="small mb-1.5 font-[family-name:var(--font-display)] font-semibold uppercase tracking-wide text-muted">
                  Service area
                </p>
                <p className="body text-ink-2">
                  {site.region}. Based in {site.cityLine}.
                </p>
              </li>
            </ul>

            <div className="card mt-8 bg-surface p-6">
              <span className="check mb-4 h-10 w-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6 9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="display-md text-navy">100% satisfaction guarantee</p>
              <p className="body text-muted mt-2">
                We don&apos;t stop until you&apos;re completely satisfied. If something gets missed,
                we come back and make it right, no questions asked.
              </p>
            </div>

            <p className="body text-muted mt-6">
              Want to see it in person first? We&apos;ll happily do a free on-site walkthrough of your
              space before you decide anything.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
