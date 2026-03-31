"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, Briefcase, PartyPopper } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const eventCategories = [
  {
    title: "Weddings",
    subtitle: "Grand celebrations in a breathtaking setting",
    description:
      "Host your dream wedding surrounded by the beauty of nature. From intimate ceremonies to grand receptions, Giovanni offers stunning venues, exquisite catering, and a dedicated team to craft your perfect day.",
    icon: Heart,
    href: "/weddings-events/weddings",
    image: "Wedding at Giovanni Village Resort",
    src: "/images/venues/grand-lawn-hero.jpg",
  },
  {
    title: "Social Celebrations",
    subtitle: "Milestones worth celebrating beautifully",
    description:
      "Birthdays, anniversaries, engagements, reunions — every milestone deserves a setting as special as the occasion. Let our venues and expert team bring your vision to life.",
    icon: PartyPopper,
    href: "/weddings-events/social-celebrations",
    image: "Celebration at Giovanni Village Resort",
    src: "/images/venues/forest-terrace-hero.jpg",
  },
  {
    title: "Corporate Events",
    subtitle: "Inspiring settings for productive gatherings",
    description:
      "Offsites, conferences, team-building retreats, and executive meetings in a resort that combines professional facilities with the rejuvenation of nature.",
    icon: Briefcase,
    href: "/weddings-events/corporate-events",
    image: "Corporate event at Giovanni Village Resort",
    src: "/images/venues/banquet-hero.jpg",
  },
];

export function EventsSection() {
  return (
    <section className="section-padding bg-earth-900 relative overflow-hidden" aria-labelledby="events-heading">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,168,83,0.3),transparent_50%)]" />
      </div>

      <div className="container-luxury relative z-10">
        <SectionHeading
          label="Weddings & Events"
          title="Where Celebrations Come Alive"
          subtitle="Giovanni Village Resort is one of the most sought-after celebration destinations near Bhopal. From fairy-tale weddings to milestone celebrations and productive corporate retreats."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {eventCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link href={category.href} className="group block h-full">
                <div className="h-full bg-earth-800/50 backdrop-blur-sm border border-earth-700/50 rounded-xl overflow-hidden hover:border-gold-600/30 transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder
                      alt={category.image}
                      aspect="video"
                      label={category.title}
                      src={category.src}
                      className="rounded-none group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-full bg-gold-500/20 backdrop-blur-sm flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-gold-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-white font-medium group-hover:text-gold-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gold-400/80 text-sm font-accent mt-1">{category.subtitle}</p>
                    <p className="text-earth-400 text-sm mt-3 leading-relaxed">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm text-gold-400 group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/weddings-events/venues">
            <Button variant="outline-light" size="lg">
              Explore Our Venues
            </Button>
          </Link>
          <Link href="/party-planner">
            <Button variant="primary" size="lg">
              Plan Your Event <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
