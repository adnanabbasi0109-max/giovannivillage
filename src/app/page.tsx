"use client";

import { HeroSection } from "@/components/home/hero";
import { QuickFactsSection } from "@/components/home/quick-facts";
import { StaySection } from "@/components/home/stay-section";
import { EventsSection } from "@/components/home/events-section";
import { PartyPlannerTeaser } from "@/components/home/party-planner-teaser";
import { DiningSection } from "@/components/home/dining-section";
import { ExperiencesSection } from "@/components/home/experiences-section";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FAQPreview } from "@/components/home/faq-preview";
import { ContactPreview } from "@/components/home/contact-preview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickFactsSection />
      <StaySection />
      <EventsSection />
      <PartyPlannerTeaser />
      <DiningSection />
      <ExperiencesSection />
      <GalleryPreview />
      <TestimonialsSection />
      <FAQPreview />
      <ContactPreview />
    </>
  );
}
