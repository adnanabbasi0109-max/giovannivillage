import { Metadata } from "next";
import { SEOLandingPage } from "@/components/shared/seo-landing-page";

export const metadata: Metadata = {
  title: "Family Outing Resort Near Bhopal | Giovanni Village Resort",
  description: "Plan a memorable family outing at Giovanni Village Resort near Bhopal. Kids' activities, swimming pool, nature trails, family cottages, and safe resort grounds for all ages.",
  alternates: { canonical: "/family-outing-resort-bhopal" },
};

export default function Page() {
  return (
    <SEOLandingPage
      label="Family Outing"
      title="Bhopal's Favourite Family Outing Resort"
      subtitle="A day out or a weekend stay — Giovanni Village Resort gives families space to play, explore, and spend quality time together in a safe, beautiful, nature-filled setting."
      introHeading="Quality Family Time, Just Outside the City"
      introText="Giovanni Village Resort is where Bhopal families come to reconnect. Located on Kolar Road and surrounded by forest, the resort offers a full day's worth of activities for every age group — from a kids' zone and swimming pool to cycling trails and outdoor games. Whether you are planning a quick day outing or a weekend family vacation, Giovanni provides the space, safety, and variety that families need to truly enjoy their time together."
      features={[
        "Kids' activity zone with supervised play areas",
        "Swimming pool with dedicated children's section",
        "Sunrise Cottage and spacious rooms with extra privacy",
        "Cycling, nature trails, and outdoor games",
        "Family-friendly dining with kids' menu options",
        "Safe, gated resort grounds",
        "Day-visit and overnight packages available",
        "Pet-friendly policy on select stays",
      ]}
      whyGiovanniHeading="Why Families Love Giovanni"
      whyGiovanniPoints={[
        { title: "Safe & Spacious Grounds", text: "The resort is fully gated with well-maintained pathways, open lawns, and supervised activity zones — giving parents peace of mind while kids explore freely." },
        { title: "Activities for Every Age", text: "Toddlers enjoy the play zone, older kids love cycling and the pool, teenagers can try nature trails, and adults relax by the spa or pool deck. Everyone stays engaged." },
        { title: "Sunrise Cottage & Spacious Rooms", text: "Our Sunrise Cottage and King Rooms are designed for families — with extra room to spread out, garden and forest views, and easy access to the pool and kids' zone. No more cramped hotel rooms." },
        { title: "Wholesome Dining", text: "Gourmet By The Woods serves a wide menu with options for every palate, including a kids' menu. Pihu offers a fun rooftop dining experience the whole family can enjoy." },
        { title: "Day Outing Packages", text: "Not staying overnight? Our day packages include pool access, lunch, and activities — a complete family outing without the commitment of an overnight stay." },
        { title: "Nature as the Playground", text: "Instead of malls and screens, children experience forests, birds, open spaces, and fresh air. It is the kind of outing that creates lasting memories." },
      ]}
      ctaPrimary={{ label: "Plan Your Family Outing", href: "/book" }}
      ctaSecondary={{ label: "View Rooms & Cottage", href: "/stay" }}
      faq={[
        { q: "Is Giovanni safe for young children?", a: "Yes, the resort has gated grounds, well-lit pathways, a shallow children's pool section, and supervised activity areas. Our staff is trained to ensure a family-friendly environment." },
        { q: "Can we visit for a day without staying overnight?", a: "Yes, we offer day-visit packages that include pool access, a meal, and use of the resort facilities. It is a popular option for families looking for a quick outing near Bhopal." },
        { q: "What activities are suitable for kids under 10?", a: "The kids' activity zone, children's pool, cycling on resort trails, outdoor lawn games, and nature walks are all suitable and popular with younger children." },
        { q: "Are there family meal packages?", a: "Yes, we offer family meal packages that include breakfast, lunch, and dinner with a mix of cuisines. A dedicated kids' menu is available at Gourmet By The Woods." },
      ]}
      relatedLinks={[
        { label: "Rooms & Cottage", href: "/stay" },
        { label: "Dining", href: "/dining" },
        { label: "Staycation Near Bhopal", href: "/staycation-near-bhopal" },
        { label: "Jungle Resort Near Bhopal", href: "/jungle-resort-near-bhopal" },
        { label: "Party Venue", href: "/party-venue-bhopal" },
        { label: "Celebration Venue", href: "/celebration-venue-bhopal" },
      ]}
    />
  );
}
