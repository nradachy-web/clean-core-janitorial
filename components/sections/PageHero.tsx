import Image from "next/image";

/**
 * Shared interior-page hero header for Clean Core. Light and airy by default
 * (soft teal-tint canvas with the same bubble decorations as the homepage Hero),
 * with an optional photo variant that runs a real jobsite image under a navy
 * wash. Sits below the fixed 70px header via pt-32. Mirrors the homepage's
 * `.eyebrow .bubble` + display-heading rhythm.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  photo,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  photo?: string;
}) {
  // photo variant: dark navy-washed band with white type
  if (photo) {
    return (
      <section className="relative overflow-hidden bg-navy">
        <Image
          src={photo}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/65" />
        <div className="relative wrap-wide pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-teal-light bubble mb-5">{eyebrow}</p>
            <h1 className="display-2xl text-white">{title}</h1>
            {lead ? <p className="lead text-white/75 mt-6 max-w-2xl">{lead}</p> : null}
          </div>
        </div>
      </section>
    );
  }

  // default: bright/airy light variant
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* soft bubble decorations, echoing the homepage Hero */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal-tint opacity-70 blur-2xl" />
      <div className="pointer-events-none absolute top-24 -left-20 h-72 w-72 rounded-full bg-teal-light/20 blur-2xl" />

      <div className="relative wrap-wide pt-36 pb-14 md:pt-44 md:pb-20">
        <div className="max-w-3xl">
          <p className="eyebrow bubble mb-5">{eyebrow}</p>
          <h1 className="display-2xl text-navy">{title}</h1>
          {lead ? <p className="lead text-ink-2 mt-6 max-w-2xl">{lead}</p> : null}
        </div>
      </div>
    </section>
  );
}
