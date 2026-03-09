"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, MapPin, IndianRupee } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { venues } from "@/data/venues";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN").format(price);
}

export function VenuesClient() {
  const activeVenues = venues.filter((v) => v.isActive);

  return (
    <>
      <PageHero
        label="Venues"
        title="Our Event Venues"
        subtitle="Four exceptional spaces — each with its own character, capacity, and charm — designed to host celebrations of every scale."
        breadcrumbs={[
          { label: "Weddings & Events", href: "/weddings-events" },
          { label: "Venues", href: "/weddings-events/venues" },
        ]}
      />

      {/* AEO Summary */}
      <section className="py-10 bg-ivory-50 border-b border-earth-100">
        <div className="container-luxury max-w-3xl text-center">
          <p className="text-earth-700 leading-relaxed">
            Giovanni Village Resort offers four event venues near Bhopal: The Grand Lawn (outdoor, 1,000 guests, from INR 1,50,000), The Forest Terrace (covered outdoor, 200 guests, from INR 75,000), The Banquet Hall (indoor/AC, 400 guests, from INR 1,20,000), and The Poolside Deck (outdoor, 150 guests, from INR 50,000).
          </p>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeading
            label="Compare"
            title="Venue at a Glance"
            subtitle="A quick comparison to help you find the right venue for your event."
          />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b-2 border-gold-200">
                  <th className="text-left py-4 px-4 font-heading text-earth-900 font-medium">
                    Venue
                  </th>
                  <th className="text-left py-4 px-4 font-heading text-earth-900 font-medium">
                    Type
                  </th>
                  <th className="text-center py-4 px-4 font-heading text-earth-900 font-medium">
                    Seated
                  </th>
                  <th className="text-center py-4 px-4 font-heading text-earth-900 font-medium">
                    Standing
                  </th>
                  <th className="text-right py-4 px-4 font-heading text-earth-900 font-medium">
                    Starting From
                  </th>
                  <th className="py-4 px-4" />
                </tr>
              </thead>
              <tbody>
                {activeVenues.map((venue) => (
                  <tr
                    key={venue.id}
                    className="border-b border-earth-100 hover:bg-ivory-50 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-earth-900">
                      {venue.name}
                    </td>
                    <td className="py-4 px-4 text-earth-600 capitalize">
                      {venue.venueType.replace("_", " ")}
                    </td>
                    <td className="py-4 px-4 text-center text-earth-600">
                      {venue.capacity.seated}
                    </td>
                    <td className="py-4 px-4 text-center text-earth-600">
                      {venue.capacity.standing}
                    </td>
                    <td className="py-4 px-4 text-right text-earth-900 font-medium">
                      INR {formatPrice(venue.basePrice)}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link href={`/weddings-events/venues/${venue.slug}`}>
                        <Button variant="ghost" size="sm">
                          View <ArrowRight className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Venue Cards */}
      <section className="section-padding bg-ivory-50">
        <div className="container-luxury">
          <SectionHeading
            label="Explore"
            title="Discover Each Venue"
            subtitle="Click through to explore detailed venue information, layouts, amenities, and pricing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {activeVenues.map((venue, i) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/weddings-events/venues/${venue.slug}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden border border-earth-100 hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <ImagePlaceholder
                        alt={venue.name}
                        aspect="video"
                        label={venue.name}
                        className="rounded-none"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-earth-800 text-xs font-medium px-3 py-1.5 rounded-full capitalize">
                        {venue.venueType.replace("_", " ")}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-accent text-xs tracking-[0.15em] uppercase text-gold-600 mb-1">
                        {venue.tagline}
                      </p>
                      <h3 className="font-heading text-2xl font-medium text-earth-900 group-hover:text-gold-700 transition-colors">
                        {venue.name}
                      </h3>
                      <p className="mt-2 text-sm text-earth-600 leading-relaxed line-clamp-2">
                        {venue.shortDescription}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-3 text-xs text-earth-500">
                        <span className="flex items-center gap-1 bg-ivory-100 px-2.5 py-1.5 rounded-full">
                          <Users className="w-3.5 h-3.5 text-gold-600" />
                          {venue.capacity.min}–{venue.capacity.max} guests
                        </span>
                        <span className="flex items-center gap-1 bg-ivory-100 px-2.5 py-1.5 rounded-full">
                          <MapPin className="w-3.5 h-3.5 text-gold-600" />
                          {venue.features[0]?.split(" ").slice(0, 3).join(" ")}
                        </span>
                        <span className="flex items-center gap-1 bg-ivory-100 px-2.5 py-1.5 rounded-full">
                          <IndianRupee className="w-3.5 h-3.5 text-gold-600" />
                          From {formatPrice(venue.basePrice)}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {venue.idealFor.slice(0, 4).map((ideal) => (
                          <span
                            key={ideal}
                            className="text-xs text-gold-700 bg-gold-50 px-2 py-0.5 rounded-full capitalize"
                          >
                            {ideal.replace("_", " ")}
                          </span>
                        ))}
                        {venue.idealFor.length > 4 && (
                          <span className="text-xs text-earth-400 px-2 py-0.5">
                            +{venue.idealFor.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="mt-5 flex items-center gap-1 text-sm text-gold-600 font-medium group-hover:gap-2 transition-all">
                        View Full Details <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-ivory-100 via-white to-gold-50">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-accent text-sm tracking-[0.2em] uppercase text-gold-600 mb-4">
              Ready to Book?
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-earth-900">
              Find the Perfect Venue for Your Event
            </h2>
            <p className="mt-4 text-earth-600 leading-relaxed">
              Not sure which venue is right for you? Our events team will recommend the ideal space based on your event type, guest count, and vision.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?type=event">
                <Button variant="primary" size="lg">
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/party-planner">
                <Button variant="outline" size="lg">
                  Try Our Party Planner
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
