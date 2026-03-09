import { Metadata } from "next";
import { JournalPostClient } from "./journal-post-client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return {
    title: `${title} | Journal`,
    description: `Read "${title}" on the Giovanni Village Resort journal. Insights, guides, and inspiration for luxury stays and celebrations near Bhopal.`,
  };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  return <JournalPostClient slug={slug} />;
}
