import { Metadata } from "next";
import { DiningClient } from "./dining-client";

export const metadata: Metadata = {
  title: "Dining – Restaurants & Lounges",
  description: "Experience exquisite dining at Giovanni Village Resort near Bhopal. Fine dining at Gourmet By The Woods, rooftop dining at Pihu, all-day cafe Berry & Beans, and bistro bar The Den.",
  alternates: { canonical: "/dining" },
};

export default function DiningPage() {
  return <DiningClient />;
}
