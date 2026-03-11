import { NextRequest, NextResponse } from "next/server";
import { sendBookingNotification } from "@/services/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      confirmationNumber,
      guestName,
      guestEmail,
      guestPhone,
      roomName,
      checkIn,
      checkOut,
      adults,
      children,
      nights,
      roomRate,
      addOns,
      subtotal,
      tax,
      grandTotal,
      specialRequests,
      arrivalTime,
    } = body;

    if (!confirmationNumber || !guestName || !guestEmail || !roomName) {
      return NextResponse.json(
        { error: "Missing required booking fields" },
        { status: 400 }
      );
    }

    const emailResult = await sendBookingNotification({
      confirmationNumber,
      guestName,
      guestEmail,
      guestPhone: guestPhone || "",
      roomName,
      checkIn,
      checkOut,
      adults: adults || 2,
      children: children || 0,
      nights: nights || 1,
      roomRate: roomRate || 0,
      addOns: addOns || [],
      subtotal: subtotal || 0,
      tax: tax || 0,
      grandTotal: grandTotal || 0,
      specialRequests,
      arrivalTime,
    });

    return NextResponse.json({
      success: true,
      emailSent: emailResult.success,
      confirmationNumber,
    });
  } catch (err) {
    console.error("Booking API error:", err);
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 }
    );
  }
}
