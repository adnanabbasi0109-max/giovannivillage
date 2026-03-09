"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const posts = [
  {
    slug: "luxury-resort-experience-bhopal",
    title: "What Makes a Luxury Resort Experience Truly Special",
    excerpt: "Beyond amenities and thread counts — the elements that elevate a resort stay from good to unforgettable.",
    category: "Experience",
    date: "March 2026",
  },
  {
    slug: "planning-resort-wedding-bhopal",
    title: "How to Plan the Perfect Resort Wedding Near Bhopal",
    excerpt: "A comprehensive guide to choosing your venue, menu, decor, and timeline for a dream destination wedding.",
    category: "Weddings",
    date: "February 2026",
  },
  {
    slug: "anniversary-celebration-ideas",
    title: "Anniversary Celebration Ideas That Go Beyond Dinner",
    excerpt: "Creative and meaningful ways to celebrate your milestone — from intimate setups to grand parties.",
    category: "Celebrations",
    date: "February 2026",
  },
  {
    slug: "corporate-offsite-planning-guide",
    title: "Planning a Productive Corporate Offsite: A Complete Guide",
    excerpt: "How to balance productivity, team bonding, and relaxation when planning your next corporate retreat.",
    category: "Corporate",
    date: "January 2026",
  },
  {
    slug: "weekend-staycation-bhopal",
    title: "Weekend Staycation Ideas Near Bhopal for Couples and Families",
    excerpt: "The best ways to unwind, reconnect, and explore nature without travelling far from the city.",
    category: "Travel",
    date: "January 2026",
  },
  {
    slug: "choosing-party-venue-bhopal",
    title: "How to Choose the Right Party Venue in Bhopal",
    excerpt: "Key factors to consider when selecting a venue for your next celebration — capacity, ambience, catering, and more.",
    category: "Events",
    date: "December 2025",
  },
];

export function JournalClient() {
  return (
    <>
      <PageHero
        label="Journal"
        title="Stories, Guides & Inspiration"
        subtitle="Travel tips, celebration ideas, planning guides, and insights from the world of Giovanni Village Resort."
        breadcrumbs={[{ label: "Journal", href: "/journal" }]}
      />

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={`/journal/${post.slug}`} className="group block">
                  <div className="bg-white rounded-xl overflow-hidden border border-earth-100 shadow-[0_4px_20px_rgba(26,24,20,0.04)] hover:shadow-[0_8px_40px_rgba(26,24,20,0.06)] transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <ImagePlaceholder
                        alt={post.title}
                        aspect="video"
                        label={post.category}
                        className="rounded-none group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-earth-700">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-earth-400 mb-2">{post.date}</p>
                      <h3 className="font-heading text-lg font-medium text-earth-900 group-hover:text-gold-700 transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-earth-600 mt-2 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm text-gold-600 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
