import { Metadata } from "next";
import { ReviewsClient } from "./reviews-client";

export const metadata: Metadata = {
  title: "Guest Reviews & Stories",
  description: "Read what guests say about their experience at Giovanni Village Resort. Real reviews from weddings, stays, celebrations, and corporate events near Bhopal.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
