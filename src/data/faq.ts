import { FAQItem } from "@/types";

export const faqs: FAQItem[] = [
  // General
  { id: "g1", question: "Where is Giovanni Village Resort located?", answer: "Giovanni Village Resort is located on Kerwa Dam Road, near Kerwa Dam, Bhopal, Madhya Pradesh 462044, India. The resort is approximately 15 km from Bhopal city centre and 25 km from Raja Bhoj Airport.", category: "general", sortOrder: 1 },
  { id: "g2", question: "How do I get to the resort from Bhopal city or the airport?", answer: "The resort is a 30-minute drive from Bhopal city centre and approximately 45 minutes from Raja Bhoj Airport. We can arrange private transfers on request. Self-drive guests will find ample complimentary parking at the resort.", category: "general", sortOrder: 2 },
  { id: "g3", question: "Is Giovanni Village Resort suitable for families with children?", answer: "Absolutely. We offer Family Cottages, a Kids' Activity Zone, a swimming pool with a children's area, cycling, nature trails, and child-friendly dining options. The resort is designed to be enjoyable for guests of all ages.", category: "general", sortOrder: 3 },
  { id: "g4", question: "Is the resort pet-friendly?", answer: "Currently, pets are not permitted on the resort premises. We are evaluating pet-friendly options for the future. Please contact us for the latest information.", category: "general", sortOrder: 4 },

  // Booking
  { id: "b1", question: "What are the check-in and check-out times?", answer: "Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available subject to availability and may incur additional charges.", category: "booking", sortOrder: 1 },
  { id: "b2", question: "What is the cancellation policy?", answer: "Standard rooms offer free cancellation up to 48 hours before check-in. Premium Suites offer free cancellation up to 72 hours before check-in. Cancellations within the free period will receive a full refund. Late cancellations may be subject to a charge equivalent to one night's stay.", category: "booking", sortOrder: 2 },
  { id: "b3", question: "Can I modify my booking after confirmation?", answer: "Yes, booking modifications are subject to availability. Please contact our reservations team at reservations@giovanniresort.com or call +91 755 000 0001 to request changes.", category: "booking", sortOrder: 3 },
  { id: "b4", question: "Do you offer any packages or special rates?", answer: "Yes, we offer seasonal packages, honeymoon packages, family getaway packages, and corporate rates. Visit our Packages page or contact reservations for current offers.", category: "booking", sortOrder: 4 },

  // Rooms
  { id: "r1", question: "What room types are available at the resort?", answer: "We offer four room categories: Superior Room (320 sq ft, garden view), Deluxe Room (420 sq ft, forest view), Premium Suite (680 sq ft, panoramic forest view with separate living area), and Family Cottage (800 sq ft, two bedrooms with private garden).", category: "rooms", sortOrder: 1 },
  { id: "r2", question: "Do all rooms include breakfast?", answer: "Yes, all room rates include complimentary breakfast at Terra, our all-day dining restaurant. Premium Suites include an enhanced breakfast experience.", category: "rooms", sortOrder: 2 },
  { id: "r3", question: "Is Wi-Fi available in the rooms?", answer: "Yes, complimentary high-speed Wi-Fi is available in all rooms and across the resort's public areas.", category: "rooms", sortOrder: 3 },

  // Events
  { id: "e1", question: "What types of events can be hosted at the resort?", answer: "Giovanni Village Resort hosts a wide range of events including weddings, receptions, engagement ceremonies, birthday parties, anniversary celebrations, corporate conferences, team offsites, cocktail evenings, pre-wedding functions (mehndi, sangeet, haldi), and family gatherings.", category: "events", sortOrder: 1 },
  { id: "e2", question: "What is the maximum guest capacity for events?", answer: "Our largest venue, The Grand Lawn, can accommodate up to 1,000 guests. The Banquet Hall seats up to 300 for dining. The Forest Terrace hosts up to 200 guests, and The Poolside Deck accommodates up to 150.", category: "events", sortOrder: 2 },
  { id: "e3", question: "Do you provide catering for events?", answer: "Yes, our in-house culinary team provides full catering services with customisable menus across vegetarian, non-vegetarian, and mixed options in standard, premium, and luxury tiers. We accommodate dietary requirements and can create bespoke menus.", category: "events", sortOrder: 3 },
  { id: "e4", question: "Can I plan and estimate my event budget online?", answer: "Yes, our Party Planner tool allows you to select your event type, venue, guest count, menu preferences, and optional enhancements to receive a tentative budget estimate. You can then submit your enquiry directly to our events team.", category: "events", sortOrder: 4 },

  // Dining
  { id: "d1", question: "What dining options are available at the resort?", answer: "The resort offers three dining experiences: Terra (all-day dining with Indian, continental, and Asian cuisine), Forest Grill (open-air specialty grill and tandoor, dinner only), and The Verandah Lounge (beverages, light bites, and desserts throughout the day).", category: "dining", sortOrder: 1 },
  { id: "d2", question: "Is room service available?", answer: "Yes, 24-hour room service is available for all in-house guests with a curated menu of meals, beverages, and snacks.", category: "dining", sortOrder: 2 },

  // Policies
  { id: "p1", question: "Is smoking permitted on the resort premises?", answer: "Smoking is permitted only in designated outdoor smoking areas. All indoor spaces, including rooms, restaurants, and event venues, are non-smoking.", category: "policies", sortOrder: 1 },
  { id: "p2", question: "What payment methods are accepted?", answer: "We accept all major credit and debit cards, UPI, net banking, and cash. International cards are accepted. For events, we also support bank transfers.", category: "policies", sortOrder: 2 },

  // Location
  { id: "l1", question: "What is there to do near the resort?", answer: "The resort is near Kerwa Dam (ideal for morning walks), Van Vihar National Park, Upper Lake, and Bhopal's cultural attractions including Bharat Bhavan and the Tribal Museum. Our concierge team can arrange visits and excursions.", category: "location", sortOrder: 1 },
  { id: "l2", question: "Is the resort near any tourist attractions?", answer: "Yes, Giovanni Village Resort is within easy reach of Kerwa Dam, Van Vihar National Park, Bhimbetka Rock Shelters (UNESCO site), Sanchi Stupa, and the cultural landmarks of Bhopal city.", category: "location", sortOrder: 2 },

  // Experiences
  { id: "x1", question: "Does the resort have a swimming pool?", answer: "Yes, the resort features a well-maintained outdoor swimming pool with a children's section, poolside loungers, and food and beverage service from The Verandah Lounge. Pool hours are 7:00 AM to 7:00 PM.", category: "experiences", sortOrder: 1 },
  { id: "x2", question: "Is there a spa at the resort?", answer: "Yes, the Giovanni Spa offers a range of Ayurvedic and contemporary wellness treatments including massages, aromatherapy, and couples' rituals. The spa is open daily from 9:00 AM to 8:00 PM. Advance booking is recommended.", category: "experiences", sortOrder: 2 },
];
