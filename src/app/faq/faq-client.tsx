"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { faqs } from "@/data/faq";

const categories = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "booking", label: "Booking" },
  { id: "rooms", label: "Rooms" },
  { id: "events", label: "Events" },
  { id: "dining", label: "Dining" },
  { id: "experiences", label: "Experiences" },
  { id: "policies", label: "Policies" },
  { id: "location", label: "Location" },
];

export function FAQClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = activeCategory === "all" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <PageHero
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions about stays, events, dining, and the Giovanni experience."
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
      />

      <section className="section-padding">
        <div className="container-luxury max-w-3xl">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenId(null); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gold-500 text-white"
                    : "bg-ivory-100 text-earth-600 hover:bg-earth-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {filtered.map((faq) => (
              <div key={faq.id} className="border border-earth-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-ivory-50 transition-colors"
                  aria-expanded={openId === faq.id}
                >
                  <span className="font-heading text-sm md:text-base font-medium text-earth-800 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-earth-400 shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-sm text-earth-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
