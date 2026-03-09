import { globalSettings } from "@/data/global";

export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://giovanniresort.com/#website",
        url: "https://giovanniresort.com",
        name: "Giovanni Village Resort",
        description: globalSettings.description,
        publisher: { "@id": "https://giovanniresort.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://giovanniresort.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": ["Organization", "LodgingBusiness"],
        "@id": "https://giovanniresort.com/#organization",
        name: "Giovanni Village Resort",
        url: "https://giovanniresort.com",
        logo: {
          "@type": "ImageObject",
          url: "https://giovanniresort.com/images/logo.svg",
        },
        description: globalSettings.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${globalSettings.address.line1}, ${globalSettings.address.line2 || ""}`.trim(),
          addressLocality: globalSettings.address.city,
          addressRegion: globalSettings.address.state,
          postalCode: globalSettings.address.postalCode,
          addressCountry: globalSettings.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: globalSettings.coordinates.lat,
          longitude: globalSettings.coordinates.lng,
        },
        telephone: globalSettings.contact.phone,
        email: globalSettings.contact.email,
        checkinTime: globalSettings.checkInTime,
        checkoutTime: globalSettings.checkOutTime,
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
          { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
          { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
          { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
          { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
          { "@type": "LocationFeatureSpecification", name: "Event Venues", value: true },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: globalSettings.contact.reservationPhone,
            contactType: "reservations",
            availableLanguage: ["English", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            telephone: globalSettings.contact.eventsPhone,
            contactType: "event inquiries",
            availableLanguage: ["English", "Hindi"],
          },
        ],
        sameAs: Object.values(globalSettings.social).filter(Boolean),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://giovanniresort.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://giovanniresort.com",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
