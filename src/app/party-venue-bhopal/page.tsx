import { Metadata } from "next";
import { SEOLandingPage } from "@/components/shared/seo-landing-page";

export const metadata: Metadata = {
  title: "Party Venue in Bhopal | Giovanni Village Resort",
  description: "Host birthdays, anniversaries, and celebrations at Giovanni Village Resort near Bhopal. Indoor and outdoor party venues with catering for 20 to 1,000 guests.",
  alternates: { canonical: "/party-venue-bhopal" },
};

export default function Page() {
  return (
    <SEOLandingPage
      label="Party Venue"
      title="The Ideal Party Venue Near Bhopal"
      subtitle="From intimate birthdays to grand celebrations, Giovanni Village Resort offers versatile party venues with catering, décor, and entertainment options."
      introHeading="Celebrate Every Milestone in Style"
      introText="Giovanni Village Resort is one of the most versatile party venues near Bhopal, offering indoor and outdoor spaces for events from 20 to 1,000 guests. Whether it's a birthday bash by the pool, an anniversary dinner under the stars, or a grand family celebration on the lawn, our venues and team ensure a memorable experience."
      features={["Venues for 20 to 1,000 guests", "Indoor and outdoor options", "Poolside deck for casual parties", "Full catering services", "DJ and entertainment setup", "Photography-friendly settings", "Kids' activity zone available", "Online party planner tool"]}
      whyGiovanniHeading="Why Giovanni Is Bhopal's Favourite Party Destination"
      whyGiovanniPoints={[
        { title: "Versatile Spaces", text: "Five distinct venues — from an intimate poolside lawn to a grand banquet hall with lawn — to match any celebration style and size." },
        { title: "All-Inclusive Options", text: "Venue, catering, décor, music, and coordination — all arranged in one place for a hassle-free celebration." },
        { title: "Easy Planning", text: "Our online Party Planner tool lets you select your preferences and get a tentative budget estimate in minutes." },
        { title: "Beautiful Setting", text: "A resort surrounded by nature provides a stunning backdrop that elevates any party beyond the ordinary." },
        { title: "Family-Friendly", text: "Kids' activities, swimming pool, and safe resort grounds make it ideal for family celebrations." },
        { title: "Great Location", text: "Just 30 minutes from Bhopal city centre with ample parking and easy access." },
      ]}
      ctaPrimary={{ label: "Plan Your Party", href: "/party-planner" }}
      ctaSecondary={{ label: "Explore Venues", href: "/weddings-events/venues" }}
      faq={[
        { q: "What types of parties can be hosted at Giovanni?", a: "Birthdays, anniversaries, engagements, family gatherings, cocktail parties, pre-wedding functions, corporate mixers, and custom celebrations." },
        { q: "What is the smallest venue available?", a: "The Poolside Lawn accommodates intimate gatherings of 20+ guests. The Cocktail Lawn is ideal for 30–200 guests." },
        { q: "Can I plan my party online?", a: "Yes, our Party Planner tool lets you select event type, venue, guest count, menu, and enhancements to get a tentative budget estimate." },
        { q: "Is DJ and music available?", a: "Yes, we arrange professional DJ and sound system setup. Live bands and singers can also be organised." },
      ]}
      relatedLinks={[
        { label: "Party Planner", href: "/party-planner" },
        { label: "Social Celebrations", href: "/weddings-events/social-celebrations" },
        { label: "Wedding Venue", href: "/wedding-venue-bhopal" },
        { label: "Celebration Venue", href: "/celebration-venue-bhopal" },
        { label: "Banquet Venue", href: "/banquet-venue-bhopal" },
      ]}
    />
  );
}
