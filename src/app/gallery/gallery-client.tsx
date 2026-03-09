"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/shared/page-hero";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const categories = [
  { id: "all", label: "All" },
  { id: "resort", label: "Resort" },
  { id: "rooms", label: "Rooms" },
  { id: "dining", label: "Dining" },
  { id: "weddings", label: "Weddings" },
  { id: "events", label: "Events" },
  { id: "nature", label: "Nature" },
  { id: "experiences", label: "Experiences" },
];

const galleryImages = [
  { id: "1", label: "Resort Entrance", category: "resort" },
  { id: "2", label: "Garden Pathway", category: "resort" },
  { id: "3", label: "Aerial View", category: "resort" },
  { id: "4", label: "Superior Room", category: "rooms" },
  { id: "5", label: "Deluxe Room", category: "rooms" },
  { id: "6", label: "Premium Suite", category: "rooms" },
  { id: "7", label: "Family Cottage", category: "rooms" },
  { id: "8", label: "Suite Bathroom", category: "rooms" },
  { id: "9", label: "Terra Restaurant", category: "dining" },
  { id: "10", label: "Forest Grill", category: "dining" },
  { id: "11", label: "Verandah Lounge", category: "dining" },
  { id: "12", label: "Fine Dining Setup", category: "dining" },
  { id: "13", label: "Grand Lawn Wedding", category: "weddings" },
  { id: "14", label: "Mandap Setup", category: "weddings" },
  { id: "15", label: "Wedding Reception", category: "weddings" },
  { id: "16", label: "Bridal Prep", category: "weddings" },
  { id: "17", label: "Corporate Conference", category: "events" },
  { id: "18", label: "Birthday Celebration", category: "events" },
  { id: "19", label: "Poolside Party", category: "events" },
  { id: "20", label: "Forest Trail", category: "nature" },
  { id: "21", label: "Morning Sunrise", category: "nature" },
  { id: "22", label: "Bird Watching", category: "nature" },
  { id: "23", label: "Swimming Pool", category: "experiences" },
  { id: "24", label: "Spa Treatment", category: "experiences" },
  { id: "25", label: "Bonfire Evening", category: "experiences" },
  { id: "26", label: "Cycling", category: "experiences" },
];

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <PageHero
        label="Gallery"
        title="Glimpses of Giovanni"
        subtitle="A visual journey through the resort, its venues, and the experiences that await you."
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />

      <section className="section-padding">
        <div className="container-luxury">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gold-500 text-white shadow-sm"
                    : "bg-ivory-100 text-earth-600 hover:bg-earth-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer overflow-hidden rounded-xl"
                >
                  <ImagePlaceholder
                    alt={img.label}
                    label={img.label}
                    aspect="square"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
