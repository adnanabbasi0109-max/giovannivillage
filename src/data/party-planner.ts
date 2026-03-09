import { Enhancement, MenuPackage } from "@/types";

export const eventTypes = [
  { id: "birthday", label: "Birthday Celebration", icon: "cake", description: "From intimate gatherings to grand birthday bashes" },
  { id: "anniversary", label: "Anniversary", icon: "heart", description: "Celebrate milestones of love and togetherness" },
  { id: "engagement", label: "Engagement Ceremony", icon: "gem", description: "Mark the beginning of a beautiful journey" },
  { id: "cocktail", label: "Cocktail Evening", icon: "wine", description: "Sophisticated evenings with fine drinks and conversation" },
  { id: "family_gathering", label: "Family Gathering", icon: "users", description: "Reunions, festivals, and family celebrations" },
  { id: "pre_wedding", label: "Pre-Wedding Function", icon: "music", description: "Mehndi, sangeet, haldi, and more" },
  { id: "corporate", label: "Corporate Gathering", icon: "briefcase", description: "Team events, mixers, and corporate celebrations" },
  { id: "custom", label: "Custom Event", icon: "sparkles", description: "Something unique? We'll make it happen" },
] as const;

export const menuPackages: MenuPackage[] = [
  // Veg Standard
  { id: "veg-standard", name: "Garden Standard", tier: "standard", type: "veg", pricePerPlate: 1200, description: "A well-curated vegetarian spread with regional and continental favourites", minimumGuests: 50, items: [
    { category: "Starters", items: ["Paneer Tikka", "Veg Spring Rolls", "Corn Seekh Kebab", "Chaat Station"] },
    { category: "Mains", items: ["Dal Makhani", "Paneer Butter Masala", "Seasonal Vegetable", "Rice & Breads"] },
    { category: "Desserts", items: ["Gulab Jamun", "Ice Cream", "Fresh Fruit"] },
  ]},
  // Veg Premium
  { id: "veg-premium", name: "Garden Premium", tier: "premium", type: "veg", pricePerPlate: 1800, description: "An elevated vegetarian experience with live stations and artisanal preparations", minimumGuests: 50, items: [
    { category: "Starters", items: ["Stuffed Mushrooms", "Paneer Malai Tikka", "Veg Dim Sum", "Chaat & Pani Puri Station"] },
    { category: "Live Stations", items: ["Live Pasta Counter", "Live Dosa Station"] },
    { category: "Mains", items: ["Dal Bukhara", "Paneer Lababdar", "Thai Green Curry", "Biryani", "Assorted Breads"] },
    { category: "Desserts", items: ["Live Jalebi Station", "Phirni", "Pastries", "Ice Cream Counter"] },
  ]},
  // Veg Luxury
  { id: "veg-luxury", name: "Garden Luxury", tier: "luxury", type: "veg", pricePerPlate: 2800, description: "A grand vegetarian feast with global cuisine, live kitchens, and signature desserts", minimumGuests: 50, items: [
    { category: "Welcome", items: ["Welcome Drinks Station", "Canapé Service"] },
    { category: "Starters", items: ["Truffle Mushroom Crostini", "Paneer Peshawari", "Molecular Chaat", "Mezze Platter"] },
    { category: "Live Stations", items: ["Live Pizza Oven", "Live Asian Wok", "Live Chaat Counter", "Live Pasta"] },
    { category: "Mains", items: ["Dum Biryani", "Paneer Renaissance", "Thai Curry", "Mexican Bowl Station", "Artisan Breads"] },
    { category: "Desserts", items: ["Chocolate Fountain", "Artisan Pastry Counter", "Kulfi Station", "Live Crepe Station"] },
  ]},
  // Non-Veg Standard
  { id: "nonveg-standard", name: "Signature Standard", tier: "standard", type: "non_veg", pricePerPlate: 1500, description: "A hearty mix of vegetarian and non-vegetarian preparations", minimumGuests: 50, items: [
    { category: "Starters", items: ["Chicken Tikka", "Paneer Tikka", "Fish Amritsari", "Chaat Station"] },
    { category: "Mains", items: ["Butter Chicken", "Dal Makhani", "Mutton Rogan Josh", "Seasonal Vegetable", "Rice & Breads"] },
    { category: "Desserts", items: ["Gulab Jamun", "Ice Cream", "Fresh Fruit"] },
  ]},
  // Non-Veg Premium
  { id: "nonveg-premium", name: "Signature Premium", tier: "premium", type: "non_veg", pricePerPlate: 2200, description: "An elevated feast featuring live grills, premium cuts, and artisanal preparations", minimumGuests: 50, items: [
    { category: "Starters", items: ["Tandoori Prawns", "Chicken Malai Tikka", "Lamb Seekh", "Paneer Tikka", "Chaat Station"] },
    { category: "Live Stations", items: ["Live Grill Counter", "Live Pasta Station"] },
    { category: "Mains", items: ["Chicken Biryani", "Butter Chicken", "Lamb Curry", "Fish Curry", "Dal Makhani", "Assorted Breads"] },
    { category: "Desserts", items: ["Phirni", "Pastries", "Ice Cream Counter", "Live Jalebi"] },
  ]},
  // Non-Veg Luxury
  { id: "nonveg-luxury", name: "Signature Luxury", tier: "luxury", type: "non_veg", pricePerPlate: 3500, description: "A grand culinary experience with global cuisine, live kitchens, and premium selections", minimumGuests: 50, items: [
    { category: "Welcome", items: ["Signature Welcome Cocktails", "Butler-Passed Canapés"] },
    { category: "Starters", items: ["Grilled Prawns", "Lamb Chops", "Chicken Satay", "Sushi Selection", "Molecular Chaat"] },
    { category: "Live Stations", items: ["Live Tandoor & Grill", "Live Sushi Counter", "Live Asian Wok", "Live Pasta"] },
    { category: "Mains", items: ["Lobster Thermidor", "Lamb Biryani", "Chicken Roulade", "Fish Meunière", "Dal Bukhara", "Global Bread Basket"] },
    { category: "Desserts", items: ["Chocolate Fountain", "French Patisserie", "Kulfi & Rabdi", "Live Crepe Station", "Gelato Counter"] },
  ]},
];

