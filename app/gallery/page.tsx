import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTA } from "@/components/sections/CTA";
import { gallery } from "@/lib/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Gallery — Commercial Spaces We Keep Spotless",
  description:
    "A look at the offices, medical practices, and facilities Clean Core Janitorial keeps clean across Grand Rapids and West Michigan.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            The work speaks
            <br />
            <span className="text-teal-deep">for itself.</span>
          </>
        }
        lead="A look at the offices, clinics, and facilities we keep clean and presentable across West Michigan, week after week."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="wrap-wide">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {gallery.map((g) => (
              <figure
                key={g.src}
                className="group relative overflow-hidden rounded-2xl border border-line shadow-[var(--shadow-card)] break-inside-avoid"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(g.src)}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="small text-white font-[family-name:var(--font-display)] font-semibold">
                    {g.alt}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
