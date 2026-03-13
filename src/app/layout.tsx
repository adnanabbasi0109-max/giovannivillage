import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SchemaOrg } from "@/components/shared/schema-org";

export const metadata: Metadata = {
  metadataBase: new URL("https://giovanniresort.com"),
  title: {
    default: "Giovanni Village Resort | Luxury Jungle Resort Near Bhopal",
    template: "%s | Giovanni Village Resort",
  },
  description:
    "A luxury jungle resort and premier celebration destination near Bhopal. Premium stays, grand weddings, curated events, and serene nature retreats at Giovanni Village Resort.",
  keywords: [
    "luxury resort Bhopal",
    "wedding venue Bhopal",
    "party venue Bhopal",
    "jungle resort near Bhopal",
    "corporate offsite Bhopal",
    "Giovanni Village Resort",
    "staycation Bhopal",
    "premium resort Madhya Pradesh",
  ],
  authors: [{ name: "Giovanni Village Resort" }],
  creator: "Giovanni Village Resort",
  publisher: "Giovanni Village Resort",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://giovanniresort.com",
    siteName: "Giovanni Village Resort",
    title: "Giovanni Village Resort | Luxury Jungle Resort Near Bhopal",
    description:
      "A luxury jungle resort and premier celebration destination near Bhopal. Premium stays, grand weddings, and serene nature retreats.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Giovanni Village Resort - Luxury Jungle Resort Near Bhopal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giovanni Village Resort | Luxury Jungle Resort Near Bhopal",
    description:
      "A luxury jungle resort and premier celebration destination near Bhopal.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://giovanniresort.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
        <SchemaOrg />
      </head>
      <body className="antialiased bg-background text-foreground">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
