import { Metadata } from "next";
import { SEOLandingPage } from "@/components/shared/seo-landing-page";

export const metadata: Metadata = {
  title: "Jungle Resort Near Bhopal | Giovanni Village Resort",
  description: "Experience a jungle resort near Bhopal at Giovanni Village Resort. Forest-surrounded stays, nature trails, bird watching, and wildlife encounters — located beside Kerwa Dam.",
  alternates: { canonical: "/jungle-resort-near-bhopal" },
};

export default function Page() {
  return (
    <SEOLandingPage
      label="Jungle Resort"
      title="A True Jungle Resort Experience Near Bhopal"
      subtitle="Wake up to birdsong, walk through forest trails, and sleep under a canopy of stars. Giovanni Village Resort offers an authentic nature retreat on the edge of Bhopal's forested hills."
      introHeading="Forest Living, Resort Comfort"
      introText="Giovanni Village Resort is one of the few properties near Bhopal that sits genuinely within a forest landscape. Located beside Kerwa Dam and bordered by the hills and woodlands that extend toward Ratapani Wildlife Sanctuary, the resort offers an immersive jungle experience without sacrificing comfort. The property is home to diverse birdlife, visiting wildlife, and mature trees that form a natural canopy over the grounds. For nature lovers, wildlife enthusiasts, and anyone who craves the forest, Giovanni is a destination in itself."
      features={[
        "Set within a natural forest landscape",
        "Adjacent to Kerwa Dam and reservoir",
        "Guided nature and forest trail walks",
        "Rich birdlife — ideal for bird watching",
        "Proximity to Ratapani Wildlife Sanctuary",
        "Outdoor dining under the tree canopy",
        "Cycling trails through wooded paths",
        "Seasonal bonfire and stargazing evenings",
      ]}
      whyGiovanniHeading="Why Giovanni Is the Jungle Resort Bhopal Needed"
      whyGiovanniPoints={[
        { title: "Genuinely in the Forest", text: "This is not a city hotel with a garden. Giovanni is surrounded by actual forest — you will hear langurs in the trees, spot kingfishers at the dam, and walk trails shaded by native canopy." },
        { title: "Kerwa Dam at Your Doorstep", text: "The dam and its reservoir are minutes from the resort, offering scenic walks, photography opportunities, and a sense of tranquillity that only water and forest together can provide." },
        { title: "Gateway to Ratapani", text: "Ratapani Wildlife Sanctuary, home to leopards, sloth bears, and hundreds of bird species, is a short drive away. Giovanni makes an ideal base camp for wildlife excursions." },
        { title: "Comfort in the Wild", text: "Forest-view rooms, hot showers, premium bedding, Wi-Fi, and fine dining — Giovanni proves that a jungle experience does not have to mean roughing it." },
        { title: "Guided Experiences", text: "Our naturalist-led trail walks, bird-watching sessions, and forest interpretation programmes help you see and understand the ecosystem around you." },
        { title: "Sustainable Approach", text: "We maintain the natural landscape, use responsible waste management, and keep lighting minimal to protect the nocturnal environment. Your stay supports conservation." },
      ]}
      ctaPrimary={{ label: "Book Your Forest Stay", href: "/book" }}
      ctaSecondary={{ label: "Explore Experiences", href: "/experiences" }}
      faq={[
        { q: "Is Giovanni Village Resort actually in a jungle?", a: "Yes, the resort is set within a forested area near Kerwa Dam on the outskirts of Bhopal. The property is surrounded by natural woodland and is close to the Ratapani Wildlife Sanctuary buffer zone." },
        { q: "What wildlife can be spotted near the resort?", a: "Common sightings include langurs, peacocks, kingfishers, woodpeckers, and various butterfly species. The nearby Ratapani Sanctuary is home to leopards, sloth bears, and over 200 bird species." },
        { q: "Are nature walks and trails guided?", a: "Yes, we offer guided nature walks led by trained staff who help identify local flora, fauna, and birdlife. Self-guided trail maps are also available for independent exploration." },
        { q: "Is the resort safe given its forest location?", a: "Absolutely. The resort has secure, gated boundaries, well-lit pathways, 24/7 security, and trained staff. The forest setting is carefully managed to ensure guest safety while preserving the natural environment." },
      ]}
      relatedLinks={[
        { label: "Rooms & Suites", href: "/stay" },
        { label: "Experiences & Activities", href: "/experiences" },
        { label: "Luxury Resort in Bhopal", href: "/luxury-resort-bhopal" },
        { label: "Staycation Near Bhopal", href: "/staycation-near-bhopal" },
        { label: "Family Outing Resort", href: "/family-outing-resort-bhopal" },
      ]}
    />
  );
}
