"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/faq";

export function FAQPreview() {
  const [openId, setOpenId] = useState<string | null>(null);
  const featured = faqs.filter((f) => ["g1", "b1", "b2", "e1", "e2", "d1"].includes(f.id));

  return (
    <section className="section-padding" aria-labelledby="faq-heading">
      <div className="container-luxury max-w-3xl">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick answers to common queries about stays, events, and the Giovanni experience."
        />

        <div className="space-y-3">
          {featured.map((faq) => (
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

        <div className="mt-8 text-center">
          <Link href="/faq">
            <Button variant="ghost" size="md">
              View All FAQs <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
