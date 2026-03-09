import { Metadata } from "next";
import { FAQClient } from "./faq-client";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about Giovanni Village Resort — rooms, bookings, events, dining, experiences, policies, and getting here near Bhopal.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return <FAQClient />;
}
