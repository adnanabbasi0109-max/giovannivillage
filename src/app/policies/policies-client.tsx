"use client";

import { PageHero } from "@/components/shared/page-hero";
import { globalSettings } from "@/data/global";

const policies = [
  {
    title: "Cancellation & Refund Policy",
    content: `King Rooms, Junior Suites, and Sunrise Cottage: Free cancellation up to 48 hours before check-in. Master Suite, Royal Suite, and Presidential Suite: Free cancellation up to 72 hours before check-in. Cancellations made within the free cancellation window will receive a full refund to the original payment method. Late cancellations or no-shows may be charged an amount equivalent to one night's stay. Modifications to bookings are subject to availability.`,
  },
  {
    title: "Check-In & Check-Out",
    content: `Check-in time: ${globalSettings.checkInTime}. Check-out time: ${globalSettings.checkOutTime}. Early check-in and late check-out requests are accommodated subject to availability and may incur additional charges. Please inform the front desk in advance if you require early or late accommodation.`,
  },
  {
    title: "Payment Policy",
    content: `We accept all major credit and debit cards, UPI, net banking, and cash. A valid credit card or advance payment is required at the time of booking to guarantee your reservation. For event bookings, a deposit is required to confirm the date, with the balance payable as per the event agreement. International cards are accepted.`,
  },
  {
    title: "Guest Conduct",
    content: `Giovanni Village Resort is committed to providing a peaceful and enjoyable environment for all guests. We kindly request that guests respect the property, fellow guests, and staff. Excessive noise, damage to property, or behaviour that disrupts other guests may result in a request to vacate the premises. The resort reserves the right to refuse service or ask guests to leave in cases of misconduct.`,
  },
  {
    title: "Smoking Policy",
    content: `All indoor spaces, including guest rooms, restaurants, and event venues, are non-smoking. Smoking is permitted only in designated outdoor smoking areas. Violation of this policy may result in a cleaning surcharge.`,
  },
  {
    title: "Pet Policy",
    content: `Pets are currently not permitted on the resort premises. Service animals are accommodated with prior notification. We are evaluating pet-friendly options for the future.`,
  },
  {
    title: "Privacy Policy",
    content: `Giovanni Village Resort respects your privacy and is committed to protecting your personal information. We collect personal data such as name, contact details, and payment information solely for the purpose of processing reservations, managing your stay, and improving our services. We do not share your data with third parties except as required for booking fulfilment, payment processing, or legal compliance. You may request access to, correction of, or deletion of your personal data by contacting us at ${globalSettings.contact.email}.`,
  },
  {
    title: "Terms of Use",
    content: `By using this website and booking services, you agree to these terms. All content on this website is the property of Giovanni Village Resort and may not be reproduced without permission. Rates displayed on the website are indicative and subject to change. The resort reserves the right to modify policies, rates, and availability without prior notice. All bookings are subject to the specific terms communicated at the time of reservation.`,
  },
  {
    title: "Liability",
    content: `Giovanni Village Resort takes all reasonable precautions for the safety and security of guests and their belongings. However, the resort is not liable for loss or damage to personal property. Guests are advised to use in-room safes for valuables. Participation in resort activities is at the guest's own risk.`,
  },
];

export function PoliciesClient() {
  return (
    <>
      <PageHero
        label="Policies"
        title="Policies & Terms"
        subtitle="Our commitment to transparency, fairness, and your peace of mind."
        breadcrumbs={[{ label: "Policies", href: "/policies" }]}
        compact
      />

      <section className="section-padding">
        <div className="container-luxury max-w-3xl">
          <div className="space-y-10">
            {policies.map((policy) => (
              <div key={policy.title} id={policy.title.toLowerCase().replace(/\s+/g, "-")}>
                <h2 className="font-heading text-xl font-semibold text-earth-900 mb-3">
                  {policy.title}
                </h2>
                <p className="text-sm text-earth-600 leading-relaxed whitespace-pre-line">
                  {policy.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-ivory-100 rounded-xl text-center">
            <p className="text-sm text-earth-600">
              Last updated: March 2026. For questions about our policies, please contact us at{" "}
              <a href={`mailto:${globalSettings.contact.email}`} className="text-gold-600 hover:underline">
                {globalSettings.contact.email}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
