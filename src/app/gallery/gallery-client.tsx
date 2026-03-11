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
  { id: "1", label: "Resort Entrance", category: "resort", src: "/images/gallery/resort-1.jpg" },
  { id: "2", label: "Garden Pathway", category: "resort", src: "/images/gallery/resort-2.jpg" },
  { id: "3", label: "Aerial View", category: "resort", src: "/images/gallery/resort-3.jpg" },
  { id: "4", label: "King Room - Pool & Garden View", category: "rooms", src: "/images/rooms/superior-hero.jpg" },
  { id: "5", label: "King Room with Private Garden", category: "rooms", src: "/images/rooms/deluxe-hero.jpg" },
  { id: "6", label: "Junior Suite", category: "rooms", src: "/images/rooms/suite-hero.jpg" },
  { id: "7", label: "Sunrise Cottage", category: "rooms", src: "/images/rooms/cottage-hero.jpg" },
  { id: "8", label: "Suite Bathroom", category: "rooms", src: "/images/rooms/suite-3.jpg" },
  { id: "9", label: "Gourmet By The Woods", category: "dining", src: "/images/dining/terra-hero.jpg" },
  { id: "10", label: "Pihu Rooftop", category: "dining", src: "/images/dining/forest-grill-hero.jpg" },
  { id: "11", label: "Berry & Beans Cafe", category: "dining", src: "/images/dining/verandah-hero.jpg" },
  { id: "12", label: "Fine Dining Setup", category: "dining", src: "/images/gallery/resort-4.jpg" },
  { id: "13", label: "The Aria Wedding", category: "weddings", src: "/images/venues/grand-lawn-hero.jpg" },
  { id: "14", label: "Mandap Setup", category: "weddings", src: "/images/venues/grand-lawn-3.jpg" },
  { id: "15", label: "Wedding Reception", category: "weddings", src: "/images/venues/banquet-hero.jpg" },
  { id: "16", label: "Bridal Prep", category: "weddings", src: "/images/gallery/resort-5.jpg" },
  { id: "17", label: "Corporate Conference", category: "events", src: "/images/venues/banquet-2.jpg" },
  { id: "18", label: "Birthday Celebration", category: "events", src: "/images/venues/forest-terrace-hero.jpg" },
  { id: "19", label: "Poolside Party", category: "events", src: "/images/venues/poolside-hero.jpg" },
  { id: "20", label: "Forest Trail", category: "nature", src: "/images/gallery/resort-6.jpg" },
  { id: "21", label: "Morning Sunrise", category: "nature", src: "/images/gallery/resort-7.jpg" },
  { id: "22", label: "Bird Watching", category: "nature", src: "/images/gallery/resort-8.jpg" },
  { id: "23", label: "Swimming Pool", category: "experiences", src: "/images/experiences/pool-hero.jpg" },
  { id: "24", label: "Spa Treatment", category: "experiences", src: "/images/experiences/spa-hero.jpg" },
  { id: "25", label: "Bonfire Evening", category: "experiences", src: "/images/experiences/bonfire-hero.jpg" },
  { id: "26", label: "Cycling", category: "experiences", src: "/images/experiences/cycling-hero.jpg" },
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
                    src={img.src}
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
