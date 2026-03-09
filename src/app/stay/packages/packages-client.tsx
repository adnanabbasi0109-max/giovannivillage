"use client";

import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Weekend Escape",
    tagline: "The Perfect Staycation",
    description: "Unwind with a two-night stay, daily breakfast, one spa treatment, and a poolside sundowner — all in the heart of nature.",
    price: 11999,
    originalPrice: 15998,
    inclusions: ["2-night stay in Superior Room", "Daily breakfast", "One 60-min spa treatment", "Poolside sundowner evening", "Late check-out (subject to availability)"],
    validFor: "Valid for stays through March 2026",
    minNights: 2,
  },
  {
    name: "Romance Retreat",
    tagline: "Celebrate Love",
    description: "A curated romantic getaway with candlelight dinner, room décor, spa for two, and champagne welcome — perfect for anniversaries and honeymoons.",
    price: 24999,
    originalPrice: 32000,
    inclusions: ["2-night stay in Deluxe Room", "Romantic room decoration", "Candlelight dinner for two", "Couple's spa treatment", "Champagne welcome", "Late check-out"],
    validFor: "Valid year-round",
    minNights: 2,
  },
  {
    name: "Family Fun",
    tagline: "Memories Together",
    description: "A family package with our spacious cottage, kids' activities, bonfire evening, and meals that bring everyone together.",
    price: 19999,
    originalPrice: 26000,
    inclusions: ["2-night stay in Family Cottage", "Breakfast for the family", "Kids' activity session", "One bonfire evening", "Pool and cycling access", "Board games kit"],
    validFor: "Valid for stays through March 2026",
    minNights: 2,
  },
];

export function PackagesClient() {
  return (
    <>
      <PageHero
        label="Offers"
        title="Packages & Special Offers"
        subtitle="Curated experiences designed to make your stay at Giovanni even more memorable."
        breadcrumbs={[
          { label: "Stay", href: "/stay" },
          { label: "Packages", href: "/stay/packages" },
        ]}
      />

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-xl border border-earth-100 shadow-[0_4px_20px_rgba(26,24,20,0.06)] overflow-hidden flex flex-col">
                <ImagePlaceholder alt={pkg.name} aspect="video" label={pkg.name} className="rounded-none" />
                <div className="p-6 flex-1 flex flex-col">
                  <p className="font-accent text-xs tracking-[0.15em] uppercase text-gold-600">{pkg.tagline}</p>
                  <h3 className="font-heading text-xl font-semibold text-earth-900 mt-1">{pkg.name}</h3>
                  <p className="text-sm text-earth-600 mt-3 leading-relaxed">{pkg.description}</p>
                  <ul className="mt-4 space-y-2 flex-1">
                    {pkg.inclusions.map((inc) => (
                      <li key={inc} className="flex items-start gap-2 text-sm text-earth-600">
                        <Check className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-earth-100">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-heading text-2xl font-semibold text-earth-900">
                        ₹{pkg.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-sm text-earth-400 line-through">
                        ₹{pkg.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <p className="text-xs text-earth-500 mb-4">{pkg.validFor} · Min {pkg.minNights} nights</p>
                    <Link href="/book">
                      <Button variant="primary" size="md" className="w-full">
                        Book This Package <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
