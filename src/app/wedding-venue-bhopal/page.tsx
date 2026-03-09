import { Metadata } from "next";
import { SEOLandingPage } from "@/components/shared/seo-landing-page";

export const metadata: Metadata = {
  title: "Wedding Venue in Bhopal | Giovanni Village Resort",
  description: "Host your dream wedding at Giovanni Village Resort near Bhopal. Grand lawns, banquet halls, catering, and a dedicated team for up to 1,000 guests.",
  alternates: { canonical: "/wedding-venue-bhopal" },
};

export default function WeddingVenueBhopalPage() {
  return (
    <SEOLandingPage
      label="Wedding Venue"
      title="The Premier Wedding Venue Near Bhopal"
      subtitle="Giovanni Village Resort offers stunning indoor and outdoor venues for weddings of every scale — from intimate ceremonies to grand celebrations with up to 1,000 guests."
      introHeading="Your Dream Wedding Deserves a Breathtaking Setting"
      introText="Surrounded by forest and adorned with natural beauty, Giovanni Village Resort is one of the most sought-after wedding destinations near Bhopal. Our Grand Lawn, Banquet Hall, Forest Terrace, and Poolside Deck offer versatile options for every wedding function — from mehndi and sangeet to the main ceremony and reception. With in-house catering, décor coordination, and a dedicated events team, we bring your vision to life."
      features={["Up to 1,000 guest capacity (Grand Lawn)", "Climate-controlled indoor banquet", "Outdoor forest terrace for intimate ceremonies", "In-house catering with customisable menus", "Bridal suite and prep rooms", "Dedicated wedding coordinator", "Accommodation for guests on-site", "Photography-friendly venues and grounds"]}
      whyGiovanniHeading="Why Couples Choose Giovanni for Their Wedding"
      whyGiovanniPoints={[
        { title: "Stunning Natural Backdrop", text: "Our venues are set among mature trees and manicured gardens, creating a naturally beautiful setting that requires less artificial décor." },
        { title: "Multiple Venue Options", text: "From the grand outdoor lawn to the elegant indoor banquet hall, choose the perfect setting for each wedding function." },
        { title: "Complete Hospitality", text: "Guest accommodation, dining, spa, and recreation — all on-site, so your wedding guests enjoy a full resort experience." },
        { title: "Customised Menus", text: "Our culinary team creates bespoke menus across Indian, continental, and fusion cuisine for every tier and dietary preference." },
        { title: "Dedicated Team", text: "A personal wedding coordinator ensures every detail is managed — from vendor coordination to timeline execution." },
        { title: "Accessible Location", text: "Near Bhopal city with ample parking, easy access for local and outstation guests, and proximity to the airport." },
      ]}
      ctaPrimary={{ label: "Plan Your Wedding", href: "/weddings-events/weddings" }}
      ctaSecondary={{ label: "Explore Venues", href: "/weddings-events/venues" }}
      faq={[
        { q: "What is the maximum capacity for a wedding at Giovanni?", a: "Our Grand Lawn accommodates up to 1,000 guests (600 seated). The Banquet Hall seats 300 for indoor celebrations." },
        { q: "Do you provide catering for weddings?", a: "Yes, we offer full in-house catering with vegetarian, non-vegetarian, and mixed menus across standard, premium, and luxury tiers." },
        { q: "Can wedding guests stay at the resort?", a: "Absolutely. We offer rooms, suites, and cottages for wedding guests with special group rates available." },
        { q: "Is a wedding coordinator provided?", a: "Yes, every wedding at Giovanni includes a dedicated event coordinator who manages all logistics and vendor coordination." },
      ]}
      relatedLinks={[
        { label: "Wedding Venues", href: "/weddings-events/venues" },
        { label: "Social Celebrations", href: "/weddings-events/social-celebrations" },
        { label: "Party Planner", href: "/party-planner" },
        { label: "Luxury Resort in Bhopal", href: "/luxury-resort-bhopal" },
        { label: "Banquet Venue", href: "/banquet-venue-bhopal" },
      ]}
    />
  );
}
