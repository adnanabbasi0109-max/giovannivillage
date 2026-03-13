import { Metadata } from "next";
import { WeddingsClient } from "./weddings-client";

export const metadata: Metadata = {
  title: "Weddings – Dream Wedding Venue Near Bhopal | Giovanni Village Resort",
  description:
    "Host your dream wedding at Giovanni Village Resort. Grand lawns, elegant banquet halls, bespoke planning, custom catering, and luxury accommodation for up to 1,000 guests near Bhopal.",
  alternates: { canonical: "/weddings-events/weddings" },
  openGraph: {
    title: "Weddings at Giovanni Village Resort",
    description:
      "Create unforgettable wedding memories at Giovanni Village Resort — the premier wedding destination near Bhopal with stunning venues and personalised planning.",
  },
};

export default function WeddingsPage() {
  return <WeddingsClient />;
}
