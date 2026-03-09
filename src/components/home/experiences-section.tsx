"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { experiences } from "@/data/experiences";

export function ExperiencesSection() {
  const featured = experiences.slice(0, 6);

  return (
    <section className="section-padding bg-forest-50" aria-labelledby="experiences-heading">
      <div className="container-luxury">
        <SectionHeading
          label="Experiences"
          title="Moments to Cherish"
          subtitle="From rejuvenating spa treatments to guided nature trails and family adventures, every moment at Giovanni is designed to enrich your stay."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/experiences#${exp.slug}`} className="group block">
                <div className="bg-white rounded-xl overflow-hidden border border-forest-100 shadow-[0_4px_20px_rgba(26,24,20,0.04)] hover:shadow-[0_8px_40px_rgba(26,24,20,0.06)] transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder
                      alt={exp.name}
                      aspect="video"
                      label={exp.name}
                      src={exp.heroImage.src}
                      className="rounded-none group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-forest-700 capitalize">
                        {exp.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-earth-900 group-hover:text-forest-700 transition-colors">
                      {exp.name}
                    </h3>
                    <p className="text-sm text-earth-500 mt-1">{exp.duration}</p>
                    <p className="text-sm text-earth-600 mt-2 leading-relaxed line-clamp-2">
                      {exp.shortDescription}
                    </p>
                    {exp.price && (
                      <p className="mt-3 text-sm font-medium text-forest-700">
                        {exp.priceNote || "From"} ₹{exp.price.toLocaleString("en-IN")}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/experiences">
            <Button variant="outline" size="lg">
              All Experiences <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
