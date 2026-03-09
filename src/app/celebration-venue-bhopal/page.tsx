import { Metadata } from "next";
import { SEOLandingPage } from "@/components/shared/seo-landing-page";

export const metadata: Metadata = {
  title: "Celebration Venue in Bhopal | Giovanni Village Resort",
  description: "Celebrate anniversaries, birthdays, engagements, and milestones at Giovanni Village Resort near Bhopal. Indoor and outdoor venues with catering, décor, and resort stay options.",
  alternates: { canonical: "/celebration-venue-bhopal" },
};

export default function Page() {
  return (
    <SEOLandingPage
      label="Celebration Venue"
      title="The Perfect Celebration Venue Near Bhopal"
      subtitle="Anniversaries, birthdays, engagements, and every milestone in between — Giovanni Village Resort provides beautiful venues, exceptional food, and a setting that makes celebrations truly special."
      introHeading="Make Every Celebration Worth Remembering"
      introText="Life's milestones deserve more than a restaurant booking. Giovanni Village Resort offers dedicated celebration spaces — from intimate forest terraces for a 25th anniversary dinner to grand lawns for a 50th birthday — all set within a resort surrounded by nature near Bhopal. With in-house catering, décor coordination, entertainment options, and on-site accommodation for your guests, Giovanni transforms personal celebrations into experiences that everyone talks about long after the evening ends."
      features={[
        "Venues for 20 to 500 guests",
        "Indoor banquet and outdoor lawn options",
        "Customisable catering and bar packages",
        "Décor and floral arrangement services",
        "Live music, DJ, and entertainment setup",
        "Photography-ready natural backdrops",
        "Guest accommodation on-site",
        "Dedicated celebration coordinator",
      ]}
      whyGiovanniHeading="Why Giovanni Is Bhopal's Celebration Destination"
      whyGiovanniPoints={[
        { title: "A Setting That Elevates the Occasion", text: "Forest surroundings, fairy-lit lawns, a scenic dam nearby — Giovanni provides a backdrop that city venues simply cannot replicate. Your celebration photos will speak for themselves." },
        { title: "Tailored to Your Vision", text: "Whether it is a surprise 30th birthday, a golden anniversary, or an engagement party with a specific theme, our events team works with you to bring your vision to life." },
        { title: "Exceptional Food & Drink", text: "Our chefs create bespoke menus for celebrations — from elegant plated dinners to festive buffets with live counters. Bar packages range from mocktails to premium spirits." },
        { title: "All Guests Under One Roof", text: "With rooms, suites, and cottages on the property, your guests can celebrate freely and retire comfortably — no taxis, no long drives home." },
        { title: "Stress-Free Planning", text: "A dedicated coordinator handles venue setup, catering timelines, décor vendors, entertainment logistics, and day-of execution so you can enjoy your own celebration." },
        { title: "Celebrations of Every Size", text: "An intimate anniversary dinner for 20 on the terrace or a grand birthday bash for 500 on the lawn — Giovanni has the right space and the experience to deliver both flawlessly." },
      ]}
      ctaPrimary={{ label: "Plan Your Celebration", href: "/party-planner" }}
      ctaSecondary={{ label: "View Venues", href: "/weddings-events/venues" }}
      faq={[
        { q: "What types of celebrations can be hosted at Giovanni?", a: "Birthdays, anniversaries, engagement parties, baby showers, retirement celebrations, reunion dinners, festive gatherings, and any personal milestone you wish to mark." },
        { q: "Can you arrange a surprise celebration?", a: "Yes, our events team has experience organising surprise celebrations. We coordinate discreetly with the planning party to manage setup, guest arrivals, and the reveal." },
        { q: "What is the minimum guest count for booking a venue?", a: "Our smallest venue, the Poolside Deck, accommodates gatherings from 20 guests. For larger celebrations, the banquet hall and lawns can host up to 500 guests." },
        { q: "Do you offer all-inclusive celebration packages?", a: "Yes, we offer packages that bundle venue, catering, basic décor, and accommodation at special rates. These can be customised based on your celebration type and preferences." },
      ]}
      relatedLinks={[
        { label: "Social Celebrations", href: "/weddings-events/social-celebrations" },
        { label: "Party Planner", href: "/party-planner" },
        { label: "Wedding Venue", href: "/wedding-venue-bhopal" },
        { label: "Banquet Venue", href: "/banquet-venue-bhopal" },
        { label: "Party Venue", href: "/party-venue-bhopal" },
      ]}
    />
  );
}
