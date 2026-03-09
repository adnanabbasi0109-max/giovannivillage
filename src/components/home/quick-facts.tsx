"use client";

import { motion } from "framer-motion";
import { TreePine, Star, PartyPopper, Utensils, MapPin, Sparkles } from "lucide-react";

const facts = [
  { icon: TreePine, label: "Nature-Immersed", detail: "Surrounded by lush forest" },
  { icon: Star, label: "Premium Stays", detail: "Rooms, suites & cottages" },
  { icon: PartyPopper, label: "Grand Celebrations", detail: "Weddings & events up to 1,000 guests" },
  { icon: Utensils, label: "Culinary Excellence", detail: "3 dining experiences" },
  { icon: MapPin, label: "Near Bhopal", detail: "30 min from city centre" },
  { icon: Sparkles, label: "Spa & Wellness", detail: "Rejuvenation in nature" },
];

export function QuickFactsSection() {
  return (
    <section className="py-6 md:py-10 bg-ivory-50" aria-label="Resort highlights">
      <div className="container-luxury">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center mb-3">
                <fact.icon className="w-5 h-5 text-gold-600" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-earth-800">
                {fact.label}
              </h3>
              <p className="text-xs text-earth-500 mt-1">{fact.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
