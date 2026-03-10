import classFirst from "@/assets/class-first.webp";
import classBusiness from "@/assets/class-business.webp";
import classPremiumEconomy from "@/assets/class-premium-economy.webp";
import classEconomy from "@/assets/class-economy.webp";

export interface Property {
  slug: string;
  name: string;
  category: string;
  priceFrom: string;
  image: string;
  tagline: string;
  description: string;
  details: { label: string; value: string }[];
  highlights: string[];
}

export const properties: Property[] = [
  {
    slug: "first-class",
    name: "First Class",
    category: "Cabin Class",
    priceFrom: "from $4,200 one-way",
    image: classFirst,
    tagline: "The pinnacle of air travel.",
    description:
      "Experience unparalleled luxury at 40,000 feet. Private suites with closing doors, lie-flat beds, personal dining with multi-course meals prepared by award-winning chefs, and dedicated cabin crew for every two passengers.",
    details: [
      { label: "Seat Type", value: "Private Suite with Door" },
      { label: "Seat Pitch", value: "86 inches" },
      { label: "Bed Length", value: "6'8\" Lie-Flat" },
      { label: "Entertainment", value: '32" HD Screen' },
      { label: "Baggage", value: "3 × 32kg Checked" },
      { label: "Lounge Access", value: "First Class Lounge" },
    ],
    highlights: [
      "Private suite with sliding door and window",
      "Multi-course à la carte dining with sommelier-selected wines",
      "Chauffeur service to and from the airport",
      "Exclusive First Class lounge with spa treatments",
      "Pajamas, amenity kit by luxury designer brand",
    ],
  },
  {
    slug: "business-class",
    name: "Business Class",
    category: "Cabin Class",
    priceFrom: "from $2,100 one-way",
    image: classBusiness,
    tagline: "Work. Rest. Arrive refreshed.",
    description:
      "Lie-flat seats with direct aisle access, premium dining, noise-cancelling headphones, and access to our worldwide network of Business lounges. Designed for travelers who value both productivity and comfort.",
    details: [
      { label: "Seat Type", value: "Lie-Flat with Aisle Access" },
      { label: "Seat Pitch", value: "78 inches" },
      { label: "Bed Length", value: "6'4\" Lie-Flat" },
      { label: "Entertainment", value: '18" HD Screen' },
      { label: "Baggage", value: "2 × 32kg Checked" },
      { label: "Lounge Access", value: "Business Lounge" },
    ],
    highlights: [
      "Lie-flat bed with direct aisle access in 1-2-1 configuration",
      "Three-course dining with restaurant-quality presentation",
      "Premium noise-cancelling headphones",
      "Business lounge access with showers and workspaces",
      "Priority check-in, boarding, and baggage delivery",
    ],
  },
  {
    slug: "premium-economy",
    name: "Premium Economy",
    category: "Cabin Class",
    priceFrom: "from $890 one-way",
    image: classPremiumEconomy,
    tagline: "More space. More comfort.",
    description:
      "Enjoy extra legroom, wider seats, enhanced meal service, and priority boarding in a dedicated cabin. The perfect balance of comfort and value for long-haul travel.",
    details: [
      { label: "Seat Type", value: "Wide Recliner" },
      { label: "Seat Pitch", value: "38 inches" },
      { label: "Seat Width", value: '19.5"' },
      { label: "Entertainment", value: '13" HD Screen' },
      { label: "Baggage", value: "2 × 23kg Checked" },
      { label: "Lounge Access", value: "Available for Purchase" },
    ],
    highlights: [
      "Up to 50% more legroom than Economy",
      "Wider leather seats with adjustable headrest and leg rest",
      "Enhanced meal service with complimentary drinks",
      "Priority boarding and dedicated overhead bin space",
      "Amenity kit and noise-reducing headphones",
    ],
  },
  {
    slug: "economy-class",
    name: "Economy Class",
    category: "Cabin Class",
    priceFrom: "from $320 one-way",
    image: classEconomy,
    tagline: "Comfort for everyone.",
    description:
      "Modern seats with personal entertainment screens, complimentary meals on long-haul flights, USB charging, and our award-winning cabin crew service. Great value without compromising on quality.",
    details: [
      { label: "Seat Type", value: "Ergonomic Slim" },
      { label: "Seat Pitch", value: "32 inches" },
      { label: "Seat Width", value: '18"' },
      { label: "Entertainment", value: '11" HD Screen' },
      { label: "Baggage", value: "1 × 23kg Checked" },
      { label: "Power", value: "USB-A & USB-C" },
    ],
    highlights: [
      "Personal seatback entertainment with 1,000+ options",
      "Complimentary meals and beverages on all long-haul flights",
      "USB charging at every seat",
      "Award-winning cabin crew service",
      "In-flight Wi-Fi available for purchase",
    ],
  },
];

export const getPropertyBySlug = (slug: string): Property | undefined =>
  properties.find((p) => p.slug === slug);
