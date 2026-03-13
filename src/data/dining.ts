import { DiningOutlet } from "@/types";

export const diningOutlets: DiningOutlet[] = [
  {
    id: "gourmet-by-the-woods",
    slug: "gourmet-by-the-woods",
    name: "Gourmet By The Woods",
    tagline: "Fine Dining Amidst Nature",
    description:
      "Nestled amidst the tranquility of nature, Gourmet By The Woods is Giovanni Village's signature fine dining restaurant offering an elegant setting with international offerings. With a menu crafted by world-renowned chefs, each dish is a gastronomic delight that celebrates seasonal ingredients and culinary artistry. The restaurant combines refined interiors with views of the surrounding forest for an unforgettable dining experience.",
    cuisine: ["International", "Fine Dining", "Continental"],
    mealTypes: ["lunch", "dinner"],
    timings: "12:30 PM – 3:00 PM, 7:00 PM – 10:30 PM",
    images: [
      { src: "/images/dining/terra-1.jpg", alt: "Gourmet By The Woods at Giovanni Village" },
      { src: "/images/dining/terra-2.jpg", alt: "Gourmet By The Woods dining" },
    ],
    heroImage: { src: "/images/dining/terra-hero.jpg", alt: "Gourmet By The Woods" },
    features: [
      "Fine dining with international offerings",
      "Menu crafted by world-renowned chefs",
      "Elegant setting amidst nature",
      "Seasonal and locally sourced ingredients",
      "Curated wine and spirits list",
      "Each dish a gastronomic delight",
    ],
    ambience: "Elegant, refined, forest-facing",
    dressCode: "Smart casual",
    reservationRequired: true,
    isActive: true,
    seo: {
      title: "Gourmet By The Woods – Fine Dining | Giovanni Village, Bhopal",
      description:
        "Fine dining at Gourmet By The Woods, Giovanni Village. International cuisine crafted by world-renowned chefs in an elegant forest setting near Bhopal.",
    },
  },
  {
    id: "pihu",
    slug: "pihu",
    name: "Pihu",
    tagline: "Rooftop Romance & Stargazing",
    description:
      "Pihu is Giovanni Village's enchanting rooftop restaurant offering international and local cuisines in a romantic, intimate setting. With candle-lit dinners, live music on weekends, specialty cocktails, and even telescopic viewing experiences, Pihu delivers more than just a meal — it offers panoramic views and an experience that lingers. Perfect for romantic evenings, celebrations, and memorable nights under the stars.",
    cuisine: ["International", "Indian", "Cocktails"],
    mealTypes: ["dinner"],
    timings: "7:00 PM – 11:00 PM",
    images: [
      { src: "/images/dining/forest-grill-1.jpg", alt: "Pihu Rooftop at Giovanni Village" },
      { src: "/images/dining/forest-grill-2.jpg", alt: "Pihu evening dining" },
    ],
    heroImage: { src: "/images/dining/forest-grill-hero.jpg", alt: "Pihu Rooftop Restaurant" },
    features: [
      "Rooftop dining with panoramic views",
      "Candle-lit dinner experiences",
      "Live music on weekends",
      "Specialty cocktails",
      "Telescopic viewing and stargazing",
      "Romantic and intimate setting",
    ],
    ambience: "Romantic, rooftop, starlit",
    dressCode: "Smart casual",
    reservationRequired: true,
    isActive: true,
    seo: {
      title: "Pihu – Rooftop Restaurant | Giovanni Village, Bhopal",
      description:
        "Dine under the stars at Pihu rooftop restaurant, Giovanni Village. Live music, candle-lit dinners, telescopic viewing, and panoramic views near Bhopal.",
    },
  },
  {
    id: "berry-and-beans",
    slug: "berry-and-beans",
    name: "Berry & Beans",
    tagline: "Your All-Day Social Hub",
    description:
      "Berry & Beans is Giovanni Village's bright and vibrant casual cafe — a social hub where guests can enjoy morning coffee, midday snacks, and late-night desserts. With light bites, pastries, and a wide selection of beverages, this is the perfect spot for a quick pick-me-up, a casual catch-up, or a sweet treat any time of the day.",
    cuisine: ["Cafe", "Beverages", "Light Bites", "Pastries"],
    mealTypes: ["all_day"],
    timings: "7:00 AM – 11:00 PM",
    images: [
      { src: "/images/dining/verandah-1.jpg", alt: "Berry & Beans Cafe at Giovanni Village" },
      { src: "/images/dining/verandah-2.jpg", alt: "Berry & Beans beverages" },
    ],
    heroImage: { src: "/images/dining/verandah-hero.jpg", alt: "Berry & Beans Cafe" },
    features: [
      "All-day cafe with light bites and pastries",
      "Bright and vibrant social hub",
      "Artisanal coffees and teas",
      "Fresh pastries and desserts",
      "Quick snacks and refreshments",
      "Casual and welcoming ambience",
    ],
    ambience: "Bright, vibrant, casual",
    reservationRequired: false,
    isActive: true,
    seo: {
      title: "Berry & Beans – Cafe | Giovanni Village, Bhopal",
      description:
        "Enjoy all-day coffee, pastries, and light bites at Berry & Beans cafe, Giovanni Village near Bhopal.",
    },
  },
  {
    id: "the-den",
    slug: "the-den",
    name: "The Den",
    tagline: "Unwind, Sip, Cheer",
    description:
      "The Den is Giovanni Village's laid-back bistro bar offering an extensive selection of wines, beers, and spirits paired with appetisers and comfort food. With live sports screening, laid-back music, and a relaxed atmosphere, The Den is the ideal spot to unwind after a day of exploration or celebration. Whether watching a match or enjoying a nightcap, this is where guests come to relax.",
    cuisine: ["Bar Bites", "Comfort Food", "Beverages"],
    mealTypes: ["bar", "dinner"],
    timings: "12:00 PM – 11:30 PM",
    images: [
      { src: "/images/dining/verandah-1.jpg", alt: "The Den Bistro Bar at Giovanni Village" },
    ],
    heroImage: { src: "/images/dining/verandah-hero.jpg", alt: "The Den Bistro Bar" },
    features: [
      "Extensive wine, beer, and spirits selection",
      "Appetisers and comfort food",
      "Live sports screening",
      "Laid-back music and ambience",
      "Craft cocktails and signature drinks",
      "Perfect for unwinding",
    ],
    ambience: "Laid-back, cozy, social",
    reservationRequired: false,
    isActive: true,
    seo: {
      title: "The Den – Bistro Bar | Giovanni Village, Bhopal",
      description:
        "Unwind at The Den bistro bar, Giovanni Village. Extensive drinks, comfort food, live sports, and laid-back vibes near Bhopal.",
    },
  },
];
