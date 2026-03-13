import { Metadata } from "next";
import { PackagesClient } from "./packages-client";

export const metadata: Metadata = {
  title: "Packages & Offers",
  description: "Explore special packages and seasonal offers at Giovanni Village Resort. Honeymoon getaways, family retreats, and weekend staycation deals near Bhopal.",
  alternates: { canonical: "/stay/packages" },
};

export default function PackagesPage() {
  return <PackagesClient />;
}
