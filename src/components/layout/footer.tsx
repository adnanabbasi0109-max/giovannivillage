"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { globalSettings } from "@/data/global";

const footerLinks = {
  stay: {
    title: "Stay",
    links: [
      { name: "Rooms & Suites", href: "/stay/rooms" },
      { name: "Packages & Offers", href: "/stay/packages" },
      { name: "Book Now", href: "/book" },
    ],
  },
  celebrate: {
    title: "Celebrate",
    links: [
      { name: "Weddings", href: "/weddings-events/weddings" },
      { name: "Social Celebrations", href: "/weddings-events/social-celebrations" },
      { name: "Corporate Events", href: "/weddings-events/corporate-events" },
      { name: "Venues", href: "/weddings-events/venues" },
      { name: "Party Planner", href: "/party-planner" },
    ],
  },
  experience: {
    title: "Experience",
    links: [
      { name: "Dining", href: "/dining" },
      { name: "Spa & Wellness", href: "/experiences" },
      { name: "Nature Trails", href: "/experiences" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  resort: {
    title: "Resort",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Guest Reviews", href: "/reviews" },
      { name: "Journal", href: "/journal" },
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Policies", href: "/policies" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-earth-900 text-ivory-200" role="contentinfo">
      {/* CTA Strip */}
      <div className="bg-gold-500">
        <div className="container-luxury py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl text-white font-medium">
              Begin Your Giovanni Experience
            </h3>
            <p className="text-white/80 mt-2 text-sm md:text-base">
              Reserve your stay or plan your celebration with us.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-white text-earth-800 px-6 py-3 rounded-lg text-sm font-medium hover:bg-ivory-100 transition-colors"
            >
              Book Your Stay <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/party-planner"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Plan an Event <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-heading text-2xl text-white font-semibold">
                Giovanni
              </span>
              <span className="block font-accent text-xs tracking-[0.25em] uppercase text-gold-400 mt-1">
                Village Resort
              </span>
            </div>
            <p className="text-earth-400 text-sm leading-relaxed mb-6 max-w-sm">
              A luxury jungle resort and premier celebration destination near Bhopal,
              where nature meets refined hospitality.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={globalSettings.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-earth-400 hover:text-gold-400 transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{globalSettings.address.fullAddress}</span>
              </a>
              <a
                href={`tel:${globalSettings.contact.phone}`}
                className="flex items-center gap-2 text-earth-400 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {globalSettings.contact.phone}
              </a>
              <a
                href={`mailto:${globalSettings.contact.email}`}
                className="flex items-center gap-2 text-earth-400 hover:text-gold-400 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {globalSettings.contact.email}
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {globalSettings.social.instagram && (
                <a href={globalSettings.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-earth-800 flex items-center justify-center text-earth-400 hover:bg-gold-600 hover:text-white transition-all" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {globalSettings.social.facebook && (
                <a href={globalSettings.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-earth-800 flex items-center justify-center text-earth-400 hover:bg-gold-600 hover:text-white transition-all" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {globalSettings.social.youtube && (
                <a href={globalSettings.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-earth-800 flex items-center justify-center text-earth-400 hover:bg-gold-600 hover:text-white transition-all" aria-label="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-heading text-sm font-semibold text-white tracking-wide mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-earth-400 hover:text-gold-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-earth-800">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-earth-500">
          <p>&copy; {new Date().getFullYear()} Giovanni Village Resort. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/policies" className="hover:text-earth-300 transition-colors">Privacy Policy</Link>
            <Link href="/policies" className="hover:text-earth-300 transition-colors">Terms & Conditions</Link>
            <Link href="/policies" className="hover:text-earth-300 transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
