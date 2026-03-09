// ============================================
// Giovanni Village Resort - Type Definitions
// CMS-ready, PMS-ready, vendor-agnostic
// ============================================

// ---- Global / Brand ----
export interface GlobalSettings {
  siteName: string;
  tagline: string;
  description: string;
  logo: ImageAsset;
  logoAlt: ImageAsset;
  favicon: string;
  contact: ContactInfo;
  social: SocialLinks;
  address: Address;
  coordinates: { lat: number; lng: number };
  checkInTime: string;
  checkOutTime: string;
  currency: string;
  timezone: string;
  whatsappNumber: string;
  bookingEmail: string;
  eventsEmail: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  reservationPhone: string;
  eventsPhone: string;
  whatsapp: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
  tripadvisor?: string;
  google?: string;
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  landmark?: string;
  fullAddress: string;
  mapUrl: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataUrl?: string;
}

// ---- Rooms & Stay ----
export interface RoomCategory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  tagline: string;
  images: ImageAsset[];
  heroImage: ImageAsset;
  maxOccupancy: number;
  maxAdults: number;
  maxChildren: number;
  sizeSqFt: number;
  bedType: string;
  viewType: string;
  floorLevel?: string;
  baseRate: number;
  rackRate: number;
  amenities: Amenity[];
  features: string[];
  inclusions: string[];
  policies: RoomPolicy[];
  addOns: AddOn[];
  isActive: boolean;
  sortOrder: number;
  seo: SEOData;
  schema: Record<string, unknown>;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  category: "comfort" | "bathroom" | "technology" | "dining" | "outdoor" | "safety";
}

export interface RoomPolicy {
  title: string;
  description: string;
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  priceUnit: "per_night" | "per_stay" | "per_person" | "flat";
  category: "dining" | "spa" | "decor" | "activity" | "celebration" | "transfer" | "other";
  image?: ImageAsset;
  isAvailable: boolean;
}

// ---- Packages / Offers ----
export interface Package {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: ImageAsset;
  validFrom: string;
  validTo: string;
  roomCategories: string[];
  inclusions: string[];
  price: number;
  originalPrice?: number;
  minNights: number;
  maxNights?: number;
  terms: string[];
  isActive: boolean;
  seo: SEOData;
}

// ---- Venues & Events ----
export interface Venue {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  tagline: string;
  images: ImageAsset[];
  heroImage: ImageAsset;
  capacity: VenueCapacity;
  venueType: "indoor" | "outdoor" | "covered_outdoor" | "mixed";
  idealFor: EventType[];
  features: string[];
  amenities: string[];
  layoutOptions: LayoutOption[];
  rentalBasis: "hourly" | "half_day" | "full_day" | "per_event";
  basePrice: number;
  addOns: AddOn[];
  isActive: boolean;
  sortOrder: number;
  seo: SEOData;
  schema: Record<string, unknown>;
  faq: FAQItem[];
}

export interface VenueCapacity {
  min: number;
  max: number;
  seated: number;
  standing: number;
  theatre?: number;
  classroom?: number;
  ushape?: number;
  boardroom?: number;
}

export interface LayoutOption {
  name: string;
  capacity: number;
  description: string;
  image?: ImageAsset;
}

export type EventType =
  | "wedding"
  | "reception"
  | "engagement"
  | "mehndi"
  | "sangeet"
  | "haldi"
  | "anniversary"
  | "birthday"
  | "corporate"
  | "conference"
  | "offsite"
  | "cocktail"
  | "family_gathering"
  | "reunion"
  | "pre_wedding"
  | "custom";

// ---- Party Planner ----
export interface PartyPlannerState {
  step: number;
  eventType: EventType | null;
  venue: string | null;
  date: string | null;
  guestCount: number | null;
  menuType: MenuType | null;
  menuTier: MenuTier | null;
  cuisines: string[];
  desserts: string[];
  beverages: string[];
  liveCounters: string[];
  enhancements: Enhancement[];
  estimatedBudget: BudgetEstimate | null;
  contactInfo: EventContactInfo | null;
  notes: string;
}

export type MenuType = "veg" | "non_veg" | "mixed";
export type MenuTier = "standard" | "premium" | "luxury";

export interface Enhancement {
  id: string;
  name: string;
  description: string;
  priceRange: { min: number; max: number };
  category: "decor" | "entertainment" | "food" | "activity" | "service";
  image?: ImageAsset;
}

export interface BudgetEstimate {
  venueCost: { min: number; max: number };
  menuCost: { min: number; max: number };
  enhancementsCost: { min: number; max: number };
  subtotal: { min: number; max: number };
  taxEstimate: { min: number; max: number };
  total: { min: number; max: number };
}

export interface EventContactInfo {
  name: string;
  phone: string;
  email: string;
  notes?: string;
}

