"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Maximize, Eye, Bed, Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { RoomCategory } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { rooms } from "@/data/rooms";

interface Props {
  room: RoomCategory;
}

export function RoomDetailClient({ room }: Props) {
  const otherRooms = rooms.filter((r) => r.id !== room.id);

  return (
    <>
      <PageHero
        label="Stay"
        title={room.name}
        subtitle={room.tagline}
        breadcrumbs={[
          { label: "Stay", href: "/stay" },
          { label: room.name, href: `/stay/rooms/${room.slug}` },
        ]}
      />

      {/* Room Detail */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Gallery */}
              <div className="grid grid-cols-2 gap-3 mb-10">
                <ImagePlaceholder
                  alt={`${room.name} - Main`}
                  aspect="video"
                  label={room.name}
                  className="col-span-2 rounded-xl"
                />
                {room.images.slice(1, 3).map((img, i) => (
                  <ImagePlaceholder
                    key={i}
                    alt={img.alt}
                    aspect="video"
                    label={img.alt}
                    className="rounded-xl"
                  />
                ))}
              </div>

              {/* Description */}
              <div>
                <h2 className="font-heading text-2xl font-medium text-earth-900 mb-4">
                  About This Room
                </h2>
                <p className="text-earth-600 leading-relaxed">{room.description}</p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-6 bg-ivory-50 rounded-xl">
                <div className="text-center">
                  <Maximize className="w-5 h-5 text-gold-600 mx-auto mb-2" />
                  <p className="text-xs text-earth-500 mb-1">Size</p>
                  <p className="font-heading text-sm font-semibold text-earth-800">{room.sizeSqFt} sq ft</p>
                </div>
                <div className="text-center">
                  <Users className="w-5 h-5 text-gold-600 mx-auto mb-2" />
                  <p className="text-xs text-earth-500 mb-1">Occupancy</p>
                  <p className="font-heading text-sm font-semibold text-earth-800">Up to {room.maxOccupancy}</p>
                </div>
                <div className="text-center">
                  <Bed className="w-5 h-5 text-gold-600 mx-auto mb-2" />
                  <p className="text-xs text-earth-500 mb-1">Bed Type</p>
                  <p className="font-heading text-sm font-semibold text-earth-800">{room.bedType}</p>
                </div>
                <div className="text-center">
                  <Eye className="w-5 h-5 text-gold-600 mx-auto mb-2" />
                  <p className="text-xs text-earth-500 mb-1">View</p>
                  <p className="font-heading text-sm font-semibold text-earth-800">{room.viewType}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mt-10">
                <h3 className="font-heading text-xl font-medium text-earth-900 mb-4">Features & Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-earth-600">
                      <Check className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities */}
              <div className="mt-10">
                <h3 className="font-heading text-xl font-medium text-earth-900 mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {room.amenities.map((a) => (
                    <div key={a.id} className="flex items-center gap-2 bg-ivory-50 rounded-lg px-3 py-2.5">
                      <span className="w-2 h-2 rounded-full bg-gold-400" />
                      <span className="text-sm text-earth-700">{a.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="mt-10">
                <h3 className="font-heading text-xl font-medium text-earth-900 mb-4">Inclusions</h3>
                <ul className="space-y-2">
                  {room.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-sm text-earth-600">
                      <Check className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policies */}
              <div className="mt-10">
                <h3 className="font-heading text-xl font-medium text-earth-900 mb-4">Policies</h3>
                <div className="space-y-3">
                  {room.policies.map((p) => (
                    <div key={p.title} className="bg-ivory-50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-earth-800">{p.title}</h4>
                      <p className="text-sm text-earth-600 mt-1">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-white rounded-xl border border-earth-100 shadow-[0_4px_20px_rgba(26,24,20,0.06)] p-6">
                  <div className="mb-4">
                    <p className="text-xs text-earth-500 mb-1">From</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-3xl font-semibold text-earth-900">
                        {formatCurrency(room.baseRate)}
                      </span>
                      <span className="text-sm text-earth-500">/night</span>
                    </div>
                    {room.rackRate > room.baseRate && (
                      <p className="text-xs text-earth-400 line-through mt-1">
                        {formatCurrency(room.rackRate)} /night
                      </p>
                    )}
                  </div>

                  <div className="divider-gold mb-4" />

                  <ul className="space-y-2 mb-6">
                    {room.inclusions.slice(0, 4).map((inc) => (
                      <li key={inc} className="flex items-start gap-2 text-xs text-earth-600">
                        <Check className="w-3.5 h-3.5 text-forest-500 mt-0.5 shrink-0" />
                        {inc}
                      </li>
                    ))}
                  </ul>

                  <Link href="/book" className="block">
                    <Button variant="primary" size="lg" className="w-full">
                      Book This Room <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>

                  <p className="text-xs text-earth-400 text-center mt-3">
                    Free cancellation · Best rate guaranteed
                  </p>
                </div>

                {/* Other Rooms */}
                <div className="mt-6">
                  <h4 className="font-heading text-sm font-semibold text-earth-800 mb-3">
                    Other Rooms
                  </h4>
                  <div className="space-y-3">
                    {otherRooms.map((r) => (
                      <Link key={r.id} href={`/stay/rooms/${r.slug}`} className="block group">
                        <div className="flex gap-3 p-3 rounded-lg hover:bg-ivory-50 transition-colors">
                          <ImagePlaceholder
                            alt={r.name}
                            aspect="square"
                            label=""
                            className="w-16 h-16 rounded-lg shrink-0"
                          />
                          <div>
                            <p className="text-sm font-heading font-medium text-earth-800 group-hover:text-gold-700 transition-colors">
                              {r.name}
                            </p>
                            <p className="text-xs text-earth-500 mt-0.5">
                              From {formatCurrency(r.baseRate)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
