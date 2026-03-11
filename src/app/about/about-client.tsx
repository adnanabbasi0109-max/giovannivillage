"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

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
              <ImagePlaceholder src="/images/gallery/resort-2.jpg" alt="Giovanni Village Resort" aspect="video" label="The Resort" className="rounded-2xl" />
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
                  Giovanni Village Resort began with a simple yet ambitious vision: to create a place where the beauty of the Indian forest meets the warmth of refined hospitality. Located at Village Kalapani on Kolar Road, Bhopal, the resort was envisioned as a retreat that offers something rare — luxury without pretension, celebration without chaos, and rest without compromise.
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

      {/* Location */}
      <section className="section-padding">
        <div className="container-luxury max-w-3xl text-center">
          <SectionHeading
            label="Location"
            title="Set Amidst Nature, Close to the City"
          />
          <p className="text-earth-600 leading-relaxed">
            Located at 410, Village Kalapani, Kolar Road, Bhopal, Giovanni Village Resort offers the best of both worlds — the tranquillity of a forest setting and the convenience of city proximity. The resort is nestled near the Ratapani Wildlife Sanctuary, with jungle safaris, forest trails, and nature experiences all within easy reach.
          </p>
          <div className="mt-10">
            <ImagePlaceholder src="/images/gallery/resort-5.jpg" alt="Giovanni Location" aspect="wide" label="Location Map" className="rounded-2xl" />
          </div>
        </div>
      </section>
    </>
  );
}
