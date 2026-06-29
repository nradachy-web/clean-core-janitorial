import { Hero } from "@/components/sections/Hero";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { GuaranteeBand } from "@/components/sections/GuaranteeBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { CTA } from "@/components/sections/CTA";
import { LocalBusinessSchema } from "@/components/Schema";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <ClientStrip />
      <ServicesGrid />
      <WhyUs />
      <GuaranteeBand />
      <Testimonials />
      <ServiceArea />
      <CTA />
    </>
  );
}
