"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles, Building2 } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { venues } from "@/data/venues";

const eventCategories = [
  {
    id: "weddings",
    icon: Sparkles,
    label: "Weddings",
    title: "Your Dream Wedding, Perfected",
    description:
      "From opulent mandap ceremonies beneath the stars to intimate vow exchanges in the forest, Giovanni Village Resort transforms your vision into an unforgettable celebration. Our dedicated wedding planners orchestrate every detail with precision and grace.",
    features: [
      "Bespoke wedding planning with a dedicated coordinator",
      "Multiple venue options for ceremony, reception, and sangeet",
      "Custom catering with multi-cuisine menus",
      "Bridal suite and groom's quarters on-site",
      "Décor, floral, and entertainment partnerships",
      "Guest accommodation with special room blocks",
    ],
    href: "/weddings-events/weddings",
    cta: "Explore Weddings",
  },
  {
    id: "social",
    icon: Users,
    label: "Social Celebrations",
    title: "Milestones Worth Celebrating",
    description:
      "Birthdays that sparkle, anniversaries that glow, reunions that reconnect. Whether it is an intimate family gathering or a grand social affair, our venues and services create celebrations that linger in memory long after the last toast.",
    features: [
      "Birthday parties and milestone celebrations",
      "Anniversary dinners and renewal of vows",
      "Engagement parties and pre-wedding functions",
      "Family reunions and festive gatherings",
      "Themed décor and entertainment options",
      "Customisable food and beverage packages",
    ],
    href: "/weddings-events/social-celebrations",
    cta: "Plan a Celebration",
  },
  {
    id: "corporate",
    icon: Building2,
    label: "Corporate Events",
    title: "Where Business Meets Inspiration",
    description:
      "Step away from the boardroom and into a setting that inspires creativity and collaboration. Giovanni Village Resort hosts corporate offsites, conferences, product launches, and team retreats with seamless execution and five-star hospitality.",
    features: [
      "Conference and meeting facilities with full AV",
      "Corporate offsites and team-building retreats",
      "Product launches and brand events",
      "Incentive trips and reward getaways",
      "Breakout spaces and networking areas",
      "Customisable corporate packages",
    ],
    href: "/weddings-events/corporate-events",
    cta: "Plan an Event",
  },
];

export function WeddingsEventsClient() {
  return (
    <>
      <PageHero
        label="Celebrations"
        title="Weddings & Events"
        subtitle="From grand weddings to corporate retreats, Giovanni Village Resort is where extraordinary moments are brought to life amid nature, luxury, and impeccable hospitality."
        breadcrumbs={[{ label: "Weddings & Events", href: "/weddings-events" }]}
      />

      {/* AEO Summary */}
      <section className="py-10 bg-ivory-50 border-b border-earth-100">
        <div className="container-luxury max-w-3xl text-center">
          <p className="text-earth-700 leading-relaxed">
            Giovanni Village Resort offers four distinct event venues near Bhopal: The Grand Lawn (up to 1,000 guests), The Forest Terrace (up to 200 guests), The Banquet Hall (up to 400 guests, climate-controlled), and The Poolside Deck (up to 150 guests). Our dedicated events team handles weddings, social celebrations, and corporate functions with bespoke planning and world-class catering.
          </p>
        </div>
      </section>

      {/* Event Categories */}
      {eventCategories.map((cat, i) => (
        <section
          key={cat.id}
          className={`section-padding ${i % 2 === 1 ? "bg-ivory-50" : "bg-white"}`}
        >
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <ImagePlaceholder
                  src={venues.find((v) => v.isActive)?.heroImage.src}
                  alt={cat.title}
                  aspect="video"
                  label={cat.label}
                  className="rounded-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="flex items-center gap-2 mb-3">
                  <cat.icon className="w-5 h-5 text-gold-600" />
                  <p className="font-accent text-sm tracking-[0.15em] uppercase text-gold-600">
                    {cat.label}
                  </p>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-medium text-earth-900">
                  {cat.title}
                </h2>
                <p className="mt-4 text-earth-600 leading-relaxed">
                  {cat.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {cat.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-earth-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={cat.href} className="inline-block mt-8">
                  <Button variant="primary" size="md">
                    {cat.cta} <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Venues Preview */}
      <section className="section-padding bg-earth-800">
        <div className="container-luxury">
          <SectionHeading
            label="Our Venues"
            title="Exceptional Spaces for Every Occasion"
            subtitle="From sprawling outdoor lawns to elegant indoor halls, discover the perfect setting for your celebration."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venues
              .filter((v) => v.isActive)
              .map((venue, i) => (
                <motion.div
                  key={venue.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={`/weddings-events/venues/${venue.slug}`}>
                    <div className="group bg-earth-700/50 rounded-2xl overflow-hidden border border-white/10 hover:border-gold-400/30 transition-all duration-300">
                      <ImagePlaceholder
                        src={venue.heroImage.src}
                        alt={venue.name}
                        aspect="video"
                        label={venue.name}
                        className="rounded-none"
                      />
                      <div className="p-6">
                        <h3 className="font-heading text-xl font-medium text-white group-hover:text-gold-300 transition-colors">
                          {venue.name}
                        </h3>
                        <p className="mt-2 text-sm text-white/60 leading-relaxed line-clamp-2">
                          {venue.shortDescription}
                        </p>
                        <div className="mt-4 flex items-center gap-4 text-xs text-white/50">
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            Up to {venue.capacity.max} guests
                          </span>
                          <span className="capitalize">
                            {venue.venueType.replace("_", " ")}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center gap-1 text-sm text-gold-400 font-medium group-hover:gap-2 transition-all">
                          View Venue <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/weddings-events/venues">
              <Button variant="outline-light" size="lg">
                View All Venues <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
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
              Begin Planning
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-earth-900">
              Let Us Bring Your Vision to Life
            </h2>
            <p className="mt-4 text-earth-600 leading-relaxed">
              Our events team is ready to craft a celebration tailored to your dreams. Share your vision and we will take care of every detail.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?type=event">
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
