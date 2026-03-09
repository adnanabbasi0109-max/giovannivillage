import { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us & Visit",
  description: "Get in touch with Giovanni Village Resort. Contact details, directions, booking enquiries, event planning, and how to reach us near Bhopal, Madhya Pradesh.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
