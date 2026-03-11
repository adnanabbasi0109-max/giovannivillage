import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface BookingEmailData {
  confirmationNumber: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  nights: number;
  roomRate: number;
  addOns: { name: string; price: number }[];
  subtotal: number;
  tax: number;
  grandTotal: number;
  specialRequests?: string;
  arrivalTime?: string;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function buildEmailHtml(data: BookingEmailData): string {
  const addOnsRows = data.addOns.length
    ? data.addOns
        .map(
          (a) =>
            `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;">${a.name}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;text-align:right;">${formatCurrency(a.price)}</td></tr>`
        )
        .join("")
    : "";

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:Georgia,serif;background:#f5f0eb;color:#3d3427;">
  <div style="max-width:600px;margin:20px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
    <div style="background:#3d3427;padding:24px;text-align:center;">
      <h1 style="color:#c9a84c;margin:0;font-size:22px;letter-spacing:2px;">GIOVANNI VILLAGE RESORT</h1>
      <p style="color:#d4c9b0;margin:6px 0 0;font-size:13px;letter-spacing:1px;">NEW BOOKING RECEIVED</p>
    </div>
    <div style="padding:28px;">
      <p style="margin:0 0 4px;font-size:13px;color:#8a7d6b;">Confirmation Number</p>
      <p style="margin:0 0 20px;font-size:20px;font-weight:bold;color:#3d3427;letter-spacing:1px;">${data.confirmationNumber}</p>

      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
        <tr style="background:#f9f6f1;">
          <td style="padding:10px 12px;font-weight:bold;" colspan="2">Guest Details</td>
        </tr>
        <tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#8a7d6b;width:40%;">Name</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${data.guestName}</td></tr>
        <tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#8a7d6b;">Email</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${data.guestEmail}</td></tr>
        <tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#8a7d6b;">Phone</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${data.guestPhone}</td></tr>
        ${data.arrivalTime ? `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#8a7d6b;">Arrival Time</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${data.arrivalTime}</td></tr>` : ""}
        ${data.specialRequests ? `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#8a7d6b;">Special Requests</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${data.specialRequests}</td></tr>` : ""}
      </table>

      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
        <tr style="background:#f9f6f1;">
          <td style="padding:10px 12px;font-weight:bold;" colspan="2">Stay Details</td>
        </tr>
        <tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#8a7d6b;width:40%;">Room</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${data.roomName}</td></tr>
        <tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#8a7d6b;">Check-in</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${data.checkIn}</td></tr>
        <tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#8a7d6b;">Check-out</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${data.checkOut}</td></tr>
        <tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#8a7d6b;">Nights</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${data.nights}</td></tr>
        <tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#8a7d6b;">Guests</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${data.adults} Adult${data.adults > 1 ? "s" : ""}${data.children > 0 ? `, ${data.children} Child${data.children > 1 ? "ren" : ""}` : ""}</td></tr>
      </table>

      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
        <tr style="background:#f9f6f1;">
          <td style="padding:10px 12px;font-weight:bold;">Pricing</td>
          <td style="padding:10px 12px;font-weight:bold;text-align:right;">Amount</td>
        </tr>
        <tr><td style="padding:6px 12px;border-bottom:1px solid #eee;">Room (${data.nights} night${data.nights > 1 ? "s" : ""} x ${formatCurrency(data.roomRate)})</td><td style="padding:6px 12px;border-bottom:1px solid #eee;text-align:right;">${formatCurrency(data.roomRate * data.nights)}</td></tr>
        ${addOnsRows}
        <tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#8a7d6b;">Subtotal</td><td style="padding:6px 12px;border-bottom:1px solid #eee;text-align:right;">${formatCurrency(data.subtotal)}</td></tr>
        <tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#8a7d6b;">Tax (18% GST)</td><td style="padding:6px 12px;border-bottom:1px solid #eee;text-align:right;">${formatCurrency(data.tax)}</td></tr>
        <tr style="background:#f9f6f1;"><td style="padding:10px 12px;font-weight:bold;font-size:16px;">Grand Total</td><td style="padding:10px 12px;font-weight:bold;font-size:16px;text-align:right;color:#c9a84c;">${formatCurrency(data.grandTotal)}</td></tr>
      </table>
    </div>
    <div style="background:#f9f6f1;padding:16px;text-align:center;font-size:12px;color:#8a7d6b;">
      Giovanni Village Resort &bull; 410, Village Kalapani, Kolar Road, Bhopal, MP 462042
    </div>
  </div>
</body>
</html>`;
}

export async function sendBookingNotification(
  data: BookingEmailData
): Promise<{ success: boolean; error?: string }> {
  const notifyEmail = process.env.BOOKING_NOTIFY_EMAIL;

  if (!notifyEmail) {
    console.warn("BOOKING_NOTIFY_EMAIL not set — skipping email notification");
    return { success: false, error: "Notification email not configured" };
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("SMTP credentials not set — skipping email notification");
    return { success: false, error: "SMTP credentials not configured" };
  }

  try {
    await transporter.sendMail({
      from: `"Giovanni Village Resort" <${process.env.SMTP_USER}>`,
      to: notifyEmail,
      subject: `New Booking: ${data.confirmationNumber} — ${data.guestName}`,
      html: buildEmailHtml(data),
    });

    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown email error";
    console.error("Failed to send booking email:", message);
    return { success: false, error: message };
  }
}
