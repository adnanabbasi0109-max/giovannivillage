"use client";

import { motion } from "framer-motion";
import { TreePine, Heart, Star, Users, Leaf, Award } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const values = [
  { icon: TreePine, title: "Nature First", description: "We build around the forest, never through it. Every structure, pathway, and experience respects the natural landscape." },
  { icon: Heart, title: "Warm Hospitality", description: "We believe luxury is not about opulence, but about genuine care, attention to detail, and making every guest feel at home." },
  { icon: Star, title: "Refined Experience", description: "From the linens to the cuisine to the sunset view, every element is curated to offer a premium, thoughtful experience." },
  { icon: Users, title: "Celebration Makers", description: "We take pride in being part of life's most important moments — weddings, milestones, reunions, and corporate achievements." },
  { icon: Leaf, title: "Sustainability", description: "We are committed to responsible practices — from water conservation to locally sourced ingredients to waste reduction." },
  { icon: Award, title: "Excellence", description: "We hold ourselves to the highest standards in service, cleanliness, safety, and guest satisfaction." },
];

export function AboutClient() {
  return (
    <>
      <PageHero
        label="About"
        title="The Giovanni Story"
        subtitle="Where a vision of harmonising luxury with nature became a destination of choice for discerning travellers and celebration seekers."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImagePlaceholder alt="Giovanni Village Resort" aspect="video" label="The Resort" className="rounded-2xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-accent text-sm tracking-[0.15em] uppercase text-gold-600 mb-3">Our Story</p>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-earth-900 leading-tight">
                Born from a Love of Nature and the Art of Hospitality
              </h2>
              <div className="mt-6 space-y-4 text-earth-600 leading-relaxed">
                <p>
                  Giovanni Village Resort began with a simple yet ambitious vision: to create a place where the beauty of the Indian forest meets the warmth of refined hospitality. Nestled near Kerwa Dam on the peaceful outskirts of Bhopal, the resort was envisioned as a retreat that offers something rare — luxury without pretension, celebration without chaos, and rest without compromise.
                </p>
                <p>
                  Today, Giovanni stands as one of the most sought-after destinations in Madhya Pradesh for luxury stays, grand weddings, intimate celebrations, and corporate retreats. The resort is surrounded by lush greenery, mature trees, and the gentle rhythms of nature — creating an environment that rejuvenates the spirit while offering every modern comfort.
                </p>
                <p>
                  What sets Giovanni apart is not just the property, but the people who run it. Every member of our team is committed to making each guest&apos;s experience seamless, memorable, and genuinely warm. From the front desk to the kitchen to the housekeeping team, we believe that great hospitality is about care, consistency, and heart.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-ivory-50">
        <div className="container-luxury">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            subtitle="The principles that guide every decision, design, and interaction at Giovanni Village Resort."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-earth-100 shadow-[0_4px_20px_rgba(26,24,20,0.04)]"
              >
                <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-earth-900">{value.title}</h3>
                <p className="text-sm text-earth-600 mt-2 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding">
        <div className="container-luxury max-w-3xl text-center">
          <SectionHeading
            label="Location"
            title="Set Amidst Nature, Close to the City"
          />
          <p className="text-earth-600 leading-relaxed">
            Located on Kerwa Dam Road, approximately 15 km from Bhopal city centre and 25 km from Raja Bhoj Airport, Giovanni Village Resort offers the best of both worlds — the tranquillity of a forest setting and the convenience of city proximity. The resort is surrounded by the natural beauty of the Kerwa region, with the dam, forest trails, and Van Vihar National Park all within easy reach.
          </p>
          <div className="mt-10">
            <ImagePlaceholder alt="Giovanni Location" aspect="wide" label="Location Map" className="rounded-2xl" />
          </div>
        </div>
      </section>
    </>
  );
}
