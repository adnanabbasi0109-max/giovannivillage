/**
 * Mock PMS Provider
 * Development/fallback provider that uses local data.
 * Replace with Mews, Cloudbeds, or other real provider in production.
 */

import type {
  PMSProvider,
  RateResponse,
  ReservationDetail,
  CancellationResponse,
  GuestProfile,
  RoomTypeInfo,
  RoomStatusInfo,
} from "../types";
import type {
  AvailabilityRequest,
  AvailabilityResponse,
  ReservationRequest,
  ReservationResponse,
  BookingGuestDetails,
} from "@/types";
import { rooms } from "@/data/rooms";
import { generateId } from "@/lib/utils";

export class MockPMSProvider implements PMSProvider {
  readonly name = "mock";
  readonly version = "1.0.0";

  async checkAvailability(request: AvailabilityRequest): Promise<AvailabilityResponse> {
    // Simulate availability based on local room data
    const availableRooms = rooms
      .filter((r) => r.isActive)
      .filter((r) => !request.roomTypeId || r.id === request.roomTypeId)
      .filter((r) => r.maxOccupancy >= request.adults + request.children)
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.shortDescription,
        maxOccupancy: r.maxOccupancy,
        rates: [
          {
            id: `rate-${r.id}-standard`,
            name: "Best Available Rate",
            amount: r.baseRate,
            currency: "INR",
            inclusions: r.inclusions,
            cancellationPolicy: r.policies.find((p) => p.title === "Cancellation")?.description || "Standard cancellation policy applies.",
            isRefundable: true,
            mealPlan: "Breakfast Included",
          },
        ],
        availability: Math.floor(Math.random() * 5) + 1,
        images: r.images,
        amenities: r.amenities.map((a) => a.name),
      }));

    return {
      roomTypes: availableRooms,
      currency: "INR",
    };
  }

  async getRates(roomTypeId: string): Promise<RateResponse[]> {
    const room = rooms.find((r) => r.id === roomTypeId);
    if (!room) return [];

    return [
      {
        rateId: `rate-${roomTypeId}-standard`,
        rateName: "Best Available Rate",
        amount: room.baseRate,
        currency: "INR",
        mealPlan: "Breakfast Included",
        cancellationPolicy: "Free cancellation up to 48 hours before check-in.",
        isRefundable: true,
        inclusions: room.inclusions,
      },
      {
        rateId: `rate-${roomTypeId}-flexible`,
        rateName: "Flexible Rate",
        amount: Math.round(room.baseRate * 1.15),
        currency: "INR",
        mealPlan: "Breakfast + Dinner",
        cancellationPolicy: "Free cancellation anytime before check-in.",
        isRefundable: true,
        inclusions: [...room.inclusions, "Dinner included"],
      },
    ];
  }

  async createReservation(request: ReservationRequest): Promise<ReservationResponse> {
    const confirmationNumber = `GVR-${generateId().toUpperCase()}`;
    return {
      confirmationNumber,
      status: "confirmed",
      checkIn: request.checkIn,
      checkOut: request.checkOut,
      roomType: request.roomTypeId,
      totalAmount: 0, // Calculated in real implementation
      currency: "INR",
      message: `Your reservation ${confirmationNumber} has been confirmed. We look forward to welcoming you to Giovanni Village Resort.`,
    };
  }

  async getReservation(confirmationNumber: string): Promise<ReservationDetail | null> {
    // In production, this would query the PMS
    return {
      confirmationNumber,
      status: "confirmed",
      checkIn: "2026-04-01",
      checkOut: "2026-04-03",
      roomType: "Deluxe Room",
      guestName: "Guest",
      guestEmail: "guest@example.com",
      totalAmount: 15998,
      currency: "INR",
      addOns: [],
      createdAt: new Date().toISOString(),
    };
  }

  async cancelReservation(confirmationNumber: string): Promise<CancellationResponse> {
    return {
      success: true,
      confirmationNumber,
      refundAmount: 0,
      message: "Your reservation has been cancelled successfully.",
    };
  }

  async modifyReservation(confirmationNumber: string): Promise<ReservationResponse> {
    return {
      confirmationNumber,
      status: "confirmed",
      checkIn: "",
      checkOut: "",
      roomType: "",
      totalAmount: 0,
      currency: "INR",
      message: "Reservation modified successfully.",
    };
  }

  async getGuestProfile(guestId: string): Promise<GuestProfile | null> {
    return {
      id: guestId,
      firstName: "Guest",
      lastName: "User",
      email: "guest@example.com",
      phone: "+91 0000000000",
      totalStays: 0,
      preferences: {},
    };
  }

  async createGuestProfile(details: BookingGuestDetails): Promise<GuestProfile> {
    return {
      id: generateId(),
      firstName: details.firstName,
      lastName: details.lastName,
      email: details.email,
      phone: details.phone,
      totalStays: 0,
      preferences: {},
    };
  }

  async updateGuestProfile(guestId: string, updates: Partial<BookingGuestDetails>): Promise<GuestProfile> {
    return {
      id: guestId,
      firstName: updates.firstName || "",
      lastName: updates.lastName || "",
      email: updates.email || "",
      phone: updates.phone || "",
      totalStays: 0,
      preferences: {},
    };
  }

  async getRoomTypes(): Promise<RoomTypeInfo[]> {
    return rooms.filter((r) => r.isActive).map((r) => ({
      id: r.id,
      name: r.name,
      description: r.shortDescription,
      maxOccupancy: r.maxOccupancy,
      totalRooms: 10,
      baseRate: r.baseRate,
      amenities: r.amenities.map((a) => a.name),
    }));
  }

  async getRoomStatus(): Promise<RoomStatusInfo[]> {
    return [];
  }

  async healthCheck(): Promise<boolean> {
    return true;
  }
}
