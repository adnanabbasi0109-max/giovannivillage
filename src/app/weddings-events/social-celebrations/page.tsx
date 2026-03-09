import { Metadata } from "next";
import { SocialClient } from "./social-client";

export const metadata: Metadata = {
  title: "Social Celebrations – Birthdays, Anniversaries & More | Giovanni Village Resort",
  description:
    "Celebrate birthdays, anniversaries, engagements, and family milestones at Giovanni Village Resort near Bhopal. Intimate to grand venues, bespoke catering, and dedicated event planning.",
  alternates: { canonical: "/weddings-events/social-celebrations" },
  openGraph: {
    title: "Social Celebrations at Giovanni Village Resort",
    description:
      "Host unforgettable birthday parties, anniversary dinners, and milestone celebrations at Giovanni Village Resort near Bhopal.",
  },
};

export default function SocialCelebrationsPage() {
  return <SocialClient />;
}
