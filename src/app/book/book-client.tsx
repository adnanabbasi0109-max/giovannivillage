"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  Search,
  Check,
  ChevronRight,
  Maximize,
  Eye,
  BedDouble,
  Shield,
  Tag,
  Clock,
  X,
  Phone,
  Mail,
  User,
  MessageSquare,
  BadgeCheck,
  Star,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { rooms, addOns as allAddOns } from "@/data/rooms";
import type {
  BookingState,
  BookingSearchParams,
  BookingGuestDetails,
  RoomCategory,
  AddOn,
  SelectedAddOn,
} from "@/types";

/* ──────────────────────────────────
   Constants
   ────────────────────────────────── */

const TAX_RATE = 0.18;

const STEP_LABELS = ["Search", "Select Room", "Confirm"] as const;

const TRUST_CUES = [
  { icon: Shield, text: "Secure booking" },
  { icon: Tag, text: "Best rate guaranteed" },
  { icon: Calendar, text: "Free cancellation" },
] as const;

/* ──────────────────────────────────
   Helpers
   ────────────────────────────────── */

function nightsBetween(checkIn: string, checkOut: string): number {
  const a = new Date(checkIn);
  const b = new Date(checkOut);
  const diff = Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 1;
}

function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}

function tomorrowStr(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

function formatDatePretty(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function generateConfirmation(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "GVR-";
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/* ──────────────────────────────────
   Step transitions
   ────────────────────────────────── */

const stepVariants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

/* ──────────────────────────────────
   Progress Indicator
   ────────────────────────────────── */

function ProgressIndicator({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex items-center justify-between">
        {STEP_LABELS.map((label, i) => {
          const stepNum = (i + 1) as 1 | 2 | 3;
          const isActive = step === stepNum;
          const isComplete = step > stepNum;
          return (
            <div key={label} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full">
                {i > 0 && (
                  <div
                    className={`flex-1 h-px transition-colors duration-500 ${
                      step > i ? "bg-gold-500" : "bg-earth-200"
                    }`}
                  />
                )}
                <div
                  className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-500 text-sm font-medium ${
                    isComplete
                      ? "bg-gold-500 border-gold-500 text-white"
                      : isActive
                      ? "border-gold-500 bg-white text-gold-600"
                      : "border-earth-200 bg-white text-earth-400"
                  }`}
                >
                  {isComplete ? <Check className="w-4 h-4" /> : stepNum}
                </div>
                {i < STEP_LABELS.length - 1 && (
                  <div
                    className={`flex-1 h-px transition-colors duration-500 ${
                      step > i + 1 ? "bg-gold-500" : "bg-earth-200"
                    }`}
                  />
                )}
              </div>
              <span
                className={`mt-2 text-xs tracking-wide transition-colors duration-300 ${
                  isActive || isComplete
                    ? "text-gold-700 font-medium"
                    : "text-earth-400"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <p className="text-center text-xs text-earth-500 mt-3">
        Step {step} of 3
      </p>
    </div>
  );
}

/* ──────────────────────────────────
   Trust Bar
   ────────────────────────────────── */

function TrustBar() {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-4">
      {TRUST_CUES.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-center gap-2 text-earth-600">
          <Icon className="w-4 h-4 text-gold-500" />
          <span className="text-xs tracking-wide">{text}</span>
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────
   Step 1 — Search
   ────────────────────────────────── */

interface Step1Props {
  onSearch: (params: BookingSearchParams) => void;
  initialParams: BookingSearchParams | null;
}

function StepSearch({ onSearch, initialParams }: Step1Props) {
  const [checkIn, setCheckIn] = useState(initialParams?.checkIn || todayStr());
  const [checkOut, setCheckOut] = useState(initialParams?.checkOut || tomorrowStr());
  const [adults, setAdults] = useState(initialParams?.adults || 2);
  const [children, setChildren] = useState(initialParams?.children || 0);
  const [promoCode, setPromoCode] = useState(initialParams?.promoCode || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ checkIn, checkOut, adults, children, promoCode: promoCode || undefined });
  };

  const nights = nightsBetween(checkIn, checkOut);

  return (
    <motion.div
      key="step-1"
      variants={stepVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <Card className="max-w-2xl mx-auto border-gold-200/60 shadow-[0_8px_40px_rgba(212,168,83,0.08)]">
        <CardContent className="p-6 md:p-10">
          {/* Heading */}
          <div className="text-center mb-8">
            <Sparkles className="w-6 h-6 text-gold-500 mx-auto mb-3" />
            <h2 className="font-heading text-2xl md:text-3xl text-earth-900 mb-2">
              Plan Your Escape
            </h2>
            <p className="text-sm text-earth-500">
              Select your dates and preferences to find the perfect room.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-medium text-earth-600 uppercase tracking-wider mb-1.5 block">
                  Check-in
                </span>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500 pointer-events-none" />
                  <input
                    type="date"
                    value={checkIn}
                    min={todayStr()}
                    onChange={(e) => {
                      setCheckIn(e.target.value);
                      if (e.target.value >= checkOut) {
                        const next = new Date(e.target.value);
                        next.setDate(next.getDate() + 1);
                        setCheckOut(next.toISOString().split("T")[0]);
                      }
                    }}
                    className="w-full pl-10 pr-4 h-12 rounded-lg border border-earth-200 bg-ivory-50 text-earth-800 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-shadow"
                    required
                  />
                </div>
              </label>
              <label className="block">
                <span className="text-xs font-medium text-earth-600 uppercase tracking-wider mb-1.5 block">
                  Check-out
                </span>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500 pointer-events-none" />
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-4 h-12 rounded-lg border border-earth-200 bg-ivory-50 text-earth-800 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-shadow"
                    required
                  />
                </div>
              </label>
            </div>

            {/* Night indicator */}
            {nights > 0 && (
              <p className="text-center text-xs text-gold-600 font-medium -mt-2">
                {nights} night{nights > 1 ? "s" : ""}
              </p>
            )}

            {/* Guests */}
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-medium text-earth-600 uppercase tracking-wider mb-1.5 block">
                  Adults
                </span>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500 pointer-events-none" />
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full pl-10 pr-4 h-12 rounded-lg border border-earth-200 bg-ivory-50 text-earth-800 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-shadow"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} Adult{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
              <label className="block">
                <span className="text-xs font-medium text-earth-600 uppercase tracking-wider mb-1.5 block">
                  Children
                </span>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500 pointer-events-none" />
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full pl-10 pr-4 h-12 rounded-lg border border-earth-200 bg-ivory-50 text-earth-800 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-shadow"
                  >
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} Child{n !== 1 ? "ren" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
            </div>

            {/* Promo Code */}
            <label className="block">
              <span className="text-xs font-medium text-earth-600 uppercase tracking-wider mb-1.5 block">
                Promo Code{" "}
                <span className="text-earth-400 normal-case tracking-normal">(optional)</span>
              </span>
              <div className="relative">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500 pointer-events-none" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                  placeholder="Enter code"
                  className="w-full pl-10 pr-4 h-12 rounded-lg border border-earth-200 bg-ivory-50 text-earth-800 text-sm placeholder:text-earth-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-shadow"
                />
              </div>
            </label>

            {/* Submit */}
            <Button type="submit" variant="primary" size="lg" className="w-full">
              <Search className="w-4 h-4" />
              Check Availability
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ──────────────────────────────────
   Step 2 — Room Selection
   ────────────────────────────────── */

interface Step2Props {
  search: BookingSearchParams;
  onSelect: (room: RoomCategory, selectedAddOns: SelectedAddOn[]) => void;
  onBack: () => void;
}

function StepRoomSelection({ search, onSelect, onBack }: Step2Props) {
  const totalGuests = search.adults + search.children;
  const nights = nightsBetween(search.checkIn, search.checkOut);

  const availableRooms = useMemo(
    () =>
      rooms
        .filter((r) => r.isActive && r.maxOccupancy >= totalGuests)
        .sort((a, b) => a.sortOrder - b.sortOrder),
    [totalGuests]
  );

  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<Set<string>>(new Set());

  const toggleAddOn = useCallback((id: string) => {
    setSelectedAddOnIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const selectedRoom = availableRooms.find((r) => r.id === selectedRoomId) || null;

  const addOnTotal = useMemo(() => {
    let total = 0;
    selectedAddOnIds.forEach((id) => {
      const ao = allAddOns.find((a) => a.id === id);
      if (ao) total += ao.price;
    });
    return total;
  }, [selectedAddOnIds]);

  const roomSubtotal = selectedRoom ? selectedRoom.baseRate * nights : 0;
  const subtotal = roomSubtotal + addOnTotal;
  const tax = Math.round(subtotal * TAX_RATE);
  const grandTotal = subtotal + tax;

  const handleContinue = () => {
    if (!selectedRoom) return;
    const addOnItems: SelectedAddOn[] = [];
    selectedAddOnIds.forEach((id) => {
      const ao = allAddOns.find((a) => a.id === id);
      if (ao) addOnItems.push({ addOn: ao, quantity: 1, totalPrice: ao.price });
    });
    onSelect(selectedRoom, addOnItems);
  };

  return (
    <motion.div
      key="step-2"
      variants={stepVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Search summary */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-1">
        <div className="flex flex-wrap items-center gap-4 text-sm text-earth-600">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-gold-500" />
            {formatDatePretty(search.checkIn)} &mdash; {formatDatePretty(search.checkOut)}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-gold-500" />
            {search.adults} Adult{search.adults > 1 ? "s" : ""}
            {search.children > 0 &&
              `, ${search.children} Child${search.children > 1 ? "ren" : ""}`}
          </span>
          <span className="text-gold-600 font-medium">
            {nights} night{nights > 1 ? "s" : ""}
          </span>
        </div>
        <button
          onClick={onBack}
          className="text-xs text-gold-600 hover:text-gold-700 underline underline-offset-2 transition-colors"
        >
          Modify search
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Room Cards */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-heading text-xl md:text-2xl text-earth-900">
            Available Rooms
          </h2>

          {availableRooms.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-earth-500">
                  No rooms available for {totalGuests} guest{totalGuests > 1 ? "s" : ""}.
                  Please adjust your search.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-5">
              {availableRooms.map((room) => {
                const isSelected = selectedRoomId === room.id;
                const perNight = room.baseRate;
                const total = perNight * nights;
                return (
                  <Card
                    key={room.id}
                    className={`overflow-hidden transition-all duration-300 ${
                      isSelected
                        ? "ring-2 ring-gold-500 border-gold-300 shadow-[0_8px_40px_rgba(212,168,83,0.12)]"
                        : "hover:border-earth-200"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="md:w-64 lg:w-72 flex-shrink-0">
                        <ImagePlaceholder
                          src={room.heroImage.src}
                          alt={room.name}
                          aspect="video"
                          className="md:h-full md:aspect-auto rounded-none md:rounded-l-xl md:rounded-tr-none"
                          label={room.name}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 p-5 md:p-6 flex flex-col">
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div>
                              <h3 className="font-heading text-lg text-earth-900">
                                {room.name}
                              </h3>
                              <p className="text-xs text-earth-500 mt-0.5">
                                {room.tagline}
                              </p>
                            </div>
                            {room.rackRate > room.baseRate && (
                              <span className="flex-shrink-0 text-[10px] bg-gold-50 text-gold-700 font-medium px-2 py-0.5 rounded-full border border-gold-200">
                                Save {Math.round(((room.rackRate - room.baseRate) / room.rackRate) * 100)}%
                              </span>
                            )}
                          </div>

                          {/* Quick specs */}
                          <div className="flex flex-wrap gap-3 text-xs text-earth-600 mt-3">
                            <span className="flex items-center gap-1">
                              <Maximize className="w-3.5 h-3.5 text-earth-400" />
                              {room.sizeSqFt} sq ft
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3.5 h-3.5 text-earth-400" />
                              Up to {room.maxOccupancy}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-3.5 h-3.5 text-earth-400" />
                              {room.viewType}
                            </span>
                            <span className="flex items-center gap-1">
                              <BedDouble className="w-3.5 h-3.5 text-earth-400" />
                              {room.bedType}
                            </span>
                          </div>

                          {/* Inclusions */}
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {room.inclusions.slice(0, 4).map((inc) => (
                              <span
                                key={inc}
                                className="text-[10px] bg-forest-50 text-forest-700 px-2 py-0.5 rounded-full"
                              >
                                {inc}
                              </span>
                            ))}
                            {room.inclusions.length > 4 && (
                              <span className="text-[10px] text-earth-400">
                                +{room.inclusions.length - 4} more
                              </span>
                            )}
                          </div>

                          {/* Features */}
                          <ul className="mt-3 space-y-1 hidden md:block">
                            {room.features.slice(0, 3).map((f) => (
                              <li key={f} className="flex items-start gap-1.5 text-xs text-earth-600">
                                <Check className="w-3 h-3 text-gold-500 mt-0.5 flex-shrink-0" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Price + Select */}
                        <div className="flex items-end justify-between mt-4 pt-4 border-t border-earth-100">
                          <div>
                            {room.rackRate > room.baseRate && (
                              <span className="text-xs text-earth-400 line-through mr-2">
                                {formatCurrency(room.rackRate)}
                              </span>
                            )}
                            <span className="text-lg font-heading text-earth-900">
                              {formatCurrency(perNight)}
                            </span>
                            <span className="text-xs text-earth-500"> / night</span>
                            <p className="text-[10px] text-earth-400 mt-0.5">
                              {formatCurrency(total)} for {nights} night{nights > 1 ? "s" : ""}
                            </p>
                          </div>
                          <Button
                            variant={isSelected ? "primary" : "outline"}
                            size="sm"
                            onClick={() =>
                              setSelectedRoomId(isSelected ? null : room.id)
                            }
                          >
                            {isSelected ? (
                              <>
                                <Check className="w-3.5 h-3.5" /> Selected
                              </>
                            ) : (
                              "Select"
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Add-ons */}
          {selectedRoomId && allAddOns.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="font-heading text-lg text-earth-900 mb-4 mt-8">
                Enhance Your Stay
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {allAddOns
                  .filter((a) => a.isAvailable)
                  .map((ao) => {
                    const isChecked = selectedAddOnIds.has(ao.id);
                    return (
                      <label
                        key={ao.id}
                        className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                          isChecked
                            ? "border-gold-400 bg-gold-50/50 shadow-sm"
                            : "border-earth-100 bg-white hover:border-earth-200"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAddOn(ao.id)}
                          className="mt-0.5 accent-gold-500 w-4 h-4 rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-sm font-medium text-earth-800">
                              {ao.name}
                            </span>
                            <span className="text-sm font-medium text-gold-700 flex-shrink-0">
                              {formatCurrency(ao.price)}
                            </span>
                          </div>
                          <p className="text-xs text-earth-500 mt-0.5">
                            {ao.description}
                          </p>
                        </div>
                      </label>
                    );
                  })}
              </div>
            </motion.div>
          )}
        </div>

        {/* Price Sidebar */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-28">
            <Card className="border-gold-200/50">
              <CardContent className="p-5">
                <h3 className="font-heading text-base text-earth-900 mb-4">
                  Price Summary
                </h3>

                {!selectedRoom ? (
                  <p className="text-sm text-earth-400 text-center py-6">
                    Select a room to see pricing
                  </p>
                ) : (
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-earth-700">
                      <span>
                        {selectedRoom.name} &times; {nights} night{nights > 1 ? "s" : ""}
                      </span>
                      <span>{formatCurrency(roomSubtotal)}</span>
                    </div>

                    {Array.from(selectedAddOnIds).map((id) => {
                      const ao = allAddOns.find((a) => a.id === id);
                      if (!ao) return null;
                      return (
                        <div key={id} className="flex justify-between text-earth-600">
                          <span className="text-xs">{ao.name}</span>
                          <span className="text-xs">{formatCurrency(ao.price)}</span>
                        </div>
                      );
                    })}

                    <div className="border-t border-earth-100 pt-3 flex justify-between text-earth-700">
                      <span>Subtotal</span>
                      <span>{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-earth-500 text-xs">
                      <span>Taxes &amp; fees (18% GST)</span>
                      <span>{formatCurrency(tax)}</span>
                    </div>
                    <div className="border-t border-gold-200 pt-3 flex justify-between font-medium text-earth-900 text-base">
                      <span>Total</span>
                      <span className="text-gold-700">{formatCurrency(grandTotal)}</span>
                    </div>
                  </div>
                )}

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full mt-5"
                  disabled={!selectedRoom}
                  onClick={handleContinue}
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      {selectedRoom && (
        <div className="fixed bottom-0 inset-x-0 lg:hidden bg-white border-t border-earth-100 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] z-40">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-earth-500">{selectedRoom.name}</p>
              <p className="font-heading text-lg text-gold-700">
                {formatCurrency(grandTotal)}
              </p>
            </div>
            <Button variant="primary" size="md" onClick={handleContinue}>
              Continue
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* ──────────────────────────────────
   Step 3 — Guest Details & Confirm
   ────────────────────────────────── */

interface Step3Props {
  search: BookingSearchParams;
  room: RoomCategory;
  addOns: SelectedAddOn[];
  onConfirm: (guest: BookingGuestDetails) => void;
  onBack: () => void;
}

function StepGuestDetails({ search, room, addOns, onConfirm, onBack }: Step3Props) {
  const nights = nightsBetween(search.checkIn, search.checkOut);
  const roomSubtotal = room.baseRate * nights;
  const addOnTotal = addOns.reduce((sum, a) => sum + a.totalPrice, 0);
  const subtotal = roomSubtotal + addOnTotal;
  const tax = Math.round(subtotal * TAX_RATE);
  const grandTotal = subtotal + tax;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const isFormValid =
    firstName.trim() &&
    lastName.trim() &&
    email.trim() &&
    phone.trim() &&
    agreedToTerms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    onConfirm({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      specialRequests: specialRequests.trim() || undefined,
      arrivalTime: arrivalTime || undefined,
    });
  };

  return (
    <motion.div
      key="step-3"
      variants={stepVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Guest Form */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl md:text-2xl text-earth-900">
              Guest Details
            </h2>
            <button
              onClick={onBack}
              className="text-xs text-gold-600 hover:text-gold-700 underline underline-offset-2 transition-colors"
            >
              Change room
            </button>
          </div>

          <Card>
            <CardContent className="p-5 md:p-8">
              <form onSubmit={handleSubmit} id="guest-form" className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-medium text-earth-600 uppercase tracking-wider mb-1.5 block">
                      First Name *
                    </span>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500 pointer-events-none" />
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name"
                        className="w-full pl-10 pr-4 h-12 rounded-lg border border-earth-200 bg-ivory-50 text-earth-800 text-sm placeholder:text-earth-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-shadow"
                        required
                      />
                    </div>
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-earth-600 uppercase tracking-wider mb-1.5 block">
                      Last Name *
                    </span>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500 pointer-events-none" />
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name"
                        className="w-full pl-10 pr-4 h-12 rounded-lg border border-earth-200 bg-ivory-50 text-earth-800 text-sm placeholder:text-earth-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-shadow"
                        required
                      />
                    </div>
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-medium text-earth-600 uppercase tracking-wider mb-1.5 block">
                    Email *
                  </span>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 h-12 rounded-lg border border-earth-200 bg-ivory-50 text-earth-800 text-sm placeholder:text-earth-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-shadow"
                      required
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-earth-600 uppercase tracking-wider mb-1.5 block">
                    Phone *
                  </span>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500 pointer-events-none" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 h-12 rounded-lg border border-earth-200 bg-ivory-50 text-earth-800 text-sm placeholder:text-earth-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-shadow"
                      required
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-earth-600 uppercase tracking-wider mb-1.5 block">
                    Estimated Arrival Time
                  </span>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500 pointer-events-none" />
                    <select
                      value={arrivalTime}
                      onChange={(e) => setArrivalTime(e.target.value)}
                      className="w-full pl-10 pr-4 h-12 rounded-lg border border-earth-200 bg-ivory-50 text-earth-800 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-shadow"
                    >
                      <option value="">Select time</option>
                      <option value="12:00 - 14:00">12:00 - 14:00</option>
                      <option value="14:00 - 16:00">14:00 - 16:00 (Check-in time)</option>
                      <option value="16:00 - 18:00">16:00 - 18:00</option>
                      <option value="18:00 - 20:00">18:00 - 20:00</option>
                      <option value="After 20:00">After 20:00</option>
                    </select>
                  </div>
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-earth-600 uppercase tracking-wider mb-1.5 block">
                    Special Requests
                  </span>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gold-500 pointer-events-none" />
                    <textarea
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="Any special requirements or celebrations?"
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-earth-200 bg-ivory-50 text-earth-800 text-sm placeholder:text-earth-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-shadow resize-none"
                    />
                  </div>
                </label>

                {/* Terms */}
                <label className="flex items-start gap-3 cursor-pointer pt-2">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-0.5 accent-gold-500 w-4 h-4 rounded"
                  />
                  <span className="text-xs text-earth-600 leading-relaxed">
                    I agree to the{" "}
                    <span className="text-gold-600 underline underline-offset-2">
                      terms &amp; conditions
                    </span>{" "}
                    and{" "}
                    <span className="text-gold-600 underline underline-offset-2">
                      cancellation policy
                    </span>
                    . I understand that my booking is subject to availability confirmation.
                  </span>
                </label>

                {/* Desktop Submit */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full hidden lg:flex"
                  disabled={!isFormValid}
                >
                  <Shield className="w-4 h-4" />
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Booking Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-28 space-y-4">
            <Card className="border-gold-200/50">
              <CardContent className="p-5">
                <h3 className="font-heading text-base text-earth-900 mb-4">
                  Booking Summary
                </h3>

                {/* Room Preview */}
                <ImagePlaceholder
                  src={room.heroImage.src}
                  alt={room.name}
                  aspect="video"
                  className="mb-4"
                  label={room.name}
                />

                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-earth-800">{room.name}</p>
                    <p className="text-xs text-earth-500 mt-0.5">{room.tagline}</p>
                  </div>

                  <div className="border-t border-earth-100 pt-3 space-y-2 text-xs text-earth-600">
                    <div className="flex justify-between">
                      <span>Check-in</span>
                      <span className="text-earth-800">{formatDatePretty(search.checkIn)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-out</span>
                      <span className="text-earth-800">{formatDatePretty(search.checkOut)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration</span>
                      <span className="text-earth-800">
                        {nights} night{nights > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guests</span>
                      <span className="text-earth-800">
                        {search.adults} Adult{search.adults > 1 ? "s" : ""}
                        {search.children > 0 &&
                          `, ${search.children} Child${search.children > 1 ? "ren" : ""}`}
                      </span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-earth-100 pt-3 space-y-2">
                    <div className="flex justify-between text-earth-700">
                      <span>
                        Room ({nights} night{nights > 1 ? "s" : ""})
                      </span>
                      <span>{formatCurrency(roomSubtotal)}</span>
                    </div>
                    {addOns.map(({ addOn: ao, totalPrice }) => (
                      <div key={ao.id} className="flex justify-between text-earth-600 text-xs">
                        <span>{ao.name}</span>
                        <span>{formatCurrency(totalPrice)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-earth-700 pt-1">
                      <span>Subtotal</span>
                      <span>{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-earth-500 text-xs">
                      <span>Taxes &amp; fees (18% GST)</span>
                      <span>{formatCurrency(tax)}</span>
                    </div>
                    <div className="border-t border-gold-200 pt-3 flex justify-between font-medium text-earth-900 text-base">
                      <span>Total</span>
                      <span className="text-gold-700">{formatCurrency(grandTotal)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <TrustBar />
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 inset-x-0 lg:hidden bg-white border-t border-earth-100 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-earth-500">Total</p>
            <p className="font-heading text-lg text-gold-700">
              {formatCurrency(grandTotal)}
            </p>
          </div>
          <Button
            type="submit"
            form="guest-form"
            variant="primary"
            size="md"
            disabled={!isFormValid}
          >
            <Shield className="w-4 h-4" />
            Confirm Booking
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────
   Confirmation State
   ────────────────────────────────── */

interface ConfirmationProps {
  confirmationNumber: string;
  guest: BookingGuestDetails;
  search: BookingSearchParams;
  room: RoomCategory;
  addOns: SelectedAddOn[];
}

function BookingConfirmation({
  confirmationNumber,
  guest,
  search,
  room,
  addOns,
}: ConfirmationProps) {
  const nights = nightsBetween(search.checkIn, search.checkOut);
  const roomSubtotal = room.baseRate * nights;
  const addOnTotal = addOns.reduce((sum, a) => sum + a.totalPrice, 0);
  const subtotal = roomSubtotal + addOnTotal;
  const tax = Math.round(subtotal * TAX_RATE);
  const grandTotal = subtotal + tax;

  return (
    <motion.div
      key="confirmation"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="max-w-2xl mx-auto"
    >
      <Card className="border-gold-200/60 shadow-[0_8px_40px_rgba(212,168,83,0.08)] overflow-hidden">
        {/* Success Header */}
        <div className="bg-gradient-to-br from-forest-600 to-forest-700 px-6 py-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <BadgeCheck className="w-8 h-8 text-forest-600" />
          </motion.div>
          <h2 className="font-heading text-2xl md:text-3xl text-white mb-2">
            Booking Confirmed
          </h2>
          <p className="text-white/70 text-sm">
            A confirmation has been sent to {guest.email}
          </p>
        </div>

        <CardContent className="p-6 md:p-8">
          {/* Confirmation Number */}
          <div className="text-center py-4 mb-6 bg-ivory-100 rounded-xl border border-gold-200/60">
            <p className="text-xs text-earth-500 uppercase tracking-wider mb-1">
              Confirmation Number
            </p>
            <p className="font-heading text-2xl text-gold-700 tracking-wider">
              {confirmationNumber}
            </p>
          </div>

          {/* Details */}
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-earth-500 uppercase tracking-wider mb-1">
                  Guest
                </p>
                <p className="text-earth-800 font-medium">
                  {guest.firstName} {guest.lastName}
                </p>
              </div>
              <div>
                <p className="text-xs text-earth-500 uppercase tracking-wider mb-1">
                  Room
                </p>
                <p className="text-earth-800 font-medium">{room.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-earth-500 uppercase tracking-wider mb-1">
                  Check-in
                </p>
                <p className="text-earth-800">{formatDatePretty(search.checkIn)}</p>
              </div>
              <div>
                <p className="text-xs text-earth-500 uppercase tracking-wider mb-1">
                  Check-out
                </p>
                <p className="text-earth-800">{formatDatePretty(search.checkOut)}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-earth-500 uppercase tracking-wider mb-1">
                  Duration
                </p>
                <p className="text-earth-800">
                  {nights} night{nights > 1 ? "s" : ""}
                </p>
              </div>
              <div>
                <p className="text-xs text-earth-500 uppercase tracking-wider mb-1">
                  Guests
                </p>
                <p className="text-earth-800">
                  {search.adults} Adult{search.adults > 1 ? "s" : ""}
                  {search.children > 0 &&
                    `, ${search.children} Child${search.children > 1 ? "ren" : ""}`}
                </p>
              </div>
            </div>

            {addOns.length > 0 && (
              <div>
                <p className="text-xs text-earth-500 uppercase tracking-wider mb-1">
                  Add-ons
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {addOns.map(({ addOn: ao }) => (
                    <span
                      key={ao.id}
                      className="text-xs bg-gold-50 text-gold-700 px-2 py-0.5 rounded-full border border-gold-200"
                    >
                      {ao.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Total */}
            <div className="border-t border-gold-200 pt-4 mt-4">
              <div className="flex justify-between items-baseline">
                <span className="text-earth-600">Total Paid</span>
                <span className="font-heading text-xl text-gold-700">
                  {formatCurrency(grandTotal)}
                </span>
              </div>
              <p className="text-[10px] text-earth-400 mt-1">
                Inclusive of 18% GST ({formatCurrency(tax)})
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 space-y-3">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => window.print()}
            >
              Print Confirmation
            </Button>
            <Button
              variant="ghost"
              size="md"
              className="w-full"
              onClick={() => (window.location.href = "/")}
            >
              Return to Homepage
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ──────────────────────────────────
   Main Booking Client
   ────────────────────────────────── */

export function BookingClient() {
  const searchParams = useSearchParams();

  // Read URL params for pre-fill
  const initialSearch = useMemo<BookingSearchParams | null>(() => {
    const checkIn = searchParams.get("checkIn");
    const checkOut = searchParams.get("checkOut");
    if (!checkIn || !checkOut) return null;
    return {
      checkIn,
      checkOut,
      adults: Number(searchParams.get("adults")) || 2,
      children: Number(searchParams.get("children")) || 0,
      promoCode: searchParams.get("promo") || undefined,
    };
  }, [searchParams]);

  const [state, setState] = useState<BookingState>({
    step: 1,
    search: initialSearch,
    selectedRoom: null,
    guestDetails: null,
    totalAmount: 0,
    taxAmount: 0,
    grandTotal: 0,
  });

  const [confirmed, setConfirmed] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState("");
  const [confirmedGuest, setConfirmedGuest] = useState<BookingGuestDetails | null>(null);
  const [confirmedAddOns, setConfirmedAddOns] = useState<SelectedAddOn[]>([]);

  // If URL has full search params, auto-advance
  useEffect(() => {
    if (initialSearch && state.step === 1) {
      setState((prev) => ({ ...prev, search: initialSearch, step: 2 }));
    }
    // Only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = useCallback((params: BookingSearchParams) => {
    setState((prev) => ({ ...prev, search: params, step: 2 }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleRoomSelect = useCallback(
    (room: RoomCategory, selectedAddOns: SelectedAddOn[]) => {
      const nights = nightsBetween(
        state.search!.checkIn,
        state.search!.checkOut
      );
      const roomTotal = room.baseRate * nights;
      const addOnTotal = selectedAddOns.reduce((sum, a) => sum + a.totalPrice, 0);
      const subtotal = roomTotal + addOnTotal;
      const tax = Math.round(subtotal * TAX_RATE);

      setState((prev) => ({
        ...prev,
        step: 3,
        selectedRoom: {
          roomCategory: room,
          rateId: "standard",
          rateName: "Best Available Rate",
          rateAmount: room.baseRate,
          inclusions: room.inclusions,
          cancellationPolicy: "Free cancellation up to 48 hours before check-in",
          addOns: selectedAddOns,
        },
        totalAmount: subtotal,
        taxAmount: tax,
        grandTotal: subtotal + tax,
      }));
      setConfirmedAddOns(selectedAddOns);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [state.search]
  );

  const handleConfirm = useCallback(
    (guest: BookingGuestDetails) => {
      const confNum = generateConfirmation();
      setState((prev) => ({ ...prev, guestDetails: guest }));
      setConfirmedGuest(guest);
      setConfirmationNumber(confNum);
      setConfirmed(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  const goToStep = useCallback((step: 1 | 2 | 3) => {
    setState((prev) => ({ ...prev, step }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <PageHero
        label="Reservations"
        title="Book Your Stay"
        subtitle="Reserve your private retreat at Giovanni Village Resort. Best rates guaranteed."
        breadcrumbs={[{ label: "Book", href: "/book" }]}
        compact
      />

      <section className="section-padding bg-ivory-50 min-h-[60vh]">
        <div className="container-luxury">
          {!confirmed && (
            <>
              <ProgressIndicator step={state.step} />
              <TrustBar />
            </>
          )}

          <AnimatePresence mode="wait">
            {confirmed && confirmedGuest && state.selectedRoom ? (
              <BookingConfirmation
                confirmationNumber={confirmationNumber}
                guest={confirmedGuest}
                search={state.search!}
                room={state.selectedRoom.roomCategory}
                addOns={confirmedAddOns}
              />
            ) : state.step === 1 ? (
              <StepSearch onSearch={handleSearch} initialParams={state.search} />
            ) : state.step === 2 && state.search ? (
              <StepRoomSelection
                search={state.search}
                onSelect={handleRoomSelect}
                onBack={() => goToStep(1)}
              />
            ) : state.step === 3 &&
              state.search &&
              state.selectedRoom ? (
              <StepGuestDetails
                search={state.search}
                room={state.selectedRoom.roomCategory}
                addOns={confirmedAddOns}
                onConfirm={handleConfirm}
                onBack={() => goToStep(2)}
              />
            ) : null}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
