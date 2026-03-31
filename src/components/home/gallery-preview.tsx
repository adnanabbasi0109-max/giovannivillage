"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const galleryItems = [
  { label: "Resort Grounds", span: "col-span-2 row-span-2", src: "/images/gallery/resort-1.jpg" },
  { label: "Luxury Suite", span: "col-span-1 row-span-1", src: "/images/rooms/suite-hero.jpg" },
  { label: "Forest Dining", span: "col-span-1 row-span-1", src: "/images/dining/forest-grill-hero.jpg" },
  { label: "Wedding Setup", span: "col-span-1 row-span-1", src: "/images/venues/grand-lawn-1.jpg" },
  { label: "Pool & Gardens", span: "col-span-1 row-span-1", src: "/images/experiences/pool-hero.jpg" },
  { label: "Spa Experience", span: "col-span-2 row-span-1", src: "/images/experiences/spa-hero.jpg" },
];

export function GalleryPreview() {
  return (
    <section className="section-padding" aria-labelledby="gallery-heading">
      <div className="container-luxury">
        <SectionHeading
          label="Gallery"
          title="Glimpses of Giovanni"
          subtitle="A visual journey through the resort, its venues, and the experiences that await you."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${item.span} overflow-hidden rounded-xl group cursor-pointer`}
            >
              <ImagePlaceholder
                alt={item.label}
                label={item.label}
                aspect="square"
                src={item.src}
                className="rounded-xl w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "200px" }}
          className="mt-10 text-center"
        >
          <Link href="/gallery">
            <Button variant="outline" size="lg">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
