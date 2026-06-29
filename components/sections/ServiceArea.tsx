import { serviceArea } from "@/lib/site";

export function ServiceArea() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="wrap-wide grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="eyebrow bubble mb-4">Service Area</p>
          <h2 className="display-xl text-navy">Serving West &amp; Central Michigan.</h2>
          <p className="lead text-muted mt-5 max-w-md">{serviceArea.blurb}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {serviceArea.cities.map((c) => (
            <div
              key={c}
              className="card px-5 py-4 flex items-center gap-2.5 hover:shadow-[var(--shadow-lift)] transition-shadow"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-teal-deep shrink-0">
                <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
              </svg>
              <span className="font-[family-name:var(--font-display)] font-semibold text-navy">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
