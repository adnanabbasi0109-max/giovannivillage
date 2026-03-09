import { Metadata } from "next";
import { JournalClient } from "./journal-client";

export const metadata: Metadata = {
  title: "Journal – Stories & Guides",
  description: "Discover travel inspiration, wedding planning guides, celebration ideas, and local insights from Giovanni Village Resort near Bhopal.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return <JournalClient />;
}
