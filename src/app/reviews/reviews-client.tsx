"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { testimonials } from "@/data/testimonials";

export function ReviewsClient() {
  return (
    <>
      <PageHero
        label="Guest Stories"
        title="Trusted by Those Who've Stayed"
        subtitle="Real experiences from our guests — moments of celebration, relaxation, and joy at Giovanni Village Resort."
        breadcrumbs={[{ label: "Reviews", href: "/reviews" }]}
      />

      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 md:p-8 border border-earth-100 shadow-[0_4px_20px_rgba(26,24,20,0.04)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-8 h-8 text-gold-300" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>
                <p className="text-earth-700 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-earth-100 flex items-center justify-between">
                  <div>
                    <p className="font-heading text-sm font-semibold text-earth-900">{t.guestName}</p>
                    <p className="text-xs text-earth-500 mt-0.5">
                      {t.stayType}{t.guestLocation && ` · ${t.guestLocation}`}
                    </p>
                  </div>
                  {t.source && (
                    <span className="text-xs text-earth-400 capitalize bg-ivory-100 px-2 py-1 rounded">
                      via {t.source}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
