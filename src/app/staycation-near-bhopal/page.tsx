import { Metadata } from "next";
import { SEOLandingPage } from "@/components/shared/seo-landing-page";

export const metadata: Metadata = {
  title: "Staycation Near Bhopal | Giovanni Village Resort",
  description: "Plan a relaxing staycation near Bhopal at Giovanni Village Resort. Weekend getaways, romantic retreats, and family escapes surrounded by forest — just 30 minutes from the city.",
  alternates: { canonical: "/staycation-near-bhopal" },
};

export default function Page() {
  return (
    <SEOLandingPage
      label="Staycation"
      title="The Perfect Staycation Destination Near Bhopal"
      subtitle="Escape the everyday without the long drive. Giovanni Village Resort offers a forest-wrapped retreat just 30 minutes from Bhopal — ideal for weekend getaways, romantic breaks, and family staycations."
      introHeading="A Resort Staycation That Feels Like a Real Holiday"
      introText="Sometimes the best vacations are the ones closest to home. Giovanni Village Resort, nestled beside Kerwa Dam on the forested outskirts of Bhopal, is designed for exactly that — a complete change of scene without the hassle of long travel. Whether you are looking for a romantic weekend for two, a relaxing break with family, or simply a night away from your routine, Giovanni delivers the full holiday experience: comfortable rooms, great food, a pool, spa treatments, nature trails, and the quiet of the forest."
      features={[
        "Weekend and midweek staycation packages",
        "Romantic getaway options for couples",
        "Family-friendly cottages and kids' activities",
        "Spa and wellness treatments on-site",
        "Swimming pool with sun loungers",
        "Forest trails, cycling, and outdoor activities",
        "Three restaurants with diverse cuisines",
        "Just 30 minutes from Bhopal city centre",
      ]}
      whyGiovanniHeading="Why Giovanni Is Bhopal's Best Staycation Spot"
      whyGiovanniPoints={[
        { title: "Close Yet Completely Different", text: "At just 15 km from the city centre, Giovanni feels worlds apart — surrounded by forest, birdsong, and the calm of Kerwa Dam. No long drives, no flight bookings, just instant escape." },
        { title: "Designed for Relaxation", text: "From plush bedding and quiet rooms to spa treatments and a serene pool, every detail is crafted to help you unwind and recharge over a weekend." },
        { title: "Something for Everyone", text: "Couples can enjoy candlelit dinners and spa packages. Families get cottages, a kids' zone, and cycling trails. Solo travellers find space to read, walk, and reset." },
        { title: "Food Worth Travelling For", text: "Four dining experiences — Gourmet By The Woods for fine dining, Pihu for rooftop dining under the stars, Berry & Beans for all-day cafe, and The Den for cocktails — mean you never need to leave the resort." },
        { title: "Flexible Packages", text: "Choose from one-night, two-night, or extended staycation packages with meals, spa credits, and activities bundled for great value." },
        { title: "Stress-Free Planning", text: "Book online, drive in, and let us handle everything — from check-in to curated experiences. Your staycation starts the moment you arrive." },
      ]}
      ctaPrimary={{ label: "Book Your Staycation", href: "/book" }}
      ctaSecondary={{ label: "View Rooms & Suites", href: "/stay" }}
      faq={[
        { q: "How far is Giovanni Village Resort from Bhopal?", a: "Giovanni Village Resort is located at 410, Village Kalapani, Kolar Road, Bhopal. Easily accessible from Bhopal city centre." },
        { q: "Are there staycation packages available?", a: "Yes, we offer curated staycation packages that include accommodation, meals, spa credits, and activities. Packages are available for couples, families, and individuals." },
        { q: "Is a one-night staycation worth it?", a: "Absolutely. Even a single night at Giovanni provides a complete change of environment — enjoy the pool, a spa session, forest trails, and two meals without the exhaustion of long-distance travel." },
        { q: "What activities are available during a staycation?", a: "Swimming, guided nature walks, cycling, bird watching, spa treatments, outdoor dining, and a kids' activity zone. Seasonal bonfires and stargazing are also arranged." },
      ]}
      relatedLinks={[
        { label: "Rooms & Suites", href: "/stay" },
        { label: "Spa & Wellness", href: "/experiences" },
        { label: "Dining", href: "/dining" },
        { label: "Luxury Resort in Bhopal", href: "/luxury-resort-bhopal" },
        { label: "Family Outing Resort", href: "/family-outing-resort-bhopal" },
        { label: "Jungle Resort Near Bhopal", href: "/jungle-resort-near-bhopal" },
      ]}
    />
  );
}