// ---- Dining ----
export interface DiningOutlet {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  cuisine: string[];
  mealTypes: ("breakfast" | "lunch" | "dinner" | "all_day" | "bar")[];
  timings: string;
  images: ImageAsset[];
  heroImage: ImageAsset;
  features: string[];
  ambience: string;
  dressCode?: string;
  reservationRequired: boolean;
  isActive: boolean;
  seo: SEOData;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory?: string;
  isVeg: boolean;
  isSignature: boolean;
  image?: ImageAsset;
  allergens?: string[];
}

// ---- Experiences ----
export interface Experience {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: "spa" | "nature" | "adventure" | "family" | "wellness" | "culture" | "leisure";
  duration: string;
  price?: number;
  priceNote?: string;
  images: ImageAsset[];
  heroImage: ImageAsset;
  highlights: string[];
  inclusions: string[];
  availability: string;
  bookable: boolean;
  isActive: boolean;
  seo: SEOData;
}

// ---- Gallery ----
export interface GalleryImage {
  id: string;
  image: ImageAsset;
  category: "resort" | "rooms" | "dining" | "events" | "nature" | "experiences" | "weddings";
  caption?: string;
  sortOrder: number;
}

// ---- Testimonials ----
export interface Testimonial {
  id: string;
  guestName: string;
  guestLocation?: string;
  rating: number;
  text: string;
  stayType?: string;
  date: string;
  image?: ImageAsset;
  source?: "google" | "tripadvisor" | "direct" | "booking";
  isHighlighted: boolean;
}

// ---- FAQ ----
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "booking" | "rooms" | "events" | "dining" | "policies" | "location" | "experiences";
  sortOrder: number;
}

// ---- Policies ----
export interface Policy {
  id: string;
  slug: string;
  title: string;
  content: string;
  lastUpdated: string;
  sortOrder: number;
}

// ---- Journal / Blog ----
export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  heroImage: ImageAsset;
  images: ImageAsset[];
  category: string;
  tags: string[];
  isPublished: boolean;
  seo: SEOData;
  relatedPosts: string[];
}

// ---- SEO ----
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

// ---- Booking ----
export interface BookingSearchParams {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  promoCode?: string;
}

export interface BookingRoom {
  roomCategory: RoomCategory;
  rateId: string;
  rateName: string;
  rateAmount: number;
  originalAmount?: number;
  inclusions: string[];
  cancellationPolicy: string;
  addOns: SelectedAddOn[];
}

export interface SelectedAddOn {
  addOn: AddOn;
  quantity: number;
  totalPrice: number;
}

export interface BookingGuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests?: string;
  arrivalTime?: string;
  address?: {
    line1: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
}

export interface BookingState {
  step: 1 | 2 | 3;
  search: BookingSearchParams | null;
  selectedRoom: BookingRoom | null;
  guestDetails: BookingGuestDetails | null;
  totalAmount: number;
  taxAmount: number;
  grandTotal: number;
}

// ---- Event Lead ----
export interface EventLead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  eventType: EventType;
  preferredDate: string;
  alternateDate?: string;
  guestCount: number;
  venuePreference?: string;
  budget?: string;
  message?: string;
  source: "website" | "party_planner" | "enquiry_form" | "whatsapp";
  status?: "new" | "contacted" | "qualified" | "proposal_sent" | "confirmed" | "lost";
  createdAt?: string;
}

// ---- PMS Integration ----
export interface PMSConfig {
  provider: "mews" | "cloudbeds" | "ezeesoftware" | "mock";
  apiBaseUrl: string;
  apiKey: string;
  propertyId: string;
  ratePlanMapping: Record<string, string>;
  roomTypeMapping: Record<string, string>;
}

export interface AvailabilityRequest {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomTypeId?: string;
}

export interface AvailabilityResponse {
  roomTypes: AvailableRoomType[];
  currency: string;
}

export interface AvailableRoomType {
  id: string;
  name: string;
  description: string;
  maxOccupancy: number;
  rates: Rate[];
  availability: number;
  images: ImageAsset[];
  amenities: string[];
}

export interface Rate {
  id: string;
  name: string;
  amount: number;
  originalAmount?: number;
  currency: string;
  inclusions: string[];
  cancellationPolicy: string;
  isRefundable: boolean;
  mealPlan: string;
}

export interface ReservationRequest {
  checkIn: string;
  checkOut: string;
  roomTypeId: string;
  rateId: string;
  guestDetails: BookingGuestDetails;
  addOns: SelectedAddOn[];
  specialRequests?: string;
  promoCode?: string;
}

export interface ReservationResponse {
  confirmationNumber: string;
  status: "confirmed" | "pending" | "failed";
  checkIn: string;
  checkOut: string;
  roomType: string;
  totalAmount: number;
  currency: string;
  message: string;
}

// ---- Menu Package (Party Planner) ----
export interface MenuPackage {
  id: string;
  name: string;
  tier: MenuTier;
  type: MenuType;
  pricePerPlate: number;
  description: string;
  items: MenuPackageItem[];
  minimumGuests: number;
}

export interface MenuPackageItem {
  category: string;
  items: string[];
}

// ---- Homepage Section ----
export interface HomepageSection {
  id: string;
  type: string;
  isVisible: boolean;
  sortOrder: number;
  content: Record<string, unknown>;
}
