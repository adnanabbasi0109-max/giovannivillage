import { Metadata } from "next";
import { ExperiencesClient } from "./experiences-client";

export const metadata: Metadata = {
  title: "Experiences – Spa, Nature & Activities",
  description: "Discover curated experiences at Giovanni Village Resort. Spa & wellness, nature trails, swimming pool, bonfire evenings, cycling, and kids' activities near Bhopal.",
  alternates: { canonical: "/experiences" },
};

export default function ExperiencesPage() {
  return <ExperiencesClient />;
}
