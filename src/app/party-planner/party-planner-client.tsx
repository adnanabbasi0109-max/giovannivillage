"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cake,
  Heart,
  Gem,
  Wine,
  Users,
  Music,
  Briefcase,
  Sparkles,
  MapPin,
  CalendarDays,
  UtensilsCrossed,
  Palette,
  Calculator,
  Send,
  ChevronLeft,
  ChevronRight,
  Check,
  TreePine,
  Building2,
  Waves,
  PartyPopper,
  Camera,
  Headphones,
  Flame,
  Baby,
  GlassWater,
  Beer,
  Zap,
  Info,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { cn, formatCurrency } from "@/lib/utils";
import { venues } from "@/data/venues";
import {
  eventTypes,
  menuPackages,
  enhancements as enhancementsData,
} from "@/data/party-planner";
import type {
  PartyPlannerState,
  MenuType,
  MenuTier,
  Enhancement,
  BudgetEstimate,
  EventContactInfo,
} from "@/types";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const STORAGE_KEY = "giovanni-party-planner";

const STEPS = [
  { label: "Event Type", icon: PartyPopper },
  { label: "Venue", icon: MapPin },
  { label: "Date & Guests", icon: CalendarDays },
  { label: "Menu", icon: UtensilsCrossed },
  { label: "Enhancements", icon: Palette },
  { label: "Estimate", icon: Calculator },
  { label: "Contact", icon: Send },
] as const;

const ICON_MAP: Record<string, React.ElementType> = {
  cake: Cake,
  heart: Heart,
  gem: Gem,
  wine: Wine,
  users: Users,
  music: Music,
  briefcase: Briefcase,
  sparkles: Sparkles,
};

const VENUE_ICON_MAP: Record<string, React.ElementType> = {
  outdoor: TreePine,
  indoor: Building2,
  covered_outdoor: TreePine,
  mixed: Building2,
};

const ENHANCEMENT_ICON_MAP: Record<string, React.ElementType> = {
  decor: Palette,
  entertainment: Headphones,
  food: UtensilsCrossed,
  activity: Flame,
  service: Camera,
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function defaultState(): PartyPlannerState {
  return {
    step: 1,
    eventType: null,
    venue: null,
    date: null,
    guestCount: null,
    menuType: null,
    menuTier: null,
    cuisines: [],
    desserts: [],
    beverages: [],
    liveCounters: [],
    enhancements: [],
    estimatedBudget: null,
    contactInfo: null,
    notes: "",
  };
}

function loadState(): PartyPlannerState {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...defaultState(), ...JSON.parse(raw) };
  } catch {
    /* ignore */
  }
  return defaultState();
}

