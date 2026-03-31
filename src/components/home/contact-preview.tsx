"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { globalSettings } from "@/data/global";

export function ContactPreview() {
  return (
    <section className="section-padding bg-ivory-100" aria-labelledby="contact-heading">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-accent text-sm tracking-[0.2em] uppercase text-gold-600 mb-4">
              Visit Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-earth-900">
              Find Your Way to Giovanni
            </h2>
            <p className="mt-4 text-earth-600 leading-relaxed">
              Nestled near Kerwa Dam on the outskirts of Bhopal, Giovanni Village Resort is easily
              accessible yet blissfully removed from the city&apos;s bustle. Just a 30-minute drive from the
              city centre and 45 minutes from the airport.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-earth-800">Address</h4>
                  <p className="text-sm text-earth-600 mt-0.5">{globalSettings.address.fullAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-earth-800">Reservations</h4>
                  <p className="text-sm text-earth-600 mt-0.5">{globalSettings.contact.reservationPhone}</p>
                  <p className="text-sm text-earth-600">{globalSettings.contact.eventsPhone} (Events)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-earth-800">Email</h4>
                  <p className="text-sm text-earth-600 mt-0.5">{globalSettings.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-earth-800">Check-In / Check-Out</h4>
                  <p className="text-sm text-earth-600 mt-0.5">
                    Check-in: {globalSettings.checkInTime} · Check-out: {globalSettings.checkOutTime}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Link href="/contact">
                <Button variant="primary" size="md">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href={globalSettings.address.mapUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md">
                  Get Directions
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-earth-200 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-earth-500">
                <MapPin className="w-12 h-12 mx-auto mb-3 text-earth-400" />
                <p className="text-sm font-accent tracking-wider uppercase">Map Placeholder</p>
                <p className="text-xs mt-1">Embed Google Maps here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
