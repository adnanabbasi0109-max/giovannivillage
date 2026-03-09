import { Metadata } from "next";
import { GalleryClient } from "./gallery-client";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the beauty of Giovanni Village Resort through our gallery. Resort grounds, luxury rooms, dining experiences, wedding venues, and nature near Bhopal.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
