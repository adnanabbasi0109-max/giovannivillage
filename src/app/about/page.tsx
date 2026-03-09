import { Metadata } from "next";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Giovanni Village Resort — a luxury jungle resort and premier celebration destination near Bhopal, Madhya Pradesh. Our story, values, and vision.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
