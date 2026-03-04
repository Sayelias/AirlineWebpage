import suitePenthouse from "@/assets/suite-penthouse.webp";
import suitePresidential from "@/assets/suite-presidential.webp";
import suiteSpa from "@/assets/suite-spa.webp";
import suiteDining from "@/assets/suite-dining.webp";

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
    slug: "ocean-penthouse-suite",
    name: "Ocean Penthouse Suite",
    category: "Suites",
    priceFrom: "from $12,500/night",
    image: suitePenthouse,
    tagline: "Where the horizon becomes your private canvas.",
    description:
      "Perched atop our flagship tower, the Ocean Penthouse Suite offers 360-degree panoramic ocean views, a private infinity plunge pool, and 24-hour dedicated butler service. Italian marble throughout, Frette linens, and a curated art collection define this unparalleled residence.",
    details: [
      { label: "Size", value: "3,800 sq ft" },
      { label: "Bedrooms", value: "2 Master Suites" },
      { label: "View", value: "360° Panoramic Ocean" },
      { label: "Floor", value: "Penthouse Level" },
      { label: "Max Guests", value: "4 Adults" },
      { label: "Butler Service", value: "24-Hour Dedicated" },
    ],
    highlights: [
      "Private infinity plunge pool with ocean views",
      "Hermès bath amenities & Frette linens",
      "In-suite Steinway grand piano",
      "Personal chef upon request",
      "Helicopter transfer included",
    ],
  },
  {
    slug: "presidential-suite",
    name: "The Presidential Suite",
    category: "Suites",
    priceFrom: "from $18,000/night",
    image: suitePresidential,
    tagline: "The pinnacle of grandeur.",
    description:
      "Our most exclusive accommodation features a sprawling living salon, private dining room for 12, a library, and floor-to-ceiling windows framing the city skyline. Every detail — from the Baccarat crystal to the bespoke furniture — has been curated for heads of state and discerning travelers.",
    details: [
      { label: "Size", value: "5,200 sq ft" },
      { label: "Bedrooms", value: "3 Master Suites" },
      { label: "View", value: "City Skyline & Harbor" },
      { label: "Floor", value: "Top Floor" },
      { label: "Max Guests", value: "6 Adults" },
      { label: "Security", value: "Private Entrance & Detail" },
    ],
    highlights: [
      "Private dining room seating 12 with personal sommelier",
      "Baccarat crystal chandeliers throughout",
      "Dedicated security entrance & elevator",
      "Full-size Carrara marble spa bathroom",
      "Rolls-Royce airport transfer included",
    ],
  },
  {
    slug: "wellness-sanctuary",
    name: "The Wellness Sanctuary",
    category: "Experiences",
    priceFrom: "from $4,500/session",
    image: suiteSpa,
    tagline: "Restore your essence.",
    description:
      "Our signature spa experience spans an entire floor of tranquility. Featuring a tropical infinity pool, Vichy shower suites, cryotherapy chambers, and treatments by world-renowned therapists using La Prairie and Sisley products.",
    details: [
      { label: "Spa Size", value: "15,000 sq ft" },
      { label: "Pools", value: "Infinity, Vitality & Cold Plunge" },
      { label: "Treatment Rooms", value: "12 Private Suites" },
      { label: "Sauna Types", value: "Finnish, Infrared, Hammam" },
      { label: "Products", value: "La Prairie & Sisley" },
      { label: "Hours", value: "6 AM – 11 PM Daily" },
    ],
    highlights: [
      "Tropical infinity pool overlooking the ocean",
      "Cryotherapy and halotherapy chambers",
      "Private couples' treatment pavilions",
      "Post-treatment champagne & canapés",
      "Personalized wellness programs with resident naturopath",
    ],
  },
  {
    slug: "gastronomic-experience",
    name: "Lumière — Fine Dining",
    category: "Dining",
    priceFrom: "from $850/person",
    image: suiteDining,
    tagline: "A symphony of flavors.",
    description:
      "Lumière, our three-Michelin-starred restaurant, presents a 14-course degustation journey through modern French cuisine. Chef Laurent Moreau sources ingredients from our private gardens and the world's finest purveyors. Wine pairings curated by our Master Sommelier.",
    details: [
      { label: "Cuisine", value: "Modern French" },
      { label: "Courses", value: "14-Course Degustation" },
      { label: "Michelin Stars", value: "★★★" },
      { label: "Dress Code", value: "Black Tie" },
      { label: "Capacity", value: "32 Covers" },
      { label: "Reservations", value: "Required, 30 days advance" },
    ],
    highlights: [
      "14-course degustation with wine pairings by Master Sommelier",
      "Ingredients from our private organic gardens",
      "Private dining rooms available for 2–12 guests",
      "Chef's table experience with live kitchen viewing",
      "Complimentary digestif & petit fours in the cigar lounge",
    ],
  },
];

export const getPropertyBySlug = (slug: string): Property | undefined =>
  properties.find((p) => p.slug === slug);
