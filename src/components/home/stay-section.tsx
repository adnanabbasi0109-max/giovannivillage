"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Maximize, Eye, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { rooms } from "@/data/rooms";
import { formatCurrency } from "@/lib/utils";

export function StaySection() {
  return (
    <section className="section-padding bg-ivory-50" aria-labelledby="stay-heading">
      <div className="container-luxury">
        <SectionHeading
          label="Stay"
          title="Your Private Retreat"
          subtitle="Each room and suite is a sanctuary of comfort, designed to harmonise with the surrounding forest while offering every modern luxury."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <Link href={`/stay/rooms/${room.slug}`}>
                <div className="bg-white rounded-xl overflow-hidden border border-earth-100 shadow-[0_4px_20px_rgba(26,24,20,0.06)] hover:shadow-[0_8px_40px_rgba(26,24,20,0.08)] transition-all duration-300">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder
                      alt={room.name}
                      aspect="portrait"
                      label={room.name}
                      className="rounded-none group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-earth-700">
                      From {formatCurrency(room.baseRate)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-earth-900 group-hover:text-gold-700 transition-colors">
                      {room.name}
                    </h3>
                    <p className="font-accent text-sm text-gold-600 mt-1">{room.tagline}</p>
                    <p className="text-sm text-earth-600 mt-3 leading-relaxed line-clamp-2">
                      {room.shortDescription}
                    </p>

                    {/* Quick Info */}
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-earth-100">
                      <span className="flex items-center gap-1 text-xs text-earth-500">
                        <Maximize className="w-3.5 h-3.5" />
                        {room.sizeSqFt} sq ft
                      </span>
                      <span className="flex items-center gap-1 text-xs text-earth-500">
                        <Users className="w-3.5 h-3.5" />
                        Up to {room.maxOccupancy}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-earth-500">
                        <Eye className="w-3.5 h-3.5" />
                        {room.viewType}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/stay/rooms">
            <Button variant="outline" size="lg">
              View All Rooms <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
