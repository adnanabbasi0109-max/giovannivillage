/**
 * PMS Service Factory
 *
 * Creates the appropriate PMS provider based on configuration.
 * The frontend NEVER directly imports a specific provider.
 * Instead, it uses this factory to get a provider instance.
 *
 * ARCHITECTURE NOTES:
 * - Primary recommendation: Mews
 * - Fallback: Cloudbeds or equivalent
 * - Development: Mock provider (uses local data)
 *
 * The vendor-agnostic adapter pattern ensures:
 * 1. Frontend remains brand-owned and PMS-independent
 * 2. PMS can be swapped without frontend changes
 * 3. Multiple PMS systems can co-exist if needed
 * 4. Business logic stays in the website layer
 */

import type { PMSProvider } from "./types";
import { MockPMSProvider } from "./adapters/mock-provider";

type ProviderType = "mews" | "cloudbeds" | "mock";

let providerInstance: PMSProvider | null = null;

export function getPMSProvider(): PMSProvider {
  if (providerInstance) return providerInstance;

  const providerType = (process.env.NEXT_PUBLIC_PMS_PROVIDER || "mock") as ProviderType;

  switch (providerType) {
    case "mews":
      // In production: import and instantiate MewsPMSProvider
      // const { MewsPMSProvider } = await import("./adapters/mews-provider");
      // providerInstance = new MewsPMSProvider();
      console.warn("Mews provider selected but not configured. Falling back to mock.");
      providerInstance = new MockPMSProvider();
      break;

    case "cloudbeds":
      // Future: import and instantiate CloudbedsPMSProvider
      console.warn("Cloudbeds provider not yet implemented. Falling back to mock.");
      providerInstance = new MockPMSProvider();
      break;

    case "mock":
    default:
      providerInstance = new MockPMSProvider();
      break;
  }

  return providerInstance;
}

// Re-export types for convenience
export type { PMSProvider } from "./types";
export type {
  RateResponse,
  ReservationDetail,
  CancellationResponse,
  GuestProfile,
  RoomTypeInfo,
  RoomStatusInfo,
  HousekeepingAdapter,
  FolioAdapter,
  POSAdapter,
  EventLeadAdapter,
} from "./types";
