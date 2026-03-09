"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { globalSettings } from "@/data/global";

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        label="Contact"
        title="We'd Love to Hear from You"
        subtitle="Whether you're planning a stay, an event, or simply have a question — our team is here to help."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl font-medium text-earth-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-earth-800">Address</h3>
                    <p className="text-sm text-earth-600 mt-1">{globalSettings.address.fullAddress}</p>
                    <a href={globalSettings.address.mapUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-gold-600 hover:underline mt-1 inline-block">
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-earth-800">Phone</h3>
                    <p className="text-sm text-earth-600 mt-1">General: {globalSettings.contact.phone}</p>
                    <p className="text-sm text-earth-600">Reservations: {globalSettings.contact.reservationPhone}</p>
                    <p className="text-sm text-earth-600">Events: {globalSettings.contact.eventsPhone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-earth-800">Email</h3>
                    <p className="text-sm text-earth-600 mt-1">General: {globalSettings.contact.email}</p>
                    <p className="text-sm text-earth-600">Bookings: {globalSettings.bookingEmail}</p>
                    <p className="text-sm text-earth-600">Events: {globalSettings.eventsEmail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-earth-800">Hours</h3>
                    <p className="text-sm text-earth-600 mt-1">Front Desk: 24 hours</p>
                    <p className="text-sm text-earth-600">Check-in: {globalSettings.checkInTime}</p>
                    <p className="text-sm text-earth-600">Check-out: {globalSettings.checkOutTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest-50 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-forest-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-earth-800">WhatsApp</h3>
                    <p className="text-sm text-earth-600 mt-1">
                      Chat with us on WhatsApp for quick enquiries.
                    </p>
                    <a
                      href={`https://wa.me/${globalSettings.whatsappNumber.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-forest-600 hover:underline mt-1 inline-block"
                    >
                      Open WhatsApp →
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 bg-earth-200 rounded-xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-earth-500">
                  <MapPin className="w-10 h-10 mx-auto mb-2 text-earth-400" />
                  <p className="text-xs font-accent tracking-wider uppercase">Map Placeholder</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-earth-100 shadow-[0_4px_20px_rgba(26,24,20,0.06)] p-6 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <CheckCircle className="w-16 h-16 text-forest-500 mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-medium text-earth-900 mb-2">
                      Message Sent
                    </h3>
                    <p className="text-earth-600">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl font-medium text-earth-900 mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-earth-500 mb-8">
                      Fill out the form below and we&apos;ll respond within 24 hours.
                    </p>

                    <form
                      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-medium text-earth-700 mb-1.5 tracking-wide uppercase">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-ivory-50 border border-earth-200 rounded-lg text-sm text-earth-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-earth-700 mb-1.5 tracking-wide uppercase">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 bg-ivory-50 border border-earth-200 rounded-lg text-sm text-earth-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-medium text-earth-700 mb-1.5 tracking-wide uppercase">
                            Phone
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 bg-ivory-50 border border-earth-200 rounded-lg text-sm text-earth-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                            placeholder="+91 00000 00000"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-earth-700 mb-1.5 tracking-wide uppercase">
                            Enquiry Type
                          </label>
                          <select className="w-full px-4 py-3 bg-ivory-50 border border-earth-200 rounded-lg text-sm text-earth-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent">
                            <option value="">Select...</option>
                            <option value="booking">Room Booking</option>
                            <option value="wedding">Wedding Enquiry</option>
                            <option value="event">Event / Party Enquiry</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="general">General Enquiry</option>
                            <option value="feedback">Feedback</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-earth-700 mb-1.5 tracking-wide uppercase">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-ivory-50 border border-earth-200 rounded-lg text-sm text-earth-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent resize-none"
                          placeholder="Tell us how we can help..."
                        />
                      </div>

                      <Button type="submit" variant="primary" size="lg">
                        <Send className="w-4 h-4" /> Send Message
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
