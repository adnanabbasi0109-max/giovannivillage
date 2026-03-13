"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Maximize, Eye, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { rooms } from "@/data/rooms";
import { formatCurrency } from "@/lib/utils";
import { globalSettings } from "@/data/global";

export function StayPageClient() {
  return (
    <>
      <PageHero
        label="Stay"
        title="Your Private Retreat Awaits"
        subtitle="Each room at Giovanni Village Resort is a sanctuary designed for comfort, wrapped in nature, and enriched with thoughtful luxury."
        breadcrumbs={[{ label: "Stay", href: "/stay" }]}
      />

      {/* Summary Block for AEO */}
      <section className="py-10 bg-ivory-50 border-b border-earth-100">
        <div className="container-luxury max-w-3xl text-center">
          <p className="text-earth-700 leading-relaxed">
            Giovanni Village Resort offers a range of accommodation options including King Rooms with pool and garden views, Junior Suites with private decks, unique suites with open-to-sky bathtubs and plunge pools, a Sunrise Cottage with forest views, and luxurious Royal and Presidential Suites with private lawns. All rooms include complimentary breakfast, Wi-Fi, and pool access. Check-in is at {globalSettings.checkInTime}, check-out at {globalSettings.checkOutTime}.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            label="Accommodation"
            title="Rooms & Suites"
            subtitle="From intimate rooms to spacious family cottages, find the perfect space for your stay."
          />

          <div className="space-y-16">
            {rooms.map((room, i) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <ImagePlaceholder
                      src={room.heroImage.src}
                      alt={room.name}
                      aspect="video"
                      label={room.name}
                      className="rounded-2xl"
                    />
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="font-accent text-sm tracking-[0.15em] uppercase text-gold-600 mb-2">
                      {room.tagline}
                    </p>
                    <h3 className="font-heading text-2xl md:text-3xl font-medium text-earth-900">
                      {room.name}
                    </h3>
                    <p className="mt-3 text-earth-600 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-5">
                      <span className="flex items-center gap-1.5 text-sm text-earth-600 bg-ivory-100 px-3 py-1.5 rounded-full">
                        <Maximize className="w-4 h-4 text-gold-600" /> {room.sizeSqFt} sq ft
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-earth-600 bg-ivory-100 px-3 py-1.5 rounded-full">
                        <Users className="w-4 h-4 text-gold-600" /> Up to {room.maxOccupancy} guests
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-earth-600 bg-ivory-100 px-3 py-1.5 rounded-full">
                        <Eye className="w-4 h-4 text-gold-600" /> {room.viewType}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-1.5">
                      {room.features.slice(0, 5).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-earth-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center gap-4">
                      <div>
                        <p className="text-xs text-earth-500">From</p>
                        <p className="font-heading text-2xl font-semibold text-earth-900">
                          {formatCurrency(room.baseRate)}
                          <span className="text-sm font-normal text-earth-500"> /night</span>
                        </p>
                      </div>
                      <Link href={`/stay/rooms/${room.slug}`}>
                        <Button variant="primary" size="md">
                          View Details <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Link href="/book">
                        <Button variant="outline" size="md">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
