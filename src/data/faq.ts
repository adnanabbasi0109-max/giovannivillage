import { FAQItem } from "@/types";

export const faqs: FAQItem[] = [
  // General
  { id: "g1", question: "Where is Giovanni Village Resort located?", answer: "Giovanni Village Resort is located at 410, Village Kalapani, Kolar Road, Bhopal, Madhya Pradesh 462042, India. The resort is near the Ratapani Wildlife Sanctuary and easily accessible from Bhopal city.", category: "general", sortOrder: 1 },
  { id: "g2", question: "How do I get to the resort from Bhopal city or the airport?", answer: "The resort is a 30-minute drive from Bhopal city centre and approximately 45 minutes from Raja Bhoj Airport. We can arrange private transfers on request. Self-drive guests will find ample complimentary parking at the resort.", category: "general", sortOrder: 2 },
  { id: "g3", question: "Is Giovanni Village Resort suitable for families with children?", answer: "Absolutely. We offer the Sunrise Cottage with Forest View and spacious King Rooms, a Kids' Activity Zone, a swimming pool with a children's area, cycling, nature trails, and child-friendly dining options. The resort is designed to be enjoyable for guests of all ages.", category: "general", sortOrder: 3 },
  { id: "g4", question: "Is the resort pet-friendly?", answer: "Currently, pets are not permitted on the resort premises. We are evaluating pet-friendly options for the future. Please contact us for the latest information.", category: "general", sortOrder: 4 },

  // Booking
  { id: "b1", question: "What are the check-in and check-out times?", answer: "Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available subject to availability and may incur additional charges.", category: "booking", sortOrder: 1 },
  { id: "b2", question: "What is the cancellation policy?", answer: "King Rooms, Junior Suites, and Cottages offer free cancellation up to 48 hours before check-in. Master Suite, Royal Suite, and Presidential Suite offer free cancellation up to 72 hours before check-in. Cancellations within the free period will receive a full refund. Late cancellations may be subject to a charge equivalent to one night's stay.", category: "booking", sortOrder: 2 },
  { id: "b3", question: "Can I modify my booking after confirmation?", answer: "Yes, booking modifications are subject to availability. Please contact our reservations team at reservations@giovannivillage.com or call +91 90390 37300 to request changes.", category: "booking", sortOrder: 3 },
  { id: "b4", question: "Do you offer any packages or special rates?", answer: "Yes, we offer seasonal packages, honeymoon packages, family getaway packages, and corporate rates. Visit our Packages page or contact reservations for current offers.", category: "booking", sortOrder: 4 },

  // Rooms
  { id: "r1", question: "What room types are available at the resort?", answer: "We offer a range of accommodations: King Room - Pool & Garden View (430 sq ft), King Room with Private Garden (700 sq ft), Junior Suites with Deck (540-700 sq ft), Junior Suites with Open to Sky Bath Tub or Plunge Pool (530 sq ft), Master Suite, Sunrise Cottage with Forest View, Royal Suite with Plunge Pool & Private Garden (1,100 sq ft + 2,000 sq ft lawn), and Presidential Suite with Plunge Pool & Private Garden (1,200 sq ft + 8,000 sq ft lawn).", category: "rooms", sortOrder: 1 },
  { id: "r2", question: "Do all rooms include breakfast?", answer: "Yes, all room rates include complimentary breakfast at Gourmet By The Woods, our fine dining restaurant. Royal and Presidential Suites include an enhanced premium breakfast experience.", category: "rooms", sortOrder: 2 },
  { id: "r3", question: "Is Wi-Fi available in the rooms?", answer: "Yes, complimentary high-speed Wi-Fi is available in all rooms and across the resort's public areas.", category: "rooms", sortOrder: 3 },

  // Events
  { id: "e1", question: "What types of events can be hosted at the resort?", answer: "Giovanni Village Resort hosts a wide range of events including weddings, receptions, engagement ceremonies, birthday parties, anniversary celebrations, corporate conferences, team offsites, cocktail evenings, pre-wedding functions (mehndi, sangeet, haldi), and family gatherings.", category: "events", sortOrder: 1 },
  { id: "e2", question: "What is the maximum guest capacity for events?", answer: "Our largest venue, The Aria, can accommodate up to 5,000 guests with its 10,000 sq ft pillarless banquet hall and 50,000 sq ft attached lawn. Sudesh Lawns host up to 3,000 guests, the Cocktail Lawn seats 200, and the Poolside Lawn accommodates up to 100.", category: "events", sortOrder: 2 },
  { id: "e3", question: "Do you provide catering for events?", answer: "Yes, our in-house culinary team provides full catering services with customisable menus across vegetarian, non-vegetarian, and mixed options in standard, premium, and luxury tiers. We accommodate dietary requirements and can create bespoke menus.", category: "events", sortOrder: 3 },
  { id: "e4", question: "Can I plan and estimate my event budget online?", answer: "Yes, our Party Planner tool allows you to select your event type, venue, guest count, menu preferences, and optional enhancements to receive a tentative budget estimate. You can then submit your enquiry directly to our events team.", category: "events", sortOrder: 4 },

  // Dining
  { id: "d1", question: "What dining options are available at the resort?", answer: "The resort offers four dining experiences: Gourmet By The Woods (fine dining with international cuisine), Pihu (rooftop restaurant with candle-lit dinners and stargazing), Berry & Beans (all-day cafe with light bites and pastries), and The Den (bistro bar with comfort food and live sports).", category: "dining", sortOrder: 1 },
  { id: "d2", question: "Is room service available?", answer: "Yes, 24-hour room service is available for all in-house guests with a curated menu of meals, beverages, and snacks.", category: "dining", sortOrder: 2 },

  // Policies
  { id: "p1", question: "Is smoking permitted on the resort premises?", answer: "Smoking is permitted only in designated outdoor smoking areas. All indoor spaces, including rooms, restaurants, and event venues, are non-smoking.", category: "policies", sortOrder: 1 },
  { id: "p2", question: "What payment methods are accepted?", answer: "We accept all major credit and debit cards, UPI, net banking, and cash. International cards are accepted. For events, we also support bank transfers.", category: "policies", sortOrder: 2 },

  // Location
  { id: "l1", question: "What is there to do near the resort?", answer: "The resort is near Kerwa Dam (ideal for morning walks), Van Vihar National Park, Upper Lake, and Bhopal's cultural attractions including Bharat Bhavan and the Tribal Museum. Our concierge team can arrange visits and excursions.", category: "location", sortOrder: 1 },
  { id: "l2", question: "Is the resort near any tourist attractions?", answer: "Yes, Giovanni Village Resort is within easy reach of Kerwa Dam, Van Vihar National Park, Bhimbetka Rock Shelters (UNESCO site), Sanchi Stupa, and the cultural landmarks of Bhopal city.", category: "location", sortOrder: 2 },

  // Experiences
  { id: "x1", question: "Does the resort have a swimming pool?", answer: "Yes, the resort features a well-maintained outdoor swimming pool with a children's section, poolside loungers, and food and beverage service. Pool hours are 7:00 AM to 7:00 PM.", category: "experiences", sortOrder: 1 },
  { id: "x2", question: "Is there a spa at the resort?", answer: "Yes, the Elysium Spa offers a range of wellness treatments including massages, facials, yoga, and meditation sessions. The spa is open daily from 9:00 AM to 8:00 PM. Advance booking is recommended.", category: "experiences", sortOrder: 2 },
];