function saveState(state: PartyPlannerState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

function computeBudget(state: PartyPlannerState): BudgetEstimate {
  const venue = venues.find((v) => v.id === state.venue);
  const venueCost = venue
    ? { min: venue.basePrice, max: Math.round(venue.basePrice * 1.3) }
    : { min: 0, max: 0 };

  const guests = state.guestCount ?? 100;
  const selectedPackages = menuPackages.filter(
    (p) =>
      (state.menuType === "mixed"
        ? true
        : state.menuType === "non_veg"
          ? p.type === "non_veg"
          : p.type === "veg") && p.tier === state.menuTier
  );
  const menuMin =
    selectedPackages.length > 0
      ? Math.min(...selectedPackages.map((p) => p.pricePerPlate)) * guests
      : 0;
  const menuMax =
    selectedPackages.length > 0
      ? Math.max(...selectedPackages.map((p) => p.pricePerPlate)) * guests
      : 0;
  const menuCost =
    state.menuType === "mixed"
      ? { min: Math.round(menuMin * 0.95), max: Math.round(menuMax * 1.05) }
      : { min: menuMin, max: menuMax };

  const enhMin = state.enhancements.reduce(
    (s, e) => s + e.priceRange.min,
    0
  );
  const enhMax = state.enhancements.reduce(
    (s, e) => s + e.priceRange.max,
    0
  );
  const enhancementsCost = { min: enhMin, max: enhMax };

  const subMin = venueCost.min + menuCost.min + enhancementsCost.min;
  const subMax = venueCost.max + menuCost.max + enhancementsCost.max;
  const subtotal = { min: subMin, max: subMax };
  const taxEstimate = {
    min: Math.round(subMin * 0.18),
    max: Math.round(subMax * 0.18),
  };
  const total = {
    min: subMin + taxEstimate.min,
    max: subMax + taxEstimate.max,
  };

  return { venueCost, menuCost, enhancementsCost, subtotal, taxEstimate, total };
}

// ---------------------------------------------------------------------------
// Slide animation
// ---------------------------------------------------------------------------

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 80 : -80,
    opacity: 0,
  }),
};

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export function PartyPlannerClient() {
  const [state, setState] = useState<PartyPlannerState>(defaultState);
  const [direction, setDirection] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  // Persist
  useEffect(() => {
    if (hydrated) saveState(state);
  }, [state, hydrated]);

  const update = useCallback(
    (patch: Partial<PartyPlannerState>) =>
      setState((prev) => ({ ...prev, ...patch })),
    []
  );

  const goTo = useCallback(
    (step: number) => {
      setDirection(step > state.step ? 1 : -1);
      update({ step });
    },
    [state.step, update]
  );

  const next = useCallback(
    () => goTo(Math.min(state.step + 1, 7)),
    [state.step, goTo]
  );
  const back = useCallback(
    () => goTo(Math.max(state.step - 1, 1)),
    [state.step, goTo]
  );

  // Budget (computed when arriving at step 6)
  useEffect(() => {
    if (state.step === 6) {
      update({ estimatedBudget: computeBudget(state) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.step]);

  const canNext = useMemo(() => {
    switch (state.step) {
      case 1:
        return !!state.eventType;
      case 2:
        return !!state.venue;
      case 3:
        return !!state.date && !!state.guestCount && state.guestCount > 0;
      case 4:
        return !!state.menuType && !!state.menuTier;
      case 5:
        return true; // enhancements are optional
      case 6:
        return true;
      default:
        return false;
    }
  }, [state.step, state.eventType, state.venue, state.date, state.guestCount, state.menuType, state.menuTier]);

  if (!hydrated) {
    return (
      <div className="min-h-screen bg-ivory-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-ivory-50">
      <PageHero
        title="Party Planner"
        subtitle="Design your dream celebration — choose a venue, customise menus, add enhancements, and get an instant budget estimate."
        label="Plan Your Event"
        breadcrumbs={[{ label: "Party Planner", href: "/party-planner" }]}
        compact
      />

      {/* Progress Bar */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-earth-200/60 shadow-sm">
        <div className="container-luxury py-3">
          <div className="flex items-center justify-between gap-1 overflow-x-auto scrollbar-hide">
            {STEPS.map((s, i) => {
              const stepNum = i + 1;
              const isActive = state.step === stepNum;
              const isDone = state.step > stepNum;
              const Icon = s.icon;
              return (
                <button
                  key={s.label}
                  onClick={() => {
                    if (isDone) goTo(stepNum);
                  }}
                  className={cn(
                    "flex items-center gap-1.5 px-2 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 min-w-0",
                    isActive &&
                      "bg-gold-500 text-white shadow-md shadow-gold-500/20",
                    isDone &&
                      "bg-gold-100 text-gold-700 cursor-pointer hover:bg-gold-200",
                    !isActive &&
                      !isDone &&
                      "text-earth-400 cursor-default"
                  )}
                >
                  <span
                    className={cn(
                      "flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold shrink-0 transition-all",
                      isActive && "bg-white/20 text-white",
                      isDone && "bg-gold-500 text-white",
                      !isActive && !isDone && "bg-earth-100 text-earth-400"
                    )}
                  >
                    {isDone ? <Check className="w-3 h-3" /> : stepNum}
                  </span>
                  <span className="hidden sm:inline">
                    <Icon className="w-3.5 h-3.5 inline-block mr-1 -mt-px" />
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="container-luxury py-10 md:py-14">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={state.step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {state.step === 1 && (
              <StepEventType state={state} update={update} />
            )}
            {state.step === 2 && (
              <StepVenue state={state} update={update} />
            )}
            {state.step === 3 && (
              <StepDateGuests state={state} update={update} />
            )}
            {state.step === 4 && (
              <StepMenu state={state} update={update} />
            )}
            {state.step === 5 && (
              <StepEnhancements state={state} update={update} />
            )}
            {state.step === 6 && <StepEstimate state={state} />}
            {state.step === 7 && (
              <StepContact
                state={state}
                update={update}
                submitted={submitted}
                setSubmitted={setSubmitted}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {!submitted && (
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-earth-200/50">
            <Button
              variant="ghost"
              size="md"
              onClick={back}
              disabled={state.step === 1}
              className="gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>

            {state.step < 7 ? (
              <Button
                variant="primary"
                size="lg"
                onClick={next}
                disabled={!canNext}
                className="gap-1.5"
              >
                Continue
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <div />
            )}
          </div>
        )}
      </div>
    </main>
  );
}

// ===========================================================================
// Step 1 – Event Type
// ===========================================================================

interface StepProps {
  state: PartyPlannerState;
  update: (patch: Partial<PartyPlannerState>) => void;
}

function StepEventType({ state, update }: StepProps) {
  return (
    <section>
      <StepHeading
        number={1}
        title="What Are You Celebrating?"
        subtitle="Select the type of event you are planning"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {eventTypes.map((evt) => {
          const Icon = ICON_MAP[evt.icon] ?? Sparkles;
          const selected = state.eventType === evt.id;
          return (
            <motion.button
              key={evt.id}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => update({ eventType: evt.id as PartyPlannerState["eventType"] })}
              className={cn(
                "group relative flex flex-col items-center text-center gap-3 p-6 rounded-2xl border-2 transition-all duration-300",
                selected
                  ? "border-gold-500 bg-gold-50 shadow-lg shadow-gold-500/10"
                  : "border-earth-200 bg-white hover:border-gold-300 hover:shadow-md"
              )}
            >
              <span
                className={cn(
                  "flex items-center justify-center w-14 h-14 rounded-2xl transition-all",
                  selected
                    ? "bg-gold-500 text-white"
                    : "bg-earth-100 text-earth-500 group-hover:bg-gold-100 group-hover:text-gold-600"
                )}
              >
                <Icon className="w-6 h-6" />
              </span>
              <span className="font-heading text-sm font-semibold text-earth-800 leading-tight">
                {evt.label}
              </span>
              <span className="text-xs text-earth-500 leading-snug">
                {evt.description}
              </span>
              {selected && (
                <motion.span
                  layoutId="event-check"
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gold-500 text-white flex items-center justify-center"
                >
                  <Check className="w-3.5 h-3.5" />
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

// ===========================================================================
// Step 2 – Venue
// ===========================================================================

function StepVenue({ state, update }: StepProps) {
  const activeVenues = venues.filter((v) => v.isActive);

  return (
    <section>
      <StepHeading
        number={2}
        title="Choose Your Venue"
        subtitle="Select the perfect setting for your celebration"
      />

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {activeVenues.map((venue) => {
          const selected = state.venue === venue.id;
          const VenueIcon = VENUE_ICON_MAP[venue.venueType] ?? Building2;
          return (
            <motion.button
              key={venue.id}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => update({ venue: venue.id })}
              className={cn(
                "relative text-left rounded-2xl border-2 overflow-hidden transition-all duration-300",
                selected
                  ? "border-gold-500 shadow-lg shadow-gold-500/10"
                  : "border-earth-200 bg-white hover:border-gold-300 hover:shadow-md"
              )}
            >
              {/* Gradient header */}
              <div
                className={cn(
                  "px-6 py-5 transition-all",
                  selected
                    ? "bg-gradient-to-r from-gold-500 to-gold-600"
                    : "bg-gradient-to-r from-earth-100 to-earth-50"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={cn(
                        "font-heading text-lg font-semibold",
                        selected ? "text-white" : "text-earth-800"
                      )}
                    >
                      {venue.name}
                    </h3>
                    <p
                      className={cn(
                        "text-xs mt-0.5",
                        selected ? "text-white/70" : "text-earth-500"
                      )}
                    >
                      {venue.tagline}
                    </p>
                  </div>
                  <VenueIcon
                    className={cn(
                      "w-6 h-6 shrink-0 mt-0.5",
                      selected ? "text-white/60" : "text-earth-300"
                    )}
                  />
                </div>
              </div>

              <div className="px-6 py-4 bg-white">
                <p className="text-sm text-earth-600 leading-relaxed line-clamp-2">
                  {venue.shortDescription}
                </p>

                <div className="flex flex-wrap gap-3 mt-4 text-xs">
                  <span className="flex items-center gap-1 text-earth-500">
                    <Users className="w-3.5 h-3.5 text-gold-500" />
                    {venue.capacity.min}–{venue.capacity.max} guests
                  </span>
                  <span className="flex items-center gap-1 text-earth-500">
                    <MapPin className="w-3.5 h-3.5 text-gold-500" />
                    {venue.venueType === "indoor"
                      ? "Indoor"
                      : venue.venueType === "outdoor"
                        ? "Outdoor"
                        : venue.venueType === "covered_outdoor"
                          ? "Covered Outdoor"
                          : "Mixed"}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-earth-700">
                    Starting {formatCurrency(venue.basePrice)}
                  </span>
                </div>
              </div>

              {selected && (
                <motion.span
                  layoutId="venue-check"
                  className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white text-gold-500 flex items-center justify-center shadow"
                >
                  <Check className="w-4 h-4" />
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

// ===========================================================================
// Step 3 – Date & Guest Count
// ===========================================================================

function StepDateGuests({ state, update }: StepProps) {
  const today = new Date().toISOString().split("T")[0];
  const guestCount = state.guestCount ?? 100;

  return (
    <section>
      <StepHeading
        number={3}
        title="When & How Many?"
        subtitle="Select your preferred date and estimated guest count"
      />

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Date */}
        <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
          <label className="font-accent text-xs tracking-widest uppercase text-gold-600 mb-3 block">
            Event Date
          </label>
          <div className="relative">
            <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-500 pointer-events-none" />
            <input
              type="date"
              min={today}
              value={state.date ?? ""}
              onChange={(e) => update({ date: e.target.value })}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-earth-200 text-earth-800 bg-ivory-50 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all text-sm"
            />
          </div>
          <p className="text-xs text-earth-400 mt-2">
            Subject to availability. Our events team will confirm.
          </p>
        </div>

        {/* Guest Count */}
        <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
          <label className="font-accent text-xs tracking-widest uppercase text-gold-600 mb-3 block">
            Estimated Guest Count
          </label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              min={10}
              max={1000}
              value={guestCount}
              onChange={(e) =>
                update({
                  guestCount: Math.max(
                    10,
                    Math.min(1000, parseInt(e.target.value) || 10)
                  ),
                })
              }
              className="w-28 text-center text-2xl font-heading font-semibold text-earth-800 border border-earth-200 rounded-xl py-2 bg-ivory-50 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all"
            />
            <span className="text-sm text-earth-500">guests</span>
          </div>
          <input
            type="range"
            min={10}
            max={1000}
            step={10}
            value={guestCount}
            onChange={(e) => update({ guestCount: parseInt(e.target.value) })}
            className="w-full mt-4 accent-gold-500 h-2 rounded-full appearance-none bg-earth-100 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-earth-400 mt-1">
            <span>10</span>
            <span>250</span>
            <span>500</span>
            <span>750</span>
            <span>1000</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===========================================================================
// Step 4 – Menu Selection
// ===========================================================================

function StepMenu({ state, update }: StepProps) {
  const menuTypes: { value: MenuType; label: string; desc: string }[] = [
    { value: "veg", label: "Vegetarian", desc: "Pure vegetarian spread" },
    {
      value: "non_veg",
      label: "Non-Vegetarian",
      desc: "Includes meat & seafood",
    },
    {
      value: "mixed",
      label: "Mixed",
      desc: "Best of both — veg & non-veg",
    },
  ];

  const tiers: { value: MenuTier; label: string; desc: string }[] = [
    { value: "standard", label: "Standard", desc: "A well-curated spread" },
    { value: "premium", label: "Premium", desc: "Elevated with live stations" },
    { value: "luxury", label: "Luxury", desc: "Grand feast, global cuisine" },
  ];

  const tierBadgeColors: Record<MenuTier, string> = {
    standard: "bg-earth-100 text-earth-600",
    premium: "bg-gold-100 text-gold-700",
    luxury: "bg-gradient-to-r from-gold-500 to-gold-600 text-white",
  };

  // Show matching packages
  const filteredPackages = menuPackages.filter((pkg) => {
    if (!state.menuType || !state.menuTier) return false;
    if (state.menuType === "mixed") return pkg.tier === state.menuTier;
    if (state.menuType === "non_veg") return pkg.type === "non_veg" && pkg.tier === state.menuTier;
    return pkg.type === "veg" && pkg.tier === state.menuTier;
  });

  return (
    <section>
      <StepHeading
        number={4}
        title="Curate Your Menu"
        subtitle="Select your menu preference and tier"
      />

      {/* Menu Type */}
      <div className="mt-8">
        <h3 className="font-accent text-xs tracking-widest uppercase text-gold-600 mb-4">
          Menu Type
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {menuTypes.map((mt) => {
            const selected = state.menuType === mt.value;
            return (
              <motion.button
                key={mt.value}
                whileTap={{ scale: 0.97 }}
                onClick={() => update({ menuType: mt.value })}
                className={cn(
                  "py-4 px-4 rounded-xl border-2 text-center transition-all duration-300",
                  selected
                    ? "border-gold-500 bg-gold-50 shadow-md shadow-gold-500/10"
                    : "border-earth-200 bg-white hover:border-gold-300"
                )}
              >
                <span className="font-heading text-sm font-semibold text-earth-800 block">
                  {mt.label}
                </span>
                <span className="text-xs text-earth-500 mt-0.5 block">
                  {mt.desc}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Menu Tier */}
      <div className="mt-8">
        <h3 className="font-accent text-xs tracking-widest uppercase text-gold-600 mb-4">
          Menu Tier
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {tiers.map((t) => {
            const selected = state.menuTier === t.value;
            return (
              <motion.button
                key={t.value}
                whileTap={{ scale: 0.97 }}
                onClick={() => update({ menuTier: t.value })}
                className={cn(
                  "relative py-4 px-4 rounded-xl border-2 text-center transition-all duration-300",
                  selected
                    ? "border-gold-500 bg-gold-50 shadow-md shadow-gold-500/10"
                    : "border-earth-200 bg-white hover:border-gold-300"
                )}
              >
                <span
                  className={cn(
                    "inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2",
                    tierBadgeColors[t.value]
                  )}
                >
                  {t.label}
                </span>
                <span className="text-xs text-earth-500 block">{t.desc}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Package Details Preview */}
      {filteredPackages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 space-y-4"
        >
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h4 className="font-heading text-base font-semibold text-earth-800">
                    {pkg.name}
                  </h4>
                  <p className="text-xs text-earth-500 mt-0.5">
                    {pkg.description}
                  </p>
                </div>
                <span className="shrink-0 font-heading text-lg font-bold text-gold-600">
                  {formatCurrency(pkg.pricePerPlate)}
                  <span className="text-xs text-earth-400 font-normal">
                    {" "}
                    / plate
                  </span>
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {pkg.items.map((section) => (
                  <div key={section.category}>
                    <h5 className="font-accent text-[10px] uppercase tracking-widest text-gold-600 mb-1">
                      {section.category}
                    </h5>
                    <p className="text-xs text-earth-600 leading-relaxed">
                      {section.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}

// ===========================================================================
// Step 5 – Enhancements
// ===========================================================================

function StepEnhancements({ state, update }: StepProps) {
  const selectedIds = state.enhancements.map((e) => e.id);

  const toggle = (enhancement: Enhancement) => {
    if (selectedIds.includes(enhancement.id)) {
      update({
        enhancements: state.enhancements.filter(
          (e) => e.id !== enhancement.id
        ),
      });
    } else {
      update({ enhancements: [...state.enhancements, enhancement] });
    }
  };

  const categories = Array.from(
    new Set(enhancementsData.map((e) => e.category))
  );
  const categoryLabels: Record<string, string> = {
    decor: "Décor & Ambience",
    entertainment: "Entertainment",
    food: "Food & Beverage",
    activity: "Activities",
    service: "Services",
  };

  return (
    <section>
      <StepHeading
        number={5}
        title="Add Special Touches"
        subtitle="Enhance your event with optional add-ons (all are optional)"
      />

      <div className="mt-8 space-y-8">
        {categories.map((cat) => {
          const items = enhancementsData.filter((e) => e.category === cat);
          const CatIcon = ENHANCEMENT_ICON_MAP[cat] ?? Sparkles;
          return (
            <div key={cat}>
              <h3 className="flex items-center gap-2 font-accent text-xs tracking-widest uppercase text-gold-600 mb-4">
                <CatIcon className="w-4 h-4" />
                {categoryLabels[cat] ?? cat}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((enh) => {
                  const isSelected = selectedIds.includes(enh.id);
                  return (
                    <motion.button
                      key={enh.id}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggle(enh)}
                      className={cn(
                        "relative text-left p-5 rounded-xl border-2 transition-all duration-300",
                        isSelected
                          ? "border-gold-500 bg-gold-50/60 shadow-md shadow-gold-500/10"
                          : "border-earth-200 bg-white hover:border-gold-300 hover:shadow-sm"
                      )}
                    >
                      <h4 className="font-heading text-sm font-semibold text-earth-800">
                        {enh.name}
                      </h4>
                      <p className="text-xs text-earth-500 mt-1 leading-relaxed">
                        {enh.description}
                      </p>
                      <p className="text-xs font-semibold text-gold-600 mt-2">
                        {formatCurrency(enh.priceRange.min)} –{" "}
                        {formatCurrency(enh.priceRange.max)}
                      </p>

                      <span
                        className={cn(
                          "absolute top-3 right-3 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all",
                          isSelected
                            ? "bg-gold-500 border-gold-500 text-white"
                            : "border-earth-300 bg-white"
                        )}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ===========================================================================
// Step 6 – Budget Estimate
// ===========================================================================

function StepEstimate({ state }: { state: PartyPlannerState }) {
  const budget = state.estimatedBudget;
  if (!budget) return null;

  const venue = venues.find((v) => v.id === state.venue);
  const eventLabel =
    eventTypes.find((e) => e.id === state.eventType)?.label ?? "Event";

  const rows: { label: string; min: number; max: number }[] = [
    { label: `Venue – ${venue?.name ?? "Selected Venue"}`, ...budget.venueCost },
    {
      label: `Menu – ${state.guestCount ?? 100} guests × ${state.menuTier ?? "standard"} ${state.menuType ?? "veg"}`,
      ...budget.menuCost,
    },
    ...(state.enhancements.length > 0
      ? [
          {
            label: `Enhancements (${state.enhancements.length} selected)`,
            ...budget.enhancementsCost,
          },
        ]
      : []),
  ];

  return (
    <section>
      <StepHeading
        number={6}
        title="Your Budget Estimate"
        subtitle={`${eventLabel} · ${state.guestCount ?? 100} guests`}
      />

      <div className="mt-8 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-earth-200 shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-earth-800 to-forest-900 px-6 py-5">
            <h3 className="font-heading text-lg text-white font-medium">
              Tentative Cost Breakdown
            </h3>
            <p className="text-xs text-white/50 mt-0.5">
              All figures are approximate estimates
            </p>
          </div>

          <div className="p-6 space-y-4">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between py-2 border-b border-earth-100 last:border-b-0"
              >
                <span className="text-sm text-earth-600">{row.label}</span>
                <span className="text-sm font-semibold text-earth-800 text-right">
                  {formatCurrency(row.min)}
                  {row.min !== row.max && ` – ${formatCurrency(row.max)}`}
                </span>
              </div>
            ))}

            {/* Subtotal */}
            <div className="flex items-center justify-between pt-3 border-t-2 border-earth-200">
              <span className="text-sm font-medium text-earth-700">
                Subtotal
              </span>
              <span className="text-sm font-bold text-earth-800">
                {formatCurrency(budget.subtotal.min)}
                {budget.subtotal.min !== budget.subtotal.max &&
                  ` – ${formatCurrency(budget.subtotal.max)}`}
              </span>
            </div>

            {/* Tax */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-earth-500">
                Tax Estimate (18% GST)
              </span>
              <span className="text-sm text-earth-600">
                {formatCurrency(budget.taxEstimate.min)}
                {budget.taxEstimate.min !== budget.taxEstimate.max &&
                  ` – ${formatCurrency(budget.taxEstimate.max)}`}
              </span>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pt-4 border-t-2 border-gold-200">
              <span className="font-heading text-lg font-semibold text-earth-800">
                Estimated Total
              </span>
              <span className="font-heading text-xl font-bold text-gold-600">
                {formatCurrency(budget.total.min)}
                {budget.total.min !== budget.total.max &&
                  ` – ${formatCurrency(budget.total.max)}`}
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 mt-6 p-4 rounded-xl bg-gold-50 border border-gold-200">
          <Info className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-earth-700">
              This is a tentative estimate
            </p>
            <p className="text-xs text-earth-500 mt-1 leading-relaxed">
              Final pricing will be confirmed by our events team after
              discussing your specific requirements, customisations, and
              seasonal availability. Actual costs may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===========================================================================
// Step 7 – Contact / Lead Capture
// ===========================================================================

interface StepContactProps extends StepProps {
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
}

function StepContact({
  state,
  update,
  submitted,
  setSubmitted,
}: StepContactProps) {
  const [form, setForm] = useState<EventContactInfo>({
    name: state.contactInfo?.name ?? "",
    phone: state.contactInfo?.phone ?? "",
    email: state.contactInfo?.email ?? "",
    notes: state.notes ?? "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10)
      errs.phone = "Valid phone number is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Valid email is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    update({ contactInfo: form, notes: form.notes ?? "" });
    setSubmitted(true);
    // Clear saved state on submission
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  if (submitted) {
    return (
      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center py-12"
        >
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-forest-100 text-forest-600 mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-earth-800">
            We Have Your Details!
          </h2>
          <p className="text-earth-500 mt-3 leading-relaxed">
            Thank you, {form.name}. Our events team will reach out within 24
            hours to discuss your{" "}
            {eventTypes.find((e) => e.id === state.eventType)?.label?.toLowerCase() ??
              "event"}{" "}
            and finalise the details.
          </p>
          <div className="mt-8 inline-flex gap-3">
            <Button
              variant="outline"
              size="md"
              onClick={() => window.location.reload()}
            >
              Plan Another Event
            </Button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section>
      <StepHeading
        number={7}
        title="Almost There!"
        subtitle="Share your details and our events team will get in touch"
      />

      <div className="max-w-xl mx-auto mt-8">
        <div className="bg-white rounded-2xl border border-earth-200 p-6 md:p-8 shadow-sm space-y-5">
          {/* Name */}
          <div>
            <label className="font-accent text-xs tracking-widest uppercase text-gold-600 mb-1.5 block">
              Full Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
              className={cn(
                "w-full px-4 py-3 rounded-xl border text-sm text-earth-800 bg-ivory-50 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all",
                errors.name ? "border-red-400" : "border-earth-200"
              )}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="font-accent text-xs tracking-widest uppercase text-gold-600 mb-1.5 block">
              Phone Number
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className={cn(
                "w-full px-4 py-3 rounded-xl border text-sm text-earth-800 bg-ivory-50 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all",
                errors.phone ? "border-red-400" : "border-earth-200"
              )}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="font-accent text-xs tracking-widest uppercase text-gold-600 mb-1.5 block">
              Email Address
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className={cn(
                "w-full px-4 py-3 rounded-xl border text-sm text-earth-800 bg-ivory-50 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all",
                errors.email ? "border-red-400" : "border-earth-200"
              )}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Event date display */}
          {state.date && (
            <div>
              <label className="font-accent text-xs tracking-widest uppercase text-gold-600 mb-1.5 block">
                Event Date
              </label>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-earth-200 bg-earth-50 text-sm text-earth-700">
                <CalendarDays className="w-4 h-4 text-gold-500" />
                {new Date(state.date).toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </div>
          )}

          {/* Notes */}
          <div>
            <label className="font-accent text-xs tracking-widest uppercase text-gold-600 mb-1.5 block">
              Additional Notes{" "}
              <span className="text-earth-400 normal-case tracking-normal">
                (optional)
              </span>
            </label>
            <textarea
              value={form.notes ?? ""}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              rows={3}
              placeholder="Any special requirements, themes, or details..."
              className="w-full px-4 py-3 rounded-xl border border-earth-200 text-sm text-earth-800 bg-ivory-50 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all resize-none"
            />
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full mt-2"
            onClick={handleSubmit}
          >
            <Send className="w-4 h-4" />
            Submit Enquiry
          </Button>
        </div>
      </div>
    </section>
  );
}

// ===========================================================================
// Shared UI
// ===========================================================================

function StepHeading({
  number,
  title,
  subtitle,
}: {
  number: number;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center mb-2">
      <span className="inline-block font-accent text-xs tracking-[0.25em] uppercase text-gold-500 mb-2">
        Step {number} of 7
      </span>
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-earth-800">
        {title}
      </h2>
      <p className="text-sm text-earth-500 mt-2 max-w-md mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
