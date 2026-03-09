import { DiningOutlet } from "@/types";

export const diningOutlets: DiningOutlet[] = [
  {
    id: "terra",
    slug: "terra",
    name: "Terra",
    tagline: "The Heart of Giovanni Dining",
    description:
      "Terra is the resort's signature all-day dining restaurant, offering a thoughtfully curated menu that draws from Indian regional traditions, continental classics, and seasonal produce. Overlooking the resort gardens, Terra combines warm interiors with an airy outdoor terrace to create the perfect setting for every meal — from a leisurely breakfast to an elegant dinner.",
    cuisine: ["Indian", "Continental", "Asian"],
    mealTypes: ["breakfast", "lunch", "dinner"],
    timings: "7:00 AM – 10:30 PM",
    images: [
      { src: "/images/dining/terra-1.jpg", alt: "Terra Restaurant at Giovanni Village Resort" },
      { src: "/images/dining/terra-2.jpg", alt: "Terra dining experience" },
    ],
    heroImage: { src: "/images/dining/terra-hero.jpg", alt: "Terra Restaurant" },
    features: [
      "All-day dining with seasonal menu",
      "Indoor and outdoor terrace seating",
      "Live kitchen stations at breakfast",
      "Regional Indian specialities",
      "Continental and Asian selections",
      "Curated wine and beverage list",
    ],
    ambience: "Warm, airy, and garden-facing",
    dressCode: "Smart casual",
    reservationRequired: false,
    isActive: true,
    seo: {
      title: "Terra – All-Day Dining | Giovanni Village Resort, Bhopal",
      description:
        "Enjoy all-day dining at Terra restaurant, Giovanni Village Resort. Indian, continental, and Asian cuisine in a warm garden-facing setting near Bhopal.",
    },
  },
  {
    id: "forest-grill",
    slug: "forest-grill",
    name: "Forest Grill",
    tagline: "Fire, Flavour, Forest",
    description:
      "Nestled among the trees, Forest Grill is Giovanni's open-air specialty restaurant where the art of grilling meets the ambience of the forest. From tandoor-fired kebabs to wood-smoked meats and seasonal vegetables, every dish is prepared with craftsmanship and served under the stars. An experience best enjoyed on cool evenings with a slow meal and good company.",
    cuisine: ["Grill", "Tandoor", "Barbecue"],
    mealTypes: ["dinner"],
    timings: "7:00 PM – 10:30 PM",
    images: [
      { src: "/images/dining/forest-grill-1.jpg", alt: "Forest Grill at Giovanni Village Resort" },
      { src: "/images/dining/forest-grill-2.jpg", alt: "Forest Grill evening" },
    ],
    heroImage: { src: "/images/dining/forest-grill-hero.jpg", alt: "Forest Grill" },
    features: [
      "Open-air forest setting",
      "Live grill and tandoor stations",
      "Wood-smoked specialities",
      "Seasonal and local ingredients",
      "Craft cocktails and sundowners",
      "Campfire ambience",
    ],
    ambience: "Rustic, open-air, campfire-lit",
    dressCode: "Casual elegant",
    reservationRequired: true,
    isActive: true,
    seo: {
      title: "Forest Grill – Open-Air Dining | Giovanni Village Resort, Bhopal",
      description:
        "Dine under the stars at Forest Grill, Giovanni Village Resort. Tandoor, barbecue, and wood-smoked specialities in a forest setting near Bhopal.",
    },
  },
  {
    id: "verandah-lounge",
    slug: "verandah-lounge",
    name: "The Verandah Lounge",
    tagline: "Sip, Unwind, Savour",
    description:
      "The Verandah Lounge is Giovanni's relaxed social space — a graceful lounge where guests can unwind with artisanal teas, craft cocktails, light bites, and desserts. Overlooking the pool and gardens, The Verandah is perfect for afternoon leisure, pre-dinner drinks, or a quiet moment with a book and a cup of tea.",
    cuisine: ["Beverages", "Light Bites", "Desserts"],
    mealTypes: ["all_day", "bar"],
    timings: "10:00 AM – 11:00 PM",
    images: [
      { src: "/images/dining/verandah-1.jpg", alt: "The Verandah Lounge" },
      { src: "/images/dining/verandah-2.jpg", alt: "Verandah cocktails" },
    ],
    heroImage: { src: "/images/dining/verandah-hero.jpg", alt: "The Verandah Lounge" },
    features: [
      "All-day beverage and bites menu",
      "Pool and garden views",
      "Artisanal teas and coffees",
      "Craft cocktails and mocktails",
      "Light snacks and desserts",
      "Relaxed lounge seating",
    ],
    ambience: "Relaxed, elegant, pool-facing",
    reservationRequired: false,
    isActive: true,
    seo: {
      title: "The Verandah Lounge | Giovanni Village Resort, Bhopal",
      description:
        "Relax at The Verandah Lounge, Giovanni Village Resort. Craft cocktails, artisanal teas, and light bites with pool views near Bhopal.",
    },
  },
];
