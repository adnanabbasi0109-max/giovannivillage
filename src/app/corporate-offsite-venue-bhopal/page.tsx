import { Metadata } from "next";
import { SEOLandingPage } from "@/components/shared/seo-landing-page";

export const metadata: Metadata = {
  title: "Corporate Offsite Venue in Bhopal | Giovanni Village Resort",
  description: "Host your corporate offsite, team retreat, or conference at Giovanni Village Resort near Bhopal. Modern AV facilities, breakout spaces, team activities, and comfortable stays.",
  alternates: { canonical: "/corporate-offsite-venue-bhopal" },
};

export default function Page() {
  return (
    <SEOLandingPage
      label="Corporate Offsite"
      title="Bhopal's Premier Corporate Offsite & Retreat Venue"
      subtitle="Productive meetings deserve inspiring settings. Giovanni Village Resort combines modern conference facilities with forest tranquillity — ideal for offsites, team retreats, and leadership summits."
      introHeading="Where Work Meets the Outdoors"
      introText="A corporate offsite should energise your team, spark fresh thinking, and build stronger connections. Giovanni Village Resort, set amidst forest on the outskirts of Bhopal, offers the rare combination of professional event infrastructure and a natural, distraction-free environment. With dedicated conference spaces, reliable AV equipment, high-speed internet, multiple breakout areas, and a full range of team-building activities, Giovanni is where Bhopal's best corporate events happen."
      features={[
        "Conference halls for 20 to 300 attendees",
        "High-speed Wi-Fi and modern AV systems",
        "Indoor and outdoor breakout spaces",
        "Team-building activities and adventure zones",
        "Comfortable rooms for overnight stays",
        "Curated corporate meal packages",
        "Dedicated event coordinator",
        "45 minutes from Raja Bhoj Airport",
      ]}
      whyGiovanniHeading="Why Companies Choose Giovanni for Offsites"
      whyGiovanniPoints={[
        { title: "Distraction-Free Environment", text: "Away from the noise of the city but close enough for convenience, the forest setting helps teams focus, think creatively, and connect without the usual office interruptions." },
        { title: "Professional Infrastructure", text: "Our conference halls come equipped with projectors, screens, sound systems, whiteboards, and high-speed internet. Technical support is available on call throughout your event." },
        { title: "Flexible Spaces", text: "From a boardroom-style setup for 20 to a theatre-style hall for 300, plus outdoor lawns and terraces for informal sessions, you can design your offsite flow exactly as you need it." },
        { title: "Team Building & Recreation", text: "Complement your sessions with outdoor team-building exercises, nature treks, pool time, cricket, cycling, or a bonfire evening to strengthen team bonds." },
        { title: "Stay & Dine On-Site", text: "Comfortable rooms and three dining options mean your team stays together, dines well, and gets the most out of the offsite — without shuttling between venues." },
        { title: "End-to-End Support", text: "A dedicated event coordinator manages logistics from room setup to AV checks, meal timing, and activity scheduling, so your team can focus on the agenda." },
      ]}
      ctaPrimary={{ label: "Request a Proposal", href: "/weddings-events/venues" }}
      ctaSecondary={{ label: "View Accommodation", href: "/stay" }}
      faq={[
        { q: "What is the largest conference capacity at Giovanni?", a: "The Aria can accommodate up to 4,000 attendees in theatre-style seating. The Forum offers boardroom-style meetings for 20 to 60 participants." },
        { q: "Is high-speed internet available for presentations and video calls?", a: "Yes, all conference and meeting spaces have dedicated high-speed Wi-Fi. We also provide LAN connections and technical support for seamless presentations and video conferencing." },
        { q: "Can you arrange team-building activities?", a: "Yes, we organise a range of team activities including outdoor challenges, treasure hunts, nature treks, cricket matches, cycling, and bonfire evenings. Custom programmes can be designed for your team." },
        { q: "How do we book a corporate offsite?", a: "Contact our events team through the website or call us directly. We will share a customised proposal based on your group size, duration, and requirements. Site visits are welcome." },
      ]}
      relatedLinks={[
        { label: "Event Venues", href: "/weddings-events/venues" },
        { label: "Rooms & Suites", href: "/stay" },
        { label: "Dining Options", href: "/dining" },
        { label: "Banquet Venue", href: "/banquet-venue-bhopal" },
        { label: "Luxury Resort in Bhopal", href: "/luxury-resort-bhopal" },
      ]}
    />
  );
}
