"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Button } from "@/components/ui/button";
import { diningOutlets } from "@/data/dining";
import Link from "next/link";

export function DiningClient() {
  return (
    <>
      <PageHero
        label="Dining"
        title="A Feast for Every Sense"
        subtitle="From sunrise breakfasts to starlit dinners, our restaurants celebrate flavour, craftsmanship, and the art of gracious hospitality."
        breadcrumbs={[{ label: "Dining", href: "/dining" }]}
      />

      {/* AEO Summary */}
      <section className="py-10 bg-ivory-50 border-b border-earth-100">
        <div className="container-luxury max-w-3xl text-center">
          <p className="text-earth-700 leading-relaxed">
            Giovanni Village Resort offers four dining experiences: Gourmet By The Woods, our signature fine dining restaurant with international cuisine (12:30 PM – 3:00 PM, 7:00 PM – 10:30 PM); Pihu, a rooftop restaurant with candle-lit dinners, live music, and stargazing (7:00 PM – 11:00 PM); Berry & Beans, an all-day cafe with light bites, pastries, and artisanal coffees (7:00 AM – 11:00 PM); and The Den, a laid-back bistro bar with comfort food, live sports, and craft cocktails (12:00 PM – 11:30 PM). 24-hour room service is also available.
          </p>
        </div>
      </section>

      {/* Outlets */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="space-y-20">
            {diningOutlets.map((outlet, i) => (
              <motion.div
                key={outlet.id}
                id={outlet.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.6 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <ImagePlaceholder
                      src={outlet.heroImage.src}
                      alt={outlet.name}
                      aspect="video"
                      label={outlet.name}
                      className="rounded-2xl"
                    />
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="font-accent text-sm tracking-[0.15em] uppercase text-gold-600 mb-2">
                      {outlet.tagline}
                    </p>
                    <h2 className="font-heading text-3xl md:text-4xl font-medium text-earth-900">
                      {outlet.name}
                    </h2>
                    <p className="mt-4 text-earth-600 leading-relaxed">{outlet.description}</p>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-earth-600 bg-ivory-100 px-3 py-2 rounded-full">
                        <Clock className="w-4 h-4 text-gold-600" />
                        {outlet.timings}
                      </div>
                      {outlet.reservationRequired && (
                        <span className="text-sm text-earth-600 bg-gold-50 px-3 py-2 rounded-full">
                          Reservation recommended
                        </span>
                      )}
                      {outlet.dressCode && (
                        <span className="text-sm text-earth-600 bg-ivory-100 px-3 py-2 rounded-full">
                          {outlet.dressCode}
                        </span>
                      )}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {outlet.cuisine.map((c) => (
                        <span key={c} className="text-xs font-medium text-gold-700 bg-gold-50 px-2.5 py-1 rounded-full">
                          {c}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-6 space-y-2">
                      {outlet.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-earth-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Room Service Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "200px" }}
            className="mt-20 text-center bg-ivory-100 rounded-2xl p-10"
          >
            <h3 className="font-heading text-2xl font-medium text-earth-900 mb-3">
              In-Room Dining
            </h3>
            <p className="text-earth-600 max-w-xl mx-auto">
              Prefer the comfort of your room? 24-hour room service is available with a curated menu of meals, beverages, and snacks delivered to your door.
            </p>
            <Link href="/book" className="inline-block mt-6">
              <Button variant="primary" size="md">
                Book Your Stay <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
