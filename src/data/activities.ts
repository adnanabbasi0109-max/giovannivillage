export interface Activity {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const activities: Activity[] = [
  {
    id: "croquet",
    name: "Old School Cool: Croquet",
    description: "Engage in a game of Crooke, a classic pastime with a Giovanni twist.",
    icon: "/images/experiences/activity-croquet.png",
  },
  {
    id: "scooters",
    name: "Retro Rides: Manual Scooters",
    description: "Kick, push, coast. Enjoy the simple pleasure of a manual scooter ride around the resort.",
    icon: "/images/experiences/activity-scooters.png",
  },
  {
    id: "kanche",
    name: "Next-Gen Marbles: Kanche Modern Version",
    description: "Experience the timeless game of Kanche, modernized for today's generation.",
    icon: "/images/experiences/activity-kanche.png",
  },
  {
    id: "board-games",
    name: "Board of Fun: Board Games",
    description: "Ludo, Carrom, Uno, Scrabble, Foosball — classic board games for all ages.",
    icon: "/images/experiences/activity-boardgames.png",
  },
  {
    id: "badminton",
    name: "Badminton & Tennikoit",
    description: "Serve, smash, and volley. Enjoy badminton and tennikoit on the resort grounds.",
    icon: "/images/experiences/activity-badminton.png",
  },
  {
    id: "cycling",
    name: "Ride & Glide: Cycling",
    description: "Explore the resort on two wheels through scenic forest trails and garden paths.",
    icon: "/images/experiences/activity-cycling.png",
  },
  {
    id: "frisbee",
    name: "Flying High: Frisbee",
    description: "Toss, catch, and have fun with frisbee on the resort's open lawns.",
    icon: "/images/experiences/activity-frisbee.png",
  },
  {
    id: "jhoola",
    name: "Swing High: Jhoolas",
    description: "Relax and swing on traditional jhoolas set amidst the resort gardens.",
    icon: "/images/experiences/activity-jhoola.png",
  },
];
