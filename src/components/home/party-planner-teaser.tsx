"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Utensils, Calculator } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: CalendarDays, label: "Choose Event Type", description: "Birthday, wedding, corporate, or custom" },
  { icon: MapPin, label: "Select Venue", description: "Pick from our curated venues" },
  { icon: Utensils, label: "Customise Menu", description: "Veg, non-veg, premium to luxury" },
  { icon: Calculator, label: "Get Estimate", description: "Tentative budget in seconds" },
];

export function PartyPlannerTeaser() {
  return (
    <section className="section-padding bg-gold-50" aria-labelledby="planner-heading">
      <div className="container-luxury">
        <SectionHeading
          label="Party Planner"
          title="Plan Your Celebration"
          subtitle="Use our simple planning tool to choose your venue, menu, and enhancements — and receive a tentative budget estimate in minutes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-6 text-center border border-gold-100 shadow-[0_4px_20px_rgba(26,24,20,0.04)] h-full">
                <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-gold-600" />
                </div>
                <div className="text-xs font-medium text-gold-600 tracking-wider uppercase mb-2">
                  Step {i + 1}
                </div>
                <h3 className="font-heading text-base font-semibold text-earth-900">
                  {step.label}
                </h3>
                <p className="text-sm text-earth-500 mt-2">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-gold-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/party-planner">
            <Button variant="primary" size="xl">
              Start Planning <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
