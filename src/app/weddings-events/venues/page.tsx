import { Metadata } from "next";
import { VenuesClient } from "./venues-client";

export const metadata: Metadata = {
  title: "Event Venues – Indoor & Outdoor Spaces | Giovanni Village Resort",
  description:
    "Explore four stunning event venues at Giovanni Village Resort near Bhopal. Grand Lawn (1,000 guests), Forest Terrace (200), Banquet Hall (400), and Poolside Deck (150) for weddings, celebrations, and corporate events.",
  alternates: { canonical: "/weddings-events/venues" },
  openGraph: {
    title: "Event Venues at Giovanni Village Resort",
    description:
      "Discover indoor and outdoor event venues for 20 to 1,000 guests at Giovanni Village Resort near Bhopal.",
  },
};

export default function VenuesPage() {
  return <VenuesClient />;
}
