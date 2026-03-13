"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/shared/page-hero";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Check } from "lucide-react";
import { experiences } from "@/data/experiences";

export function ExperiencesClient() {
  return (
    <>
      <PageHero
        label="Experiences"
        title="Moments to Cherish"
        subtitle="From rejuvenating spa treatments to guided nature trails and family adventures, every moment at Giovanni is designed to enrich your stay."
        breadcrumbs={[{ label: "Experiences", href: "/experiences" }]}
      />

      <section className="py-10 bg-ivory-50 border-b border-earth-100">
        <div className="container-luxury max-w-3xl text-center">
          <p className="text-earth-700 leading-relaxed">
            Giovanni Village Resort offers Elysium Spa wellness treatments, jungle safaris at Ratapani Wildlife Sanctuary, a soft-touch swimming pool, forest trail cycling, lakeside fishing, farm tours at Royalton, open-air theatre, and a Junior Chef Academy & Kids Zone. Most experiences are complimentary for in-house guests; spa, safari, and select activities are available at additional cost.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="space-y-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                id={exp.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <ImagePlaceholder
                      src={exp.heroImage.src}
                      alt={exp.name}
                      aspect="video"
                      label={exp.name}
                      className="rounded-2xl"
                    />
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="inline-block bg-forest-50 text-forest-700 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                      {exp.category}
                    </span>
                    <h2 className="font-heading text-2xl md:text-3xl font-medium text-earth-900">
                      {exp.name}
                    </h2>
                    <p className="mt-4 text-earth-600 leading-relaxed">{exp.description}</p>

                    <div className="mt-5 flex flex-wrap gap-3 text-sm text-earth-600">
                      <span className="bg-ivory-100 px-3 py-1.5 rounded-full">{exp.duration}</span>
                      <span className="bg-ivory-100 px-3 py-1.5 rounded-full">{exp.availability}</span>
                      {exp.price && (
                        <span className="bg-gold-50 text-gold-700 px-3 py-1.5 rounded-full font-medium">
                          {exp.priceNote || "From"} ₹{exp.price.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>

                    <div className="mt-6">
                      <h4 className="font-heading text-sm font-semibold text-earth-800 mb-2">Highlights</h4>
                      <ul className="space-y-1.5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-earth-600">
                            <Check className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
