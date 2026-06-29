import { clients } from "@/lib/site";

export function ClientStrip() {
  return (
    <section className="bg-white border-y border-line">
      <div className="wrap-wide py-10">
        <p className="text-center small font-[family-name:var(--font-display)] font-semibold uppercase tracking-[0.14em] text-muted">
          Trusted by Michigan businesses
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
          {clients.map((c) => (
            <span
              key={c.name}
              className="font-[family-name:var(--font-display)] font-bold text-navy/55 hover:text-navy transition-colors text-[1.02rem] tracking-tight"
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
