import { Metadata } from "next";
import { Suspense } from "react";
import { BookingClient } from "./book-client";

export const metadata: Metadata = {
  title: "Book Your Stay | Giovanni Village Resort",
  description:
    "Reserve your room at Giovanni Village Resort near Bhopal. Choose from Superior Rooms, Deluxe Rooms, Premium Suites, and Family Cottages. Best rate guaranteed.",
  alternates: { canonical: "/book" },
};

function BookingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-earth-500 text-sm">Loading booking...</p>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<BookingFallback />}>
      <BookingClient />
    </Suspense>
  );
}
