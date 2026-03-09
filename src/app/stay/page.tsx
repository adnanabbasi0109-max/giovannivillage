import { Metadata } from "next";
import { StayPageClient } from "./stay-client";

export const metadata: Metadata = {
  title: "Stay – Rooms & Suites",
  description: "Discover luxury rooms, suites, and family cottages at Giovanni Village Resort near Bhopal. Garden views, forest views, premium amenities, and complimentary breakfast.",
  alternates: { canonical: "/stay" },
};

export default function StayPage() {
  return <StayPageClient />;
}
