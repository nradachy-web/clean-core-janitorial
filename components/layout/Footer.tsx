import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="wrap-wide py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <div>
            <Logo variant="light" />
            <p className="body text-white/65 mt-5 max-w-xs">
              Dependable commercial cleaning for offices, medical, retail, and industrial spaces
              across West Michigan. Locally owned, bilingual, and fully committed to your space.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-6 text-white/55 small">
              <span>Locally & Latino-owned</span>
              <span className="text-white/30">•</span>
              <span>Bilingual EN/ES</span>
            </div>
          </div>

          <div>
            <h3 className="eyebrow !text-teal-light mb-5">Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="small text-white/75 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow !text-teal-light mb-5">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/why-us" className="small text-white/75 hover:text-white transition-colors">Why Us</Link></li>
              <li><Link href="/gallery" className="small text-white/75 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/service-area" className="small text-white/75 hover:text-white transition-colors">Service Area</Link></li>
              <li><Link href="/careers" className="small text-white/75 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="small text-white/75 hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow !text-teal-light mb-5">Get in touch</h3>
            <ul className="space-y-3 small text-white/75">
              <li><a href={site.phoneHref} className="hover:text-white transition-colors">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-white transition-colors break-all">{site.email}</a></li>
              <li className="text-white/55">{site.cityLine}</li>
              <li className="pt-2">
                <span className="inline-block bg-teal-deep/30 border border-teal-light/30 text-teal-light px-3 py-1 small rounded-full">
                  100% satisfaction guarantee
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-line-navy flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="small text-white/45">© 2026 {site.name}. All rights reserved.</p>
          <p className="font-[family-name:var(--font-display)] text-[0.78rem] text-white/35">
            Built by Modern Apex Strategies
          </p>
        </div>
      </div>
    </footer>
  );
}
