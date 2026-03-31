"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, MapPin, Star, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { globalSettings } from "@/data/global";

interface SEOLandingPageProps {
  label: string;
  title: string;
  subtitle: string;
  introHeading: string;
  introText: string;
  features: string[];
  whyGiovanniHeading: string;
  whyGiovanniPoints: { title: string; text: string }[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  faq: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
}

export function SEOLandingPage({
  label,
  title,
  subtitle,
  introHeading,
  introText,
  features,
  whyGiovanniHeading,
  whyGiovanniPoints,
  ctaPrimary,
  ctaSecondary,
  faq,
  relatedLinks,
}: SEOLandingPageProps) {
  return (
    <>
      <PageHero label={label} title={title} subtitle={subtitle} breadcrumbs={[{ label, href: "#" }]} />

      {/* AEO Intro */}
      <section className="py-12 bg-ivory-50 border-b border-earth-100">
        <div className="container-luxury max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-medium text-earth-900 mb-4 text-center">
            {introHeading}
          </h2>
          <p className="text-earth-700 leading-relaxed text-center">{introText}</p>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-earth-600">
                <Check className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center gap-4">
            <Link href={ctaPrimary.href}>
              <Button variant="primary" size="lg">{ctaPrimary.label} <ArrowRight className="w-4 h-4" /></Button>
            </Link>
            <Link href={ctaSecondary.href}>
              <Button variant="outline" size="lg">{ctaSecondary.label}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Giovanni */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading label="Why Giovanni" title={whyGiovanniHeading} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyGiovanniPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border border-earth-100 shadow-[0_4px_20px_rgba(26,24,20,0.04)]"
              >
                <div className="w-2 h-2 rounded-full bg-gold-400 mb-3" />
                <h3 className="font-heading text-base font-semibold text-earth-900">{point.title}</h3>
                <p className="text-sm text-earth-600 mt-2 leading-relaxed">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="py-12">
        <div className="container-luxury max-w-5xl">
          <ImagePlaceholder src="/images/gallery/resort-3.jpg" alt={title} aspect="wide" label="Giovanni Village Resort" className="rounded-2xl" />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-ivory-50">
        <div className="container-luxury max-w-3xl">
          <SectionHeading label="FAQ" title="Common Questions" />
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="bg-white rounded-xl p-5 border border-earth-100">
                <h3 className="font-heading text-sm font-semibold text-earth-800 mb-2">{item.q}</h3>
                <p className="text-sm text-earth-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-12 bg-gold-500">
        <div className="container-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl text-white font-medium">Ready to Experience Giovanni?</h3>
            <div className="flex items-center gap-4 mt-2 text-white/80 text-sm">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Near Bhopal, MP</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4" /> Premium Resort</span>
              <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> {globalSettings.contact.phone}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/book">
              <Button variant="white" size="lg">Book Your Stay</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline-light" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-10">
        <div className="container-luxury max-w-3xl">
          <h3 className="font-heading text-lg font-semibold text-earth-900 mb-4 text-center">Explore More</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-gold-600 hover:text-gold-700 hover:underline bg-gold-50 px-4 py-2 rounded-full">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
