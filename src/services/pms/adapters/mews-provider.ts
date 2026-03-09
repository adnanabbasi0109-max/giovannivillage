/**
 * Mews PMS Provider Stub
 *
 * This is the RECOMMENDED primary PMS integration for Giovanni Village Resort.
 *
 * In production, this adapter would connect to the Mews Connector API:
 * https://mews-systems.gitbook.io/connector-api/
 *
 * Key integration points:
 * - Availability: GET /api/connector/v1/services/getAvailability
 * - Rates: GET /api/connector/v1/rates/getAll
 * - Reservations: POST /api/connector/v1/reservations/add
 * - Guest Profiles: /api/connector/v1/customers/*
 * - Room assignments: /api/connector/v1/reservations/addCompanion
 * - Payments: /api/connector/v1/payments/addCreditCardPayment
 *
 * Configuration required:
 * - MEWS_CLIENT_TOKEN: Your Mews API client token
 * - MEWS_ACCESS_TOKEN: Property-specific access token
 * - MEWS_BASE_URL: API base URL (demo or production)
 */

import type { PMSProvider } from "../types";

// Stub - implement with actual Mews API calls
export class MewsPMSProvider implements PMSProvider {
  readonly name = "mews";
  readonly version = "1.0.0";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async checkAvailability(): Promise<any> {
    throw new Error("Mews provider not yet configured. Set MEWS_CLIENT_TOKEN and MEWS_ACCESS_TOKEN environment variables.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getRates(): Promise<any> {
    throw new Error("Mews provider not yet configured.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async createReservation(): Promise<any> {
    throw new Error("Mews provider not yet configured.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getReservation(): Promise<any> {
    throw new Error("Mews provider not yet configured.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async cancelReservation(): Promise<any> {
    throw new Error("Mews provider not yet configured.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async modifyReservation(): Promise<any> {
    throw new Error("Mews provider not yet configured.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getGuestProfile(): Promise<any> {
    throw new Error("Mews provider not yet configured.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async createGuestProfile(): Promise<any> {
    throw new Error("Mews provider not yet configured.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async updateGuestProfile(): Promise<any> {
    throw new Error("Mews provider not yet configured.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getRoomTypes(): Promise<any> {
    throw new Error("Mews provider not yet configured.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getRoomStatus(): Promise<any> {
    throw new Error("Mews provider not yet configured.");
  }

  async healthCheck(): Promise<boolean> {
    return false;
  }
}