export const enhancements: Enhancement[] = [
  { id: "basic-decor", name: "Standard Décor", description: "Elegant floral and fabric décor with lighting", priceRange: { min: 25000, max: 50000 }, category: "decor" },
  { id: "premium-decor", name: "Premium Décor", description: "Designer décor with floral installations, draping, and mood lighting", priceRange: { min: 75000, max: 200000 }, category: "decor" },
  { id: "luxury-decor", name: "Luxury Décor", description: "Bespoke designer décor with premium florals, installations, and custom elements", priceRange: { min: 200000, max: 500000 }, category: "decor" },
  { id: "cake", name: "Celebration Cake", description: "Custom designed celebration cake (2–5 kg)", priceRange: { min: 2000, max: 8000 }, category: "food" },
  { id: "dj", name: "DJ & Sound System", description: "Professional DJ with sound and lighting setup", priceRange: { min: 15000, max: 40000 }, category: "entertainment" },
  { id: "live-band", name: "Live Band / Singer", description: "Live musical performance by professional artists", priceRange: { min: 30000, max: 100000 }, category: "entertainment" },
  { id: "photography", name: "Photography & Videography", description: "Professional event photography and video coverage", priceRange: { min: 25000, max: 100000 }, category: "service" },
  { id: "kids-zone", name: "Kids' Activity Area", description: "Supervised activity zone for children at the event", priceRange: { min: 10000, max: 25000 }, category: "activity" },
  { id: "bonfire", name: "Bonfire Setup", description: "Evening bonfire with seating and marshmallow station", priceRange: { min: 5000, max: 10000 }, category: "activity" },
  { id: "welcome-drinks", name: "Welcome Drinks Station", description: "Curated mocktail and beverage welcome station", priceRange: { min: 5000, max: 15000 }, category: "food" },
  { id: "bar-service", name: "Bar & Beverage Service", description: "Full bar setup with bartender service", priceRange: { min: 30000, max: 80000 }, category: "food" },
  { id: "fireworks", name: "Fireworks Display", description: "Professional fireworks display (subject to permissions)", priceRange: { min: 25000, max: 75000 }, category: "entertainment" },
];

export const cuisineOptions = [
  "North Indian",
  "South Indian",
  "Mughlai",
  "Continental",
  "Italian",
  "Chinese / Asian",
  "Mexican",
  "Lebanese / Mediterranean",
] as const;

export const beverageOptions = [
  "Soft Beverages (Mocktails, Juices, Sodas)",
  "Tea & Coffee Station",
  "Welcome Drinks",
  "Standard Bar Package",
  "Premium Bar Package",
  "Luxury Bar Package",
] as const;
