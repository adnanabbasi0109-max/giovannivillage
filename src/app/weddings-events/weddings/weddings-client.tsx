"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Users,
  Utensils,
  Music,
  Camera,
  Flower2,
  Star,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { venues } from "@/data/venues";

const whyChoose = [
  {
    icon: Heart,
    title: "Dedicated Wedding Planner",
    description:
      "A personal coordinator guides you from the first consultation to the final farewell, ensuring every moment unfolds with grace.",
  },
  {
    icon: Users,
    title: "Venues for Every Scale",
    description:
      "From intimate ceremonies for 30 guests to grand celebrations for 1,000, our versatile venues adapt to your vision.",
  },
  {
    icon: Utensils,
    title: "Bespoke Catering",
    description:
      "Multi-cuisine menus crafted by our culinary team — from traditional Indian feasts to international fine dining.",
  },
  {
    icon: Flower2,
    title: "Décor & Floral Design",
    description:
      "Our partnered décor artisans transform spaces with bespoke floral arrangements, lighting, and thematic installations.",
  },
  {
    icon: Music,
    title: "Entertainment & Music",
    description:
      "Curated entertainment from live bands and DJs to classical performers and fireworks displays.",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description:
      "Recommended professional photographers and cinematographers who know our venues intimately.",
  },
];

const weddingServices = [
  "Complete wedding planning and coordination",
  "Mehendi, haldi, and sangeet event management",
  "Custom mandap and stage design",
  "Bridal suite and groom's quarters",
  "Guest accommodation with special room blocks",
  "Airport and station transfers for guests",
  "Welcome hampers and guest hospitality",
  "Pre-wedding shoot locations within the resort",
  "Baraat procession arrangements",
  "Fireworks and special effects coordination",
  "Live catering stations and chaat counters",
  "Day-after brunch coordination",
];

const weddingVenues = venues.filter((v) =>
  v.idealFor.includes("wedding")
);

const weddingStories = [
  {
    couple: "Priya & Arjun",
    type: "Grand Indian Wedding",
    guests: "500+",
    quote:
      "Giovanni made our wedding an absolute fairytale. The Grand Lawn under the stars was magical, and every guest commented on the impeccable hospitality.",
  },
  {
    couple: "Meera & Vikram",
    type: "Intimate Forest Wedding",
    guests: "80",
    quote:
      "We wanted something different — an intimate ceremony surrounded by nature. The Forest Terrace was the perfect backdrop for our special day.",
  },
  {
    couple: "Ananya & Rohan",
    type: "Destination Wedding Weekend",
    guests: "300",
    quote:
      "Three days of celebrations across multiple venues — from the poolside sangeet to the grand lawn reception. The team made it absolutely seamless.",
  },
];

export function WeddingsClient() {
  return (
    <>
      <PageHero
        label="Weddings"
        title="Your Dream Wedding, Perfected"
        subtitle="Where love stories unfold amid nature's grandeur, curated luxury, and the warmth of world-class hospitality."
        breadcrumbs={[
          { label: "Weddings & Events", href: "/weddings-events" },
          { label: "Weddings", href: "/weddings-events/weddings" },
        ]}
      />

      {/* AEO Summary */}
      <section className="py-10 bg-ivory-50 border-b border-earth-100">
        <div className="container-luxury max-w-3xl text-center">
          <p className="text-earth-700 leading-relaxed">
            Giovanni Village Resort is a premier wedding venue near Bhopal offering multiple celebration spaces for 30 to 1,000 guests. Our wedding services include dedicated planning, bespoke catering, décor coordination, bridal suites, guest accommodation, and complete multi-event wedding management from mehendi to reception.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeading
            label="Why Giovanni"
            title="Why Choose Giovanni for Your Wedding"
            subtitle="Every wedding at Giovanni is a masterpiece of planning, aesthetics, and heartfelt hospitality."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-ivory-50 rounded-2xl p-8 border border-earth-100 hover:border-gold-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-heading text-lg font-medium text-earth-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-earth-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Venues */}
      <section className="section-padding bg-ivory-50">
        <div className="container-luxury">
          <SectionHeading
            label="Wedding Venues"
            title="Venues for Your Perfect Day"
            subtitle="Each of our wedding-ready venues offers a unique ambience and scale for your celebration."
          />

          <div className="space-y-16">
            {weddingVenues.map((venue, i) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <ImagePlaceholder
                      src={venue.heroImage.src}
                      alt={venue.name}
                      aspect="video"
                      label={`${venue.name} — Wedding Setup`}
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
                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-earth-600">
                      <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full">
                        <Users className="w-3.5 h-3.5 text-gold-600" />
                        Up to {venue.capacity.max} guests
                      </span>
                      <span className="bg-white px-3 py-1.5 rounded-full capitalize">
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

      {/* Wedding Services */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeading
            label="Full-Service"
            title="Complete Wedding Services"
            subtitle="From the first consultation to the last dance, our team handles every element of your celebration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
            {weddingServices.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-start gap-3 py-3 border-b border-earth-100"
              >
                <CheckCircle2 className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-earth-700">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Wedding Stories */}
      <section className="section-padding bg-earth-800">
        <div className="container-luxury">
          <SectionHeading
            label="Love Stories"
            title="Real Weddings at Giovanni"
            subtitle="Hear from couples who celebrated their love with us."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingStories.map((story, i) => (
              <motion.div
                key={story.couple}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-earth-700/50 rounded-2xl overflow-hidden border border-white/10"
              >
                <ImagePlaceholder
                  src={`/images/gallery/resort-${i + 3}.jpg`}
                  alt={`${story.couple} wedding`}
                  aspect="video"
                  label={story.couple}
                  className="rounded-none"
                />
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 text-gold-400 fill-gold-400"
                      />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed italic">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-white font-medium">{story.couple}</p>
                    <p className="text-white/50 text-sm">
                      {story.type} &middot; {story.guests} Guests
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Your Wedding Awaits
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-earth-900">
              Begin Your Wedding Journey
            </h2>
            <p className="mt-4 text-earth-600 leading-relaxed">
              Share your vision with our wedding specialists. We will craft a celebration as unique as your love story.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?type=wedding">
                <Button variant="primary" size="lg">
                  Plan Your Wedding <ArrowRight className="w-4 h-4" />
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
