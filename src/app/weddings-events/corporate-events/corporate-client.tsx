"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Users,
  Presentation,
  Target,
  TreePine,
  Award,
  CheckCircle2,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { venues } from "@/data/venues";

const corporateEventTypes = [
  {
    icon: Presentation,
    title: "Conferences & Seminars",
    description:
      "State-of-the-art AV facilities, theatre-style seating for up to 350, and breakout spaces for focused workshops and panel discussions.",
    capacity: "Up to 350 attendees",
  },
  {
    icon: TreePine,
    title: "Corporate Offsites & Retreats",
    description:
      "Escape the urban bustle and immerse your team in nature. Our resort setting fosters creativity, collaboration, and strategic thinking.",
    capacity: "20 to 200 attendees",
  },
  {
    icon: Target,
    title: "Team Building Events",
    description:
      "Adventure activities, group challenges, and curated team experiences set across our 20-acre property — designed to strengthen bonds and boost morale.",
    capacity: "20 to 300 attendees",
  },
  {
    icon: Award,
    title: "Product Launches & Gala Dinners",
    description:
      "Create a lasting impression with a product launch or awards gala. Our venues provide the stage, the ambience, and the hospitality.",
    capacity: "50 to 1,000 attendees",
  },
  {
    icon: Building2,
    title: "Board Meetings & Executive Retreats",
    description:
      "Private, distraction-free settings with boardroom configurations, premium catering, and discreet hospitality for senior leadership.",
    capacity: "10 to 50 attendees",
  },
  {
    icon: Monitor,
    title: "Training Programmes",
    description:
      "Classroom-style setups with full AV, high-speed connectivity, and catered breaks. Ideal for multi-day training sessions away from the office.",
    capacity: "20 to 200 attendees",
  },
];

const corporateVenues = venues.filter((v) =>
  v.idealFor.includes("corporate") || v.idealFor.includes("conference")
);

const corporateFeatures = [
  {
    title: "Full AV & Technology",
    items: [
      "HD projectors and large screens",
      "Surround sound systems",
      "Wireless microphones and podium",
      "High-speed Wi-Fi throughout",
      "Video conferencing capability",
      "Live streaming support",
    ],
  },
  {
    title: "Hospitality & Dining",
    items: [
      "Customised corporate menus",
      "Tea, coffee, and refreshment breaks",
      "Working lunches and gala dinners",
      "Cocktail receptions",
      "Special dietary accommodations",
      "24-hour room service for delegates",
    ],
  },
  {
    title: "Planning & Support",
    items: [
      "Dedicated corporate event manager",
      "Registration and welcome desk setup",
      "Signage and branding placements",
      "Transport coordination",
      "Group accommodation rates",
      "Post-event feedback coordination",
    ],
  },
];

const corporatePackages = [
  {
    name: "Half-Day Meeting",
    ideal: "Board meetings, workshops",
    includes: "Venue, AV, 2 tea breaks, working lunch",
    guests: "10–50",
  },
  {
    name: "Full-Day Conference",
    ideal: "Conferences, training days",
    includes: "Venue, AV, breakfast, 2 tea breaks, lunch, hi-tea",
    guests: "50–350",
  },
  {
    name: "Residential Offsite",
    ideal: "Team retreats, strategy sessions",
    includes: "Accommodation, all meals, venue, AV, 1 team activity",
    guests: "20–200",
  },
  {
    name: "Gala & Launch",
    ideal: "Product launches, awards nights",
    includes: "Venue, décor, AV, cocktails, dinner, entertainment",
    guests: "50–1,000",
  },
];

