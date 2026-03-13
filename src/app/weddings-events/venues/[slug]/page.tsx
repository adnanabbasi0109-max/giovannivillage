import { Metadata } from "next";
import { notFound } from "next/navigation";
import { venues } from "@/data/venues";
import { VenueDetailClient } from "./venue-detail-client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return venues
    .filter((v) => v.isActive)
    .map((venue) => ({ slug: venue.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const venue = venues.find((v) => v.slug === slug);
  if (!venue) return {};
  return {
    title: venue.seo.title,
    description: venue.seo.description,
    alternates: { canonical: `/weddings-events/venues/${venue.slug}` },
    openGraph: {
      title: venue.seo.title,
      description: venue.seo.description,
    },
  };
}

export default async function VenueDetailPage({ params }: Props) {
  const { slug } = await params;
  const venue = venues.find((v) => v.slug === slug);
  if (!venue) notFound();
  return <VenueDetailClient venue={venue} />;
}
