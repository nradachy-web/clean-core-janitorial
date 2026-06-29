import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { services, site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-surface">
      {/* soft bubble decorations */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal-tint opacity-70 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-teal-light/20 blur-2xl" />

      <div className="relative wrap-wide w-full py-32">
        <div className="max-w-2xl">
          <p className="eyebrow bubble mb-5">Error 404</p>
          <h1 className="display-2xl text-navy">
            This page took
            <br />
            <span className="text-teal-deep">the day off.</span>
          </h1>
          <p className="lead text-ink-2 mt-6 max-w-lg">
            The page you were after has moved or never existed. Let&apos;s get you back to a clean
            start.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <Button href="/" variant="primary">
              Back to Home
            </Button>
            <Button href="/contact" variant="outline">
              Get a Free Quote
            </Button>
          </div>

          <div className="mt-14 border-t border-line-2 pt-8">
            <p className="eyebrow bubble mb-5">What we clean</p>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="font-[family-name:var(--font-display)] font-bold text-navy/75 hover:text-teal-deep transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p className="small text-muted mt-10">
            Or call us at{" "}
            <a href={site.phoneHref} className="font-semibold text-navy hover:text-teal-deep">
              {site.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
