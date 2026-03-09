import { Metadata } from "next";
import { SEOLandingPage } from "@/components/shared/seo-landing-page";

export const metadata: Metadata = {
  title: "Banquet Venue in Bhopal | Giovanni Village Resort",
  description: "Book a premium banquet hall near Bhopal at Giovanni Village Resort. Air-conditioned indoor venue for weddings, receptions, conferences, and social events — up to 300 guests.",
  alternates: { canonical: "/banquet-venue-bhopal" },
};

export default function Page() {
  return (
    <SEOLandingPage
      label="Banquet Venue"
      title="Premium Banquet Hall & Event Venue Near Bhopal"
      subtitle="Giovanni Village Resort offers elegant, air-conditioned banquet facilities for weddings, receptions, corporate events, and private celebrations — with full catering and event support."
      introHeading="An Indoor Venue That Does Not Compromise on Ambience"
      introText="Finding a banquet venue near Bhopal that combines professional service, beautiful interiors, and a memorable setting can be challenging. Giovanni Village Resort solves that with a fully air-conditioned banquet hall designed for events ranging from intimate gatherings of 50 to grand celebrations of 300 guests. The hall features modern lighting, a pre-function area, premium AV equipment, and direct access to our catering kitchen — all set within a resort surrounded by forest, giving your event a backdrop no city banquet hall can match."
      features={[
        "Air-conditioned banquet hall for up to 300 guests",
        "Modern sound, lighting, and AV systems",
        "Pre-function foyer for welcome drinks",
        "In-house catering with customisable menus",
        "Flexible seating arrangements and stage setup",
        "Bridal and VIP changing rooms",
        "Ample parking for guests",
        "Overnight stay options for hosts and guests",
      ]}
      whyGiovanniHeading="Why Giovanni's Banquet Hall Stands Out"
      whyGiovanniPoints={[
        { title: "Climate-Controlled Comfort", text: "Fully air-conditioned interiors ensure your guests are comfortable regardless of the season — no weather worries for your important event." },
        { title: "Resort Setting, Banquet Facilities", text: "Your guests arrive to a forest-lined driveway, not a city parking lot. The resort ambience begins before they even enter the hall." },
        { title: "Professional Catering", text: "Our in-house chefs prepare multi-cuisine menus tailored to your event — from sit-down dinners to elaborate buffet spreads with live counters." },
        { title: "Flexible Configurations", text: "Theatre, classroom, U-shape, banquet round, or cocktail — the hall adapts to your event format, whether it is a wedding reception, conference, or awards night." },
        { title: "Complete Event Support", text: "Dedicated event managers coordinate décor, AV, catering, and logistics. You focus on your guests while we handle the operations." },
        { title: "Stay-Over Convenience", text: "Unlike standalone banquet halls, Giovanni offers on-site accommodation. Hosts and out-of-town guests can stay over, making multi-day events seamless." },
      ]}
      ctaPrimary={{ label: "Enquire About the Banquet Hall", href: "/weddings-events/venues" }}
      ctaSecondary={{ label: "View All Venues", href: "/weddings-events/venues" }}
      faq={[
        { q: "What is the capacity of the banquet hall?", a: "The banquet hall accommodates up to 300 guests in a banquet-style arrangement. For theatre-style seating, the capacity increases. Smaller configurations for 50 to 150 guests are also available." },
        { q: "Is the banquet hall air-conditioned?", a: "Yes, the hall is fully air-conditioned with modern climate control systems to ensure guest comfort in all seasons." },
        { q: "Can we bring our own decorator?", a: "Yes, you are welcome to bring your own decorator. We also have empanelled décor partners who are familiar with the venue and can work within various budgets." },
        { q: "Is there accommodation for guests attending the event?", a: "Yes, Giovanni offers rooms, suites, and cottages on the same property. Special group rates are available for event-related room blocks." },
      ]}
      relatedLinks={[
        { label: "Event Venues", href: "/weddings-events/venues" },
        { label: "Wedding Venue in Bhopal", href: "/wedding-venue-bhopal" },
        { label: "Party Venue", href: "/party-venue-bhopal" },
        { label: "Celebration Venue", href: "/celebration-venue-bhopal" },
        { label: "Corporate Offsite Venue", href: "/corporate-offsite-venue-bhopal" },
      ]}
    />
  );
}
