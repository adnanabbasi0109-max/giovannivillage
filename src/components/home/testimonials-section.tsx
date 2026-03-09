"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const featured = testimonials.filter((t) => t.isHighlighted).slice(0, 4);

  return (
    <section className="section-padding bg-ivory-100" aria-labelledby="testimonials-heading">
      <div className="container-luxury">
        <SectionHeading
          label="Guest Stories"
          title="Trusted by Those Who've Stayed"
          subtitle="Real experiences from our guests — moments of celebration, relaxation, and joy at Giovanni Village Resort."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {featured.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 md:p-8 border border-earth-100 shadow-[0_4px_20px_rgba(26,24,20,0.04)]"
            >
              <Quote className="w-8 h-8 text-gold-300 mb-4" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-earth-700 leading-relaxed text-sm md:text-base italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-earth-100">
                <p className="font-heading text-sm font-semibold text-earth-900">
                  {testimonial.guestName}
                </p>
                <p className="text-xs text-earth-500 mt-0.5">
                  {testimonial.stayType}
                  {testimonial.guestLocation && ` · ${testimonial.guestLocation}`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
