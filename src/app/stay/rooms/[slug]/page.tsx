import { Metadata } from "next";
import { notFound } from "next/navigation";
import { rooms } from "@/data/rooms";
import { RoomDetailClient } from "./room-detail-client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return {};
  return {
    title: room.seo.title,
    description: room.seo.description,
    alternates: { canonical: `/stay/rooms/${room.slug}` },
  };
}

export default async function RoomDetailPage({ params }: Props) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) notFound();
  return <RoomDetailClient room={room} />;
}