export function CorporateClient() {
  return (
    <>
      <PageHero
        label="Corporate Events"
        title="Where Business Meets Inspiration"
        subtitle="Conferences, offsites, and corporate celebrations in a setting designed to inspire, impress, and deliver results."
        breadcrumbs={[
          { label: "Weddings & Events", href: "/weddings-events" },
          {
            label: "Corporate Events",
            href: "/weddings-events/corporate-events",
          },
        ]}
      />

      {/* AEO Summary */}
      <section className="py-10 bg-ivory-50 border-b border-earth-100">
        <div className="container-luxury max-w-3xl text-center">
          <p className="text-earth-700 leading-relaxed">
            Giovanni Village Resort hosts corporate conferences, team offsites, product launches, and executive retreats near Bhopal. Facilities include a climate-controlled banquet hall (350 theatre-style), outdoor venues, full AV equipment, high-speed Wi-Fi, breakout spaces, and group accommodation with customised corporate packages.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeading
            label="Event Types"
            title="Corporate Events We Excel At"
            subtitle="From focused boardroom sessions to large-scale conferences, we deliver flawless execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateEventTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
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
                <p className="mt-3 text-xs font-medium text-gold-700 bg-gold-50 px-3 py-1 rounded-full inline-block">
                  {type.capacity}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Venues */}
      <section className="section-padding bg-ivory-50">
        <div className="container-luxury">
          <SectionHeading
            label="Venues"
            title="Meeting & Event Spaces"
            subtitle="Purpose-designed venues that combine functionality with the resort's signature elegance."
          />

          <div className="space-y-16">
            {corporateVenues.map((venue, i) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <ImagePlaceholder
                      src={venue.heroImage.src}
                      alt={venue.name}
                      aspect="video"
                      label={`${venue.name} — Corporate Setup`}
                      className="rounded-2xl"
                    />
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="font-accent text-sm tracking-[0.15em] uppercase text-gold-600 mb-2">
                      {venue.tagline}
                    </p>
                    <h3 className="font-heading text-2xl md:text-3xl font-medium text-earth-900">
                      {venue.name}
                    </h3>
                    <p className="mt-3 text-earth-600 leading-relaxed">
                      {venue.shortDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {venue.capacity.theatre && (
                        <span className="text-xs bg-white px-3 py-1.5 rounded-full text-earth-600">
                          Theatre: {venue.capacity.theatre}
                        </span>
                      )}
                      {venue.capacity.classroom && (
                        <span className="text-xs bg-white px-3 py-1.5 rounded-full text-earth-600">
                          Classroom: {venue.capacity.classroom}
                        </span>
                      )}
                      {venue.capacity.boardroom && (
                        <span className="text-xs bg-white px-3 py-1.5 rounded-full text-earth-600">
                          Boardroom: {venue.capacity.boardroom}
                        </span>
                      )}
                      <span className="text-xs bg-white px-3 py-1.5 rounded-full text-earth-600 capitalize">
                        {venue.venueType.replace("_", " ")}
                      </span>
                    </div>
                    <Link
                      href={`/weddings-events/venues/${venue.slug}`}
                      className="inline-block mt-6"
                    >
                      <Button variant="outline" size="md">
                        View Venue Details <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeading
            label="Facilities"
            title="Everything Your Event Needs"
            subtitle="Comprehensive facilities and services to ensure a seamless corporate experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateFeatures.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-ivory-50 rounded-2xl p-8 border border-earth-100"
              >
                <h3 className="font-heading text-lg font-medium text-earth-900 mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-earth-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Packages */}
      <section className="section-padding bg-earth-800">
        <div className="container-luxury">
          <SectionHeading
            label="Packages"
            title="Corporate Event Packages"
            subtitle="Streamlined packages designed to make corporate event planning effortless."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporatePackages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-earth-700/50 rounded-2xl p-6 border border-white/10 hover:border-gold-400/30 transition-colors"
              >
                <h3 className="font-heading text-lg font-medium text-white">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm text-gold-400">{pkg.ideal}</p>
                <div className="mt-4 h-px bg-white/10" />
                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  {pkg.includes}
                </p>
                <p className="mt-3 text-xs text-white/50">
                  <Users className="w-3.5 h-3.5 inline mr-1" />
                  {pkg.guests} guests
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-white/50 text-sm">
              All packages are customisable. Contact our corporate events team for a tailored proposal.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-ivory-100 via-white to-gold-50">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-accent text-sm tracking-[0.2em] uppercase text-gold-600 mb-4">
              Get in Touch
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-earth-900">
              Plan Your Corporate Event
            </h2>
            <p className="mt-4 text-earth-600 leading-relaxed">
              Our corporate events team will create a tailored proposal that meets your objectives, budget, and guest expectations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?type=corporate">
                <Button variant="primary" size="lg">
                  Request a Proposal <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/weddings-events/venues">
                <Button variant="outline" size="lg">
                  View All Venues
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
