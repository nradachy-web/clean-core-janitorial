import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Service Area — West & Central Michigan Commercial Cleaning",
  description:
    "Commercial janitorial and office cleaning in Grand Rapids, Lansing, Jackson, Flint, Midland, and Ann Arbor. Local, bilingual crews keeping West and Central Michigan workplaces spotless.",
};

const cityCopy: { city: string; body: string }[] = [
  {
    city: "Grand Rapids",
    body: "Our home base. We clean offices, medical and dental practices, restaurants, and retail across Grand Rapids and the surrounding West Michigan communities, with after-hours scheduling that works around your business and a crew that shows up the same way every time.",
  },
  {
    city: "Lansing",
    body: "From professional offices to government and public buildings, Lansing businesses count on dependable janitorial service. We tailor a recurring plan to your space, keep high-traffic areas spotless, and back every visit with our 100% satisfaction guarantee.",
  },
  {
    city: "Jackson",
    body: "Jackson offices, clinics, and storefronts get the same attention to detail our long-term clients rely on. We handle restrooms, break rooms, floors, and the high-touch surfaces that matter most, on a schedule built around how your space is used.",
  },
  {
    city: "Flint",
    body: "We bring trained, vetted crews to Flint workplaces of every size, from single offices to larger facilities. Expect clear communication, consistent quality, and enzyme-based cleaning that keeps your space fresh and presentable for staff and visitors alike.",
  },
  {
    city: "Midland",
    body: "Midland businesses get reliable commercial cleaning without the runaround. Whether it is an office suite, a medical practice, or a retail floor, we build a plan around your needs and keep it on track with ongoing quality checks.",
  },
  {
    city: "Ann Arbor",
    body: "Ann Arbor offices, practices, and storefronts trust us to keep their spaces clean and professional. Our bilingual team works around your hours, follows a clear scope every visit, and makes it right if anything is ever missed.",
  },
];

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Service area"
        title={
          <>
            Serving West &amp; Central
            <br />
            <span className="text-teal-deep">Michigan.</span>
          </>
        }
        lead="Local crews, local accountability. We provide commercial cleaning across the greater Grand Rapids, Lansing, Jackson, Flint, Midland, and Ann Arbor areas."
      />

      <ServiceArea />

      {/* per-city local copy */}
      <section className="bg-white py-20 md:py-28">
        <div className="wrap-wide">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow bubble mb-4">Where we work</p>
            <h2 className="display-xl text-navy">Commercial cleaning, city by city.</h2>
            <p className="lead text-muted mt-4">
              Wherever your business is across the region, you get the same dependable crew and the
              same standard. Here is a closer look at the areas we serve.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {cityCopy.map((c, i) => (
              <Reveal key={c.city} delay={(i % 2) * 70} className="h-full">
                <article className="card flex h-full gap-5 p-7">
                  <span className="check h-11 w-11 shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="display-md text-navy">{c.city}, MI</h3>
                    <p className="body text-muted mt-2">{c.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="body text-muted mt-10 max-w-2xl">
            Not sure if you are in our service area? Reach out anyway. We are happy to take a look and
            point you in the right direction.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
