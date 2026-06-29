import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { reviews } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="wrap-wide">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow bubble mb-4">In their words</p>
          <h2 className="display-xl text-navy">Clients who made the switch.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 80} className="h-full">
              <figure className="card h-full p-7 flex flex-col">
                <Stars />
                <blockquote className="body text-ink-2 mt-4 grow">“{r.text}”</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-line flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-teal-tint text-teal-deep flex items-center justify-center font-[family-name:var(--font-display)] font-bold">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-[family-name:var(--font-display)] font-bold text-navy leading-tight">{r.name}</span>
                    <span className="block small text-muted">{r.when}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
