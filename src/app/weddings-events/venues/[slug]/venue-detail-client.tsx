"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Check,
  IndianRupee,
  ChevronDown,
  MapPin,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Venue } from "@/types";

interface VenueDetailClientProps {
  venue: Venue;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN").format(price);
}

export function VenueDetailClient({ venue }: VenueDetailClientProps) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <>
      <PageHero
        label={venue.tagline}
        title={venue.name}
        subtitle={venue.shortDescription}
        breadcrumbs={[
          { label: "Weddings & Events", href: "/weddings-events" },
          { label: "Venues", href: "/weddings-events/venues" },
          {
            label: venue.name,
            href: `/weddings-events/venues/${venue.slug}`,
          },
        ]}
      />

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <ImagePlaceholder
                src={venue.images[0]?.src}
                alt={venue.images[0]?.alt || venue.name}
                aspect="video"
                label={`${venue.name} — Main View`}
                className="rounded-2xl h-full"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <ImagePlaceholder
                src={venue.images[1]?.src}
                alt={venue.images[1]?.alt || `${venue.name} view 2`}
                aspect="video"
                label={`${venue.name} — View 2`}
                className="rounded-2xl"
              />
              <ImagePlaceholder
                src={venue.images[2]?.src}
                alt={venue.images[2]?.alt || `${venue.name} view 3`}
                aspect="video"
                label={`${venue.name} — View 3`}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Capacity */}
      <section className="section-padding bg-ivory-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <p className="font-accent text-sm tracking-[0.15em] uppercase text-gold-600 mb-3">
                About This Venue
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-earth-900">
                {venue.name}
              </h2>
              <p className="mt-4 text-earth-600 leading-relaxed text-lg">
                {venue.description}
              </p>

              {/* Ideal For */}
              <div className="mt-8">
                <h3 className="font-heading text-lg font-medium text-earth-900 mb-3">
                  Ideal For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {venue.idealFor.map((type) => (
                    <span
                      key={type}
                      className="text-sm text-gold-700 bg-gold-50 px-3 py-1.5 rounded-full capitalize"
                    >
                      {type.replace("_", " ")}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Capacity Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl p-6 border border-earth-100 shadow-sm sticky top-28">
                <h3 className="font-heading text-lg font-medium text-earth-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-gold-600" />
                  Capacity
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-earth-100">
                    <span className="text-sm text-earth-600">Seated</span>
                    <span className="text-sm font-medium text-earth-900">
                      {venue.capacity.seated} guests
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-earth-100">
                    <span className="text-sm text-earth-600">Standing</span>
                    <span className="text-sm font-medium text-earth-900">
                      {venue.capacity.standing} guests
                    </span>
                  </div>
                  {venue.capacity.theatre && (
                    <div className="flex justify-between py-2 border-b border-earth-100">
                      <span className="text-sm text-earth-600">Theatre</span>
                      <span className="text-sm font-medium text-earth-900">
                        {venue.capacity.theatre} guests
                      </span>
                    </div>
                  )}
                  {venue.capacity.classroom && (
                    <div className="flex justify-between py-2 border-b border-earth-100">
                      <span className="text-sm text-earth-600">Classroom</span>
                      <span className="text-sm font-medium text-earth-900">
                        {venue.capacity.classroom} guests
                      </span>
                    </div>
                  )}
                  {venue.capacity.ushape && (
                    <div className="flex justify-between py-2 border-b border-earth-100">
                      <span className="text-sm text-earth-600">U-Shape</span>
                      <span className="text-sm font-medium text-earth-900">
                        {venue.capacity.ushape} guests
                      </span>
                    </div>
                  )}
                  {venue.capacity.boardroom && (
                    <div className="flex justify-between py-2 border-b border-earth-100">
                      <span className="text-sm text-earth-600">Boardroom</span>
                      <span className="text-sm font-medium text-earth-900">
                        {venue.capacity.boardroom} guests
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-earth-200">
                  <div className="flex items-center gap-1 text-earth-600 text-sm mb-1">
                    <MapPin className="w-4 h-4 text-gold-600" />
                    <span className="capitalize">
                      {venue.venueType.replace("_", " ")} Venue
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-earth-900 font-medium">
                    <IndianRupee className="w-4 h-4 text-gold-600" />
                    Starting from INR {formatPrice(venue.basePrice)}
                  </div>
                </div>

                <Link
                  href="/contact?type=event"
                  className="block mt-6"
                >
                  <Button variant="primary" size="lg" className="w-full">
                    Enquire About This Venue
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Amenities */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-2xl font-medium text-earth-900 mb-6">
                Venue Features
              </h3>
              <ul className="space-y-3">
                {venue.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-earth-700"
                  >
                    <Check className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-heading text-2xl font-medium text-earth-900 mb-6">
                Amenities & Services
              </h3>
              <ul className="space-y-3">
                {venue.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="flex items-start gap-3 text-earth-700"
                  >
                    <Check className="w-5 h-5 text-forest-600 mt-0.5 shrink-0" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Layout Options */}
      {venue.layoutOptions.length > 0 && (
        <section className="section-padding bg-ivory-50">
          <div className="container-luxury">
            <SectionHeading
              label="Layouts"
              title="Layout Options"
              subtitle="Flexible configurations to match your event style and guest count."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {venue.layoutOptions.map((layout, i) => (
                <motion.div
                  key={layout.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-earth-100"
                >
                  <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center mb-4">
                    <LayoutGrid className="w-5 h-5 text-gold-600" />
                  </div>
                  <h4 className="font-heading text-lg font-medium text-earth-900">
                    {layout.name}
                  </h4>
                  <p className="mt-2 text-sm text-earth-600 leading-relaxed">
                    {layout.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-sm text-gold-700 font-medium">
                    <Users className="w-4 h-4" />
                    Up to {layout.capacity} guests
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {venue.faq.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-luxury max-w-3xl">
            <SectionHeading
              label="FAQ"
              title={`${venue.name} — Frequently Asked Questions`}
              subtitle="Common questions about this venue, answered."
            />

            <div className="space-y-3">
              {venue.faq.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="border border-earth-100 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === item.id ? null : item.id)
                    }
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-ivory-50 transition-colors"
                  >
                    <span className="font-medium text-earth-900 pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-earth-400 shrink-0 transition-transform duration-200 ${
                        openFaq === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-earth-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-earth-800">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-accent text-sm tracking-[0.2em] uppercase text-gold-300 mb-4">
              Book {venue.name}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-white">
              Host Your Event at {venue.name}
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Share your event details and our team will prepare a personalised proposal with pricing, layout recommendations, and catering options.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?type=event">
                <Button variant="primary" size="lg">
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/weddings-events/venues">
                <Button variant="outline-light" size="lg">
                  View Other Venues
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
