import { Metadata } from "next";
import { CorporateClient } from "./corporate-client";

export const metadata: Metadata = {
  title: "Corporate Events – Conferences, Offsites & Team Retreats | Giovanni Village Resort",
  description:
    "Host corporate offsites, conferences, product launches, and team retreats at Giovanni Village Resort near Bhopal. Climate-controlled venues, full AV, and dedicated event management.",
  alternates: { canonical: "/weddings-events/corporate-events" },
  openGraph: {
    title: "Corporate Events at Giovanni Village Resort",
    description:
      "Inspire your team with corporate events set amid nature and luxury. Full AV facilities, breakout spaces, and five-star hospitality near Bhopal.",
  },
};

export default function CorporateEventsPage() {
  return <CorporateClient />;
}
