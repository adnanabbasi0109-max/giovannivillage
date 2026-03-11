import { Metadata } from "next";
import { SEOLandingPage } from "@/components/shared/seo-landing-page";

export const metadata: Metadata = {
  title: "Luxury Resort in Bhopal | Giovanni Village Resort",
  description: "Giovanni Village Resort is a luxury jungle resort near Bhopal offering premium stays, spa, dining, and nature experiences. Book your peaceful retreat in Madhya Pradesh.",
  alternates: { canonical: "/luxury-resort-bhopal" },
};

export default function LuxuryResortBhopalPage() {
  return (
    <SEOLandingPage
      label="Luxury Resort"
      title="The Finest Luxury Resort Experience Near Bhopal"
      subtitle="Giovanni Village Resort offers a rare blend of forest serenity, refined hospitality, and modern luxury — just 30 minutes from Bhopal city centre."
      introHeading="A Luxury Resort That Feels Like a Private Forest Estate"
      introText="Located on Kolar Road on the outskirts of Bhopal, Giovanni Village Resort is a premium nature-luxury destination designed for travellers who seek more than just a hotel room. With thoughtfully designed rooms and suites, four distinctive dining experiences, a rejuvenating spa, and sprawling grounds surrounded by forest, Giovanni offers a complete luxury resort experience in Madhya Pradesh."
      features={[
        "King Rooms, Junior Suites, Royal and Presidential Suites, and Sunrise Cottage",
        "Forest-surrounded setting near Ratapani Wildlife Sanctuary",
        "Spa & wellness treatments",
        "Four restaurants including fine dining and rooftop",
        "Swimming pool and nature trails",
        "30 minutes from Bhopal city centre",
        "45 minutes from Raja Bhoj Airport",
        "Event venues for weddings and celebrations",
      ]}
      whyGiovanniHeading="Why Giovanni Is Bhopal's Premier Luxury Resort"
      whyGiovanniPoints={[
        { title: "Nature-Immersed Setting", text: "Unlike city hotels, Giovanni is surrounded by lush forest and is located near the scenic Kerwa Dam, offering a genuine retreat from urban life." },
        { title: "Refined Rooms & Suites", text: "From King Rooms with pool views to the Presidential Suite with private plunge pool and 8,000 sq ft lawn, each accommodation is designed for comfort, privacy, and luxury." },
        { title: "Culinary Excellence", text: "Four dining experiences — Gourmet By The Woods for fine dining, Pihu for rooftop dining under the stars, Berry & Beans for all-day cafe, and The Den for a bistro bar experience." },
        { title: "Rejuvenation & Wellness", text: "Our spa offers Ayurvedic and contemporary treatments in a serene forest setting. Guided nature trails and a sparkling pool complete the wellness experience." },
        { title: "Celebration Destination", text: "World-class venues for weddings, events, and corporate retreats make Giovanni a destination for life's most important moments." },
        { title: "Effortless Access", text: "Just a 30-minute drive from Bhopal city and 45 minutes from the airport — close enough for convenience, far enough for escape." },
      ]}
      ctaPrimary={{ label: "Book Your Stay", href: "/book" }}
      ctaSecondary={{ label: "Explore Rooms", href: "/stay" }}
      faq={[
        { q: "Where is Giovanni Village Resort located?", a: "Giovanni Village Resort is located at 410, Village Kalapani, Kolar Road, Bhopal, Madhya Pradesh 462042." },
        { q: "What makes Giovanni a luxury resort?", a: "Premium room categories, spa and wellness facilities, three curated dining experiences, forest-surrounded grounds, a swimming pool, event venues, and attentive service define the luxury experience at Giovanni." },
        { q: "Is Giovanni suitable for families?", a: "Yes. We offer the Sunrise Cottage, spacious King Rooms, a kids' activity zone, a swimming pool with a children's area, cycling, nature trails, and family-friendly dining." },
        { q: "What are the check-in and check-out times?", a: "Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available subject to availability." },
      ]}
      relatedLinks={[
        { label: "Rooms & Suites", href: "/stay" },
        { label: "Dining", href: "/dining" },
        { label: "Spa & Wellness", href: "/experiences" },
        { label: "Wedding Venue in Bhopal", href: "/wedding-venue-bhopal" },
        { label: "Staycation Near Bhopal", href: "/staycation-near-bhopal" },
        { label: "Corporate Offsite", href: "/corporate-offsite-venue-bhopal" },
      ]}
    />
  );
}
