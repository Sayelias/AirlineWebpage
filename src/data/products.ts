import productHeadphones from "@/assets/product-headphones.webp";
import productLaptop from "@/assets/product-laptop.webp";
import productWatch from "@/assets/product-watch.webp";
import productEarbuds from "@/assets/product-earbuds.webp";

export interface Product {
  slug: string;
  name: string;
  category: string;
  price: string;
  image: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
}

export const products: Product[] = [
  {
    slug: "aura-pro-headphones",
    name: "Aura Pro Headphones",
    category: "Audio",
    price: "$549",
    image: productHeadphones,
    tagline: "Immersive sound, redefined.",
    description:
      "The Aura Pro delivers studio-grade audio with adaptive noise cancellation, 40-hour battery life, and hand-stitched leather cushions. Designed for audiophiles who demand perfection.",
    specs: [
      { label: "Driver Size", value: "50mm Beryllium" },
      { label: "Frequency Response", value: "4Hz – 40kHz" },
      { label: "Battery Life", value: "40 hours (ANC on)" },
      { label: "Weight", value: "268g" },
      { label: "Connectivity", value: "Bluetooth 5.3, 3.5mm" },
      { label: "Noise Cancellation", value: "Adaptive ANC" },
    ],
    features: [
      "Spatial audio with head tracking",
      "Hand-stitched Italian leather ear cushions",
      "Multi-device pairing (up to 3)",
      "Foldable design with premium carry case",
      "Touch controls & voice assistant support",
    ],
  },
  {
    slug: "zenith-ultrabook",
    name: "Zenith UltraBook",
    category: "Computing",
    price: "$2,499",
    image: productLaptop,
    tagline: "Power without compromise.",
    description:
      "The Zenith UltraBook combines a stunning 4K OLED display with desktop-class performance in an impossibly thin 12mm chassis. Crafted from aerospace-grade aluminum.",
    specs: [
      { label: "Display", value: '14.2" 4K OLED, 120Hz' },
      { label: "Processor", value: "14-core, 3.5GHz" },
      { label: "Memory", value: "32GB LPDDR5X" },
      { label: "Storage", value: "1TB NVMe Gen 4" },
      { label: "Battery", value: "72Wh, up to 18 hours" },
      { label: "Weight", value: "1.29kg" },
    ],
    features: [
      "4K OLED display with 100% DCI-P3 coverage",
      "Aerospace-grade aluminum unibody",
      "Whisper-quiet thermal management",
      "Thunderbolt 4 & Wi-Fi 7",
      "Backlit keyboard with 1.5mm travel",
    ],
  },
  {
    slug: "chronos-smart-watch",
    name: "Chronos Smart Watch",
    category: "Wearables",
    price: "$899",
    image: productWatch,
    tagline: "Timeless meets intelligent.",
    description:
      "The Chronos blends traditional watchmaking elegance with cutting-edge health and fitness tracking. Sapphire crystal display, titanium case, and genuine leather strap.",
    specs: [
      { label: "Display", value: "1.4\" AMOLED, 466x466" },
      { label: "Case", value: "Grade 5 Titanium" },
      { label: "Glass", value: "Sapphire Crystal" },
      { label: "Battery", value: "Up to 7 days" },
      { label: "Water Resistance", value: "10 ATM" },
      { label: "Sensors", value: "HR, SpO2, ECG, Temp" },
    ],
    features: [
      "Always-on AMOLED with 2000 nits brightness",
      "Advanced health suite with ECG & blood oxygen",
      "Built-in GPS with offline maps",
      "Premium genuine leather & silicone bands included",
      "Wireless charging with reverse charge support",
    ],
  },
  {
    slug: "nova-wireless-earbuds",
    name: "Nova Wireless Earbuds",
    category: "Audio",
    price: "$349",
    image: productEarbuds,
    tagline: "Pure sound, zero distractions.",
    description:
      "The Nova earbuds deliver reference-quality audio with best-in-class ANC, an ergonomic fit, and a wireless charging case that provides 30+ hours of total playback.",
    specs: [
      { label: "Driver", value: "11mm Custom Dynamic" },
      { label: "Frequency Response", value: "6Hz – 44kHz" },
      { label: "Battery (Buds)", value: "8 hours (ANC on)" },
      { label: "Battery (Case)", value: "30 hours total" },
      { label: "Connectivity", value: "Bluetooth 5.4, LE Audio" },
      { label: "IP Rating", value: "IP55" },
    ],
    features: [
      "Adaptive noise cancellation with transparency mode",
      "Hi-Res Audio certified (LDAC & aptX Lossless)",
      "Ergonomic triple-tip design for all-day comfort",
      "Wireless & USB-C fast charging",
      "In-ear detection with auto play/pause",
    ],
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);
