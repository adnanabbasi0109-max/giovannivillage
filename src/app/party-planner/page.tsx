import { Metadata } from "next";
import { PartyPlannerClient } from "./party-planner-client";

export const metadata: Metadata = {
  title: "Party Planner – Plan Your Celebration | Giovanni Village Resort",
  description:
    "Plan your perfect celebration at Giovanni Village Resort near Bhopal. Choose venues, menus, and enhancements with our interactive party planner and get an instant budget estimate.",
  alternates: { canonical: "/party-planner" },
};

export default function PartyPlannerPage() {
  return <PartyPlannerClient />;
}
