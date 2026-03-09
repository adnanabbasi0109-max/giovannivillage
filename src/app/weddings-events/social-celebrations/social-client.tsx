"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PartyPopper,
  Cake,
  Heart,
  Users,
  GlassWater,
  Gift,
} from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { venues } from "@/data/venues";

const celebrationTypes = [
  {
    icon: Cake,
    title: "Birthday Celebrations",
    description:
      "From a child's magical first birthday to a distinguished 50th, our venues and team create age-appropriate celebrations with customised décor, cakes, entertainment, and dining.",
    idealVenues: ["The Forest Terrace", "The Poolside Deck", "The Banquet Hall"],
  },
  {
    icon: Heart,
    title: "Anniversary Celebrations",
    description:
      "Mark the milestone years with an intimate dinner under the stars or a grand celebration with family and friends. Our team curates every element to honour your journey together.",
    idealVenues: ["The Forest Terrace", "The Banquet Hall"],
  },
  {
    icon: GlassWater,
    title: "Engagement Parties",
    description:
      "Toast to your future in style. From cocktail evenings on the poolside deck to elegant receptions in the banquet hall, create the perfect backdrop for your engagement announcement.",
    idealVenues: ["The Poolside Deck", "The Forest Terrace", "The Banquet Hall"],
  },
  {
    icon: Users,
    title: "Family Reunions",
    description:
      "Bring the family together in a setting that encourages connection. With accommodation, dining, and activity options, Giovanni is the ideal venue for multi-generational gatherings.",
    idealVenues: ["The Grand Lawn", "The Banquet Hall"],
  },
  {
    icon: PartyPopper,
    title: "Festive & Holiday Celebrations",
    description:
      "Celebrate Diwali, Holi, Christmas, or New Year with themed events, special menus, and festive décor. Let us turn the season into an unforgettable experience.",
    idealVenues: ["The Grand Lawn", "The Poolside Deck"],
  },
  {
    icon: Gift,
    title: "Farewell & Retirement Parties",
    description:
      "Honour a colleague, mentor, or loved one with a celebration that reflects their legacy. From intimate gatherings to larger events, we tailor every detail.",
    idealVenues: ["The Forest Terrace", "The Banquet Hall"],
  },
];

const socialVenues = venues.filter(
  (v) =>
    v.idealFor.includes("birthday") ||
    v.idealFor.includes("anniversary") ||
    v.idealFor.includes("family_gathering")
);

const inclusions = [
  "Dedicated event coordinator",
  "Customisable food and beverage packages",
  "Themed décor and floral arrangements",
  "Custom cakes and dessert stations",
  "Live music and DJ arrangements",
  "Photography and videography referrals",
  "Guest accommodation at special rates",
  "Welcome drinks and canapés",
  "Activity coordination for families",
  "Return gifts and favour packaging",
];

export function SocialClient() {
  return (
    <>
      <PageHero
        label="Social Celebrations"
        title="Milestones Worth Celebrating"
        subtitle="Birthdays, anniversaries, reunions, and every joyous occasion — celebrated in luxury, surrounded by nature."
        breadcrumbs={[
          { label: "Weddings & Events", href: "/weddings-events" },
          {
            label: "Social Celebrations",
            href: "/weddings-events/social-celebrations",
          },
        ]}
      />

      {/* AEO Summary */}
      <section className="py-10 bg-ivory-50 border-b border-earth-100">
        <div className="container-luxury max-w-3xl text-center">
          <p className="text-earth-700 leading-relaxed">
            Giovanni Village Resort hosts birthday parties, anniversary celebrations, engagement parties, family reunions, and festive events near Bhopal. Venues range from 20 to 1,000 guests with dedicated planning, custom catering, themed décor, and entertainment coordination.
          </p>
        </div>
      </section>

      {/* Celebration Types */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeading
            label="Celebrations"
            title="Every Occasion, Beautifully Hosted"
            subtitle="Whatever the milestone, our team crafts an experience that honours the moment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {celebrationTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-ivory-50 rounded-2xl p-8 border border-earth-100 hover:border-gold-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center mb-5">
                  <type.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-heading text-lg font-medium text-earth-900">
                  {type.title}
                </h3>
                <p className="mt-2 text-sm text-earth-600 leading-relaxed">
                  {type.description}
                </p>
                <div className="mt-4">
                  <p className="text-xs font-medium text-gold-700 uppercase tracking-wide mb-1">
                    Ideal Venues
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {type.idealVenues.map((v) => (
                      <span
                        key={v}
                        className="text-xs text-earth-600 bg-white px-2 py-1 rounded-full"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="section-padding bg-ivory-50">
        <div className="container-luxury">
          <SectionHeading
            label="Venues"
            title="Spaces That Set the Scene"
            subtitle="Discover the perfect venue for your celebration, from intimate terraces to expansive lawns."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialVenues.map((venue, i) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-earth-100 hover:shadow-lg transition-shadow"
              >
                <ImagePlaceholder
                  src={venue.heroImage.src}
                  alt={venue.name}
                  aspect="video"
                  label={venue.name}
                  className="rounded-none"
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-medium text-earth-900">
                    {venue.name}
                  </h3>
                  <p className="mt-2 text-sm text-earth-600 line-clamp-2">
                    {venue.shortDescription}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-earth-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {venue.capacity.min}–{venue.capacity.max} guests
                    </span>
                    <span className="capitalize">
                      {venue.venueType.replace("_", " ")}
                    </span>
                  </div>
                  <Link
                    href={`/weddings-events/venues/${venue.slug}`}
                    className="inline-block mt-4"
                  >
                    <Button variant="outline" size="sm">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImagePlaceholder
                src="/images/gallery/resort-4.jpg"
                alt="Social celebration at Giovanni"
                aspect="square"
                label="Celebration Setup"
                className="rounded-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="font-accent text-sm tracking-[0.15em] uppercase text-gold-600 mb-2">
                Our Services
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-earth-900">
                Everything You Need, Thoughtfully Arranged
              </h2>
              <p className="mt-4 text-earth-600 leading-relaxed">
                Our events team takes care of every detail so you can focus on what matters most — celebrating with your loved ones.
              </p>
              <ul className="mt-6 space-y-3">
                {inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-earth-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
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
              Start Planning
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-earth-900">
              Let Us Make It Memorable
            </h2>
            <p className="mt-4 text-earth-600 leading-relaxed">
              Tell us about your upcoming celebration and our events team will create a tailored proposal just for you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?type=celebration">
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
