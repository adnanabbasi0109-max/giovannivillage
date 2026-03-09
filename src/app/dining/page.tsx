import { Metadata } from "next";
import { DiningClient } from "./dining-client";

export const metadata: Metadata = {
  title: "Dining – Restaurants & Lounges",
  description: "Experience exquisite dining at Giovanni Village Resort near Bhopal. All-day dining at Terra, open-air grills at Forest Grill, and cocktails at The Verandah Lounge.",
  alternates: { canonical: "/dining" },
};

export default function DiningPage() {
  return <DiningClient />;
}
