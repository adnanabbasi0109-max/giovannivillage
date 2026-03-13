import { Metadata } from "next";
import { PoliciesClient } from "./policies-client";

export const metadata: Metadata = {
  title: "Policies",
  description: "Resort policies for Giovanni Village Resort — cancellation, check-in/check-out, payment, privacy, and terms of use.",
  alternates: { canonical: "/policies" },
};

export default function PoliciesPage() {
  return <PoliciesClient />;
}
