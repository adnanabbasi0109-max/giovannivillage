"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarDays, Users, Search } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/images/gallery/hero.jpg" alt="Giovanni Village Resort" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="font-accent text-sm md:text-base tracking-[0.25em] uppercase text-gold-300 mb-6">
            A Luxury Jungle Resort Near Bhopal
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.1] max-w-4xl mx-auto">
            Where Nature Meets
            <span className="block mt-2 text-gold-gradient">Timeless Luxury</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover refined stays, grand celebrations, and serene nature retreats
            at Giovanni Village Resort.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/book">
            <Button variant="primary" size="xl">
              Book Your Stay
            </Button>
          </Link>
          <Link href="/weddings-events">
            <Button variant="outline-light" size="xl">
              Plan Your Event
            </Button>
          </Link>
        </motion.div>

        {/* Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_60px_rgba(26,24,20,0.1)] p-4 md:p-6">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs font-medium text-earth-600 mb-1.5 tracking-wide uppercase">
                  Check In
                </label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-ivory-50 border border-earth-200 rounded-lg text-sm text-earth-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-earth-600 mb-1.5 tracking-wide uppercase">
                  Check Out
                </label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-ivory-50 border border-earth-200 rounded-lg text-sm text-earth-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-earth-600 mb-1.5 tracking-wide uppercase">
                  Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-ivory-50 border border-earth-200 rounded-lg text-sm text-earth-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Link
                href={`/book?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`}
                className="w-full"
              >
                <Button variant="primary" size="lg" className="w-full">
                  <Search className="w-4 h-4" />
                  Check Availability
                </Button>
              </Link>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FFFDF9] to-transparent z-10" />
    </section>
  );
}
