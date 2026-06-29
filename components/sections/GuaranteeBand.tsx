import Image from "next/image";
import { Button } from "@/components/ui/Button";

/** Full-bleed photo band under a navy wash (also keeps old-brand apparel atmospheric). */
export function GuaranteeBand() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/photos/band-wide-1.jpg"
        alt="Clean Core team servicing a commercial space"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative wrap-wide py-20 md:py-24 text-center">
        <p className="eyebrow !text-teal-light mb-5">Our promise</p>
        <h2 className="display-xl text-white max-w-3xl mx-auto">
          We don&apos;t stop until your space is completely spotless.
        </h2>
        <p className="lead text-white/75 mt-5 max-w-2xl mx-auto">
          Every job is backed by our 100% satisfaction guarantee. If something gets missed, we come
          back and make it right, no questions asked.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="/contact" variant="white">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
