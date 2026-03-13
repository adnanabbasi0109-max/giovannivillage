import { Metadata } from "next";
import { VenuesClient } from "./venues-client";

export const metadata: Metadata = {
  title: "Event Venues – Indoor & Outdoor Spaces | Giovanni Village Resort",
  description:
    "Explore five stunning event venues at Giovanni Village Resort near Bhopal. The Aria (5,000 guests), Sudesh Lawns (3,000), The Forum (60), Cocktail Lawn (200), and Poolside Lawn (100) for weddings, celebrations, and corporate events.",
  alternates: { canonical: "/weddings-events/venues" },
  openGraph: {
    title: "Event Venues at Giovanni Village Resort",
    description:
      "Discover indoor and outdoor event venues for 10 to 5,000 guests at Giovanni Village Resort near Bhopal.",
  },
};

export default function VenuesPage() {
  return <VenuesClient />;
}
