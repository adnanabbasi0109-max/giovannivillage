// ============================================
// PMS Provider Interface
// Vendor-agnostic adapter architecture
// ============================================

import type {
  AvailabilityRequest,
  AvailabilityResponse,
  ReservationRequest,
  ReservationResponse,
  BookingGuestDetails,
} from "@/types";

/**
 * Core PMS Provider interface.
 * All PMS integrations (Mews, Cloudbeds, etc.) implement this interface.
 * The frontend ONLY interacts through this abstraction.
 */
export interface PMSProvider {
  readonly name: string;
  readonly version: string;

  // Availability & Rates
  checkAvailability(request: AvailabilityRequest): Promise<AvailabilityResponse>;
  getRates(roomTypeId: string, checkIn: string, checkOut: string): Promise<RateResponse[]>;

  // Reservations
  createReservation(request: ReservationRequest): Promise<ReservationResponse>;
  getReservation(confirmationNumber: string): Promise<ReservationDetail | null>;
  cancelReservation(confirmationNumber: string, reason?: string): Promise<CancellationResponse>;
  modifyReservation(confirmationNumber: string, updates: Partial<ReservationRequest>): Promise<ReservationResponse>;

  // Guest Management
  getGuestProfile(guestId: string): Promise<GuestProfile | null>;
  createGuestProfile(details: BookingGuestDetails): Promise<GuestProfile>;
  updateGuestProfile(guestId: string, updates: Partial<BookingGuestDetails>): Promise<GuestProfile>;

  // Room/Inventory
  getRoomTypes(): Promise<RoomTypeInfo[]>;
  getRoomStatus(date: string): Promise<RoomStatusInfo[]>;

  // Health Check
  healthCheck(): Promise<boolean>;
}

// ---- Supporting Types ----

export interface RateResponse {
  rateId: string;
  rateName: string;
  amount: number;
  currency: string;
  mealPlan: string;
  cancellationPolicy: string;
  isRefundable: boolean;
  inclusions: string[];
}

export interface ReservationDetail {
  confirmationNumber: string;
  status: "confirmed" | "checked_in" | "checked_out" | "cancelled" | "no_show";
  checkIn: string;
  checkOut: string;
  roomType: string;
  roomNumber?: string;
  guestName: string;
  guestEmail: string;
  totalAmount: number;
  currency: string;
  addOns: string[];
  specialRequests?: string;
  createdAt: string;
}

export interface CancellationResponse {
  success: boolean;
  confirmationNumber: string;
  refundAmount?: number;
  message: string;
}

export interface GuestProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality?: string;
  totalStays: number;
  preferences: Record<string, string>;
}

export interface RoomTypeInfo {
  id: string;
  name: string;
  description: string;
  maxOccupancy: number;
  totalRooms: number;
  baseRate: number;
  amenities: string[];
}

export interface RoomStatusInfo {
  roomNumber: string;
  roomType: string;
  status: "available" | "occupied" | "maintenance" | "cleaning";
  guestName?: string;
  checkOut?: string;
}

// ---- Adapter Placeholder Interfaces ----
// These extend the core for specific operational needs

export interface HousekeepingAdapter {
  getRoomCleaningStatus(roomNumber: string): Promise<string>;
  updateCleaningStatus(roomNumber: string, status: string): Promise<void>;
  getCleaningQueue(): Promise<string[]>;
}

export interface FolioAdapter {
  getGuestFolio(reservationId: string): Promise<FolioEntry[]>;
  addCharge(reservationId: string, charge: ChargeEntry): Promise<void>;
  processPayment(reservationId: string, amount: number, method: string): Promise<void>;
}

export interface POSAdapter {
  createOrder(outletId: string, items: POSItem[], roomNumber?: string): Promise<string>;
  chargeToRoom(orderId: string, roomNumber: string): Promise<void>;
  getOutletOrders(outletId: string, date: string): Promise<POSOrder[]>;
}

export interface EventLeadAdapter {
  createLead(lead: EventLeadData): Promise<string>;
  updateLead(leadId: string, updates: Partial<EventLeadData>): Promise<void>;
  getLeads(filters: EventLeadFilter): Promise<EventLeadData[]>;
}

export interface FolioEntry {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: "charge" | "payment" | "adjustment";
}

export interface ChargeEntry {
  description: string;
  amount: number;
  category: string;
  outlet?: string;
}

export interface POSItem {
  itemId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface POSOrder {
  id: string;
  items: POSItem[];
  total: number;
  status: string;
  roomCharge?: string;
}

export interface EventLeadData {
  id?: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  guestCount: number;
  venue?: string;
  budget?: string;
  notes?: string;
  status: string;
  source: string;
  createdAt: string;
}

export interface EventLeadFilter {
  status?: string;
  eventType?: string;
  dateFrom?: string;
  dateTo?: string;
}
