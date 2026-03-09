"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { diningOutlets } from "@/data/dining";

export function DiningSection() {
  return (
    <section className="section-padding" aria-labelledby="dining-heading">
      <div className="container-luxury">
        <SectionHeading
          label="Dining"
          title="A Feast for Every Sense"
          subtitle="From sunrise breakfasts to starlit dinners, our restaurants celebrate flavour, craftsmanship, and the art of gracious hospitality."
        />

        <div className="space-y-16">
          {diningOutlets.map((outlet, i) => (
            <motion.div
              key={outlet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ImagePlaceholder
                  alt={outlet.name}
                  aspect="video"
                  label={outlet.name}
                  src={outlet.heroImage.src}
                  className="rounded-2xl"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="font-accent text-sm tracking-[0.15em] uppercase text-gold-600 mb-2">
                  {outlet.tagline}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-medium text-earth-900">
                  {outlet.name}
                </h3>
                <p className="mt-4 text-earth-600 leading-relaxed">
                  {outlet.description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-earth-500">
                  <Clock className="w-4 h-4" />
                  {outlet.timings}
                </div>
                <ul className="mt-4 space-y-1.5">
                  {outlet.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-earth-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/dining#${outlet.slug}`} className="inline-block mt-6">
                  <Button variant="outline" size="md">
                    Explore {outlet.name} <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
