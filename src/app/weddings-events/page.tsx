import { Metadata } from "next";
import { WeddingsEventsClient } from "./weddings-events-client";

export const metadata: Metadata = {
  title: "Weddings & Events – Celebrate at Giovanni Village Resort",
  description:
    "Host unforgettable weddings, social celebrations, and corporate events at Giovanni Village Resort near Bhopal. Four stunning venues, bespoke planning, and world-class hospitality.",
  alternates: { canonical: "/weddings-events" },
  openGraph: {
    title: "Weddings & Events – Giovanni Village Resort",
    description:
      "From grand weddings to intimate celebrations, Giovanni Village Resort offers exceptional venues and dedicated event planning for every occasion.",
  },
};

export default function WeddingsEventsPage() {
  return <WeddingsEventsClient />;
}
