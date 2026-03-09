"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function JournalPostClient({ slug }: { slug: string }) {
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <>
      <PageHero
        label="Journal"
        title={title}
        breadcrumbs={[
          { label: "Journal", href: "/journal" },
          { label: title, href: `/journal/${slug}` },
        ]}
        compact
      />

      <article className="section-padding">
        <div className="container-luxury max-w-3xl">
          <ImagePlaceholder alt={title} aspect="video" label="Featured Image" className="rounded-2xl mb-10" />

          <div className="prose prose-lg max-w-none">
            <p className="text-earth-600 leading-relaxed text-lg">
              This is a placeholder for the journal article content. When connected to a CMS such as Sanity, Payload, or Strapi, this page will render rich editorial content including text, images, quotes, and embedded media.
            </p>
            <p className="text-earth-600 leading-relaxed">
              The journal section is designed for long-form content that supports SEO, answer engine visibility, and guest engagement. Topics may include travel guides, wedding planning tips, celebration ideas, corporate offsite advice, seasonal recommendations, and insights about the resort and surrounding region.
            </p>
            <p className="text-earth-600 leading-relaxed">
              Each article is structured with proper heading hierarchy, internal links, and semantic markup to maximise search engine and AI system discoverability.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-earth-200">
            <Link href="/journal">
              <Button variant="ghost" size="md">
                <ArrowLeft className="w-4 h-4" /> Back to Journal
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
