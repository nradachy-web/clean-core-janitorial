import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="bg-navy py-20 md:py-24">
      <div className="wrap-wide flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        <div className="max-w-xl">
          <p className="eyebrow !text-teal-light mb-4">Free quote · No obligation</p>
          <h2 className="display-xl text-white">Ready for a cleaner workplace?</h2>
          <p className="lead text-white/75 mt-4">
            Tell us about your space and we&apos;ll put together a plan and a free quote. Prefer to
            walk it together? We&apos;ll come to you.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Button href="/contact" variant="white">
            Get a Free Quote
          </Button>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 border border-white/35 text-white font-[family-name:var(--font-display)] font-bold text-[0.95rem] rounded-full px-7 py-3.5 hover:bg-white/10 transition-colors"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
