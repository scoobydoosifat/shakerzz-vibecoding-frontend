export interface Product {
  id: string;
  name: string;
  subName: string;
  price: string;
  description: string;
  folderPath: string;
  themeColor: string;
  gradient: string;
  features: string[];
  stats: { label: string; val: string }[];
  section1: { title: string; subtitle: string };
  section2: { title: string; subtitle: string };
  section3: { title: string; subtitle: string };
  section4: { title: string; subtitle: string };
  detailsSection: { title: string; description: string; imageAlt: string };
  freshnessSection: { title: string; description: string };
  buyNowSection: {
    price: string;
    unit: string;
    processingParams: string[];
    deliveryPromise: string;
    returnPolicy: string;
  };
  // Animation specific data
  frameStart: number;
  frameEnd: number;
  framePrefix: string;
  frameExtension: string;
  padLength: number;
}

export const products: Product[] = [
  {
    id: "chocolate",
    name: "Chocolate Shake",
    subName: "Velvety smooth.",
    price: "$14.99",
    description: "Premium Cocoa - Almond Milk base - Plant Protein",
    folderPath: "/images/chocolate",
    themeColor: "#8D6E63",
    gradient: "linear-gradient(135deg, #8D6E63 0%, #3E2723 100%)",
    features: ["Premium Cocoa", "Almond Milk", "Plant Protein"],
    stats: [{ label: "Dairy", val: "0%" }, { label: "Protein", val: "12g" }, { label: "Cocoa", val: "100%" }],
    section1: { title: "Chocolate Shake.", subtitle: "Velvety smooth." },
    section2: { title: "Decadence redefined.", subtitle: "Rich, dark cocoa blended with creamy almond milk for a guilt-free treat." },
    section3: { title: "Plant-powered energy.", subtitle: "Loaded with natural plant protein to fuel your active lifestyle." },
    section4: { title: "Indulgence without compromise.", subtitle: "" },
    detailsSection: {
      title: "Ethically Sourced Cocoa",
      description: "We source our cocoa from sustainable farms, ensuring fair wages and premium quality. Blended with our house-made almond milk, this drink offers a silky texture that rivals traditional dairy shakes, but with zero cholesterol and 100% plant-based goodness.",
      imageAlt: "Chocolate Shake Details"
    },
    freshnessSection: {
      title: "Cold-Crafted Perfection",
      description: "Heat destroys delicate cocoa flavonoids. That's why we mix our Chocolate Shake cold. Our almond milk is pressed fresh daily, never stored. The result is a clean, robust chocolate flavor that feels heavy on the tongue but light on the stomach."
    },
    buyNowSection: {
      price: "$14.99",
      unit: "per 12oz bottle",
      processingParams: ["Plant Based", "Cold Blended", "Dairy Free"],
      deliveryPromise: "Shipped in insulated eco-friendly coolers. Keeps perfectly cold for 48 hours.",
      returnPolicy: "Taste the difference or get your money back."
    },
    frameStart: 25,
    frameEnd: 200,
    framePrefix: "ezgif-frame-",
    frameExtension: ".jpg",
    padLength: 3
  },
  {
    id: "banana",
    name: "Banana Shake",
    subName: "Pure sunshine.",
    price: "$12.99",
    description: "Rich in Potassium - No preservatives - 100% real fruit",
    folderPath: "/images/banana",
    themeColor: "#FBC02D",
    gradient: "linear-gradient(135deg, #FBC02D 0%, #F57F17 100%)",
    features: ["Rich in Potassium", "No preservatives", "100% real fruit"],
    stats: [{ label: "Added Sugar", val: "0g" }, { label: "Dairy", val: "0%" }, { label: "Fruit", val: "100%" }],
    section1: { title: "Banana Shake.", subtitle: "Pure sunshine." },
    section2: { title: "Bursting with fresh banana.", subtitle: "Perfectly ripened bananas, delivering natural energy and creamy sweetness." },
    section3: { title: "Potassium-packed refreshment.", subtitle: "A natural boost that revitalizes your body and supports muscle function." },
    section4: { title: "Made from fruit, not concentrate.", subtitle: "" },
    detailsSection: {
      title: "The Ultimate Energy Boost",
      description: "Our Banana Shake uses only the finest, peak-ripe bananas. Blended to absolute perfection, it provides a thick, milkshake-like consistency without any dairy. It's a natural source of sustained energy, perfect for starting your day or fueling a workout.",
      imageAlt: "Banana Shake Details"
    },
    freshnessSection: {
      title: "Farm to Bottle",
      description: "We believe in absolute transparency. From the plantation to the bottle, our process is designed to minimize oxidation and maximize flavor. We use cutting-edge cold blending techniques to ensure the vital nutrients and creamy texture are perfectly preserved."
    },
    buyNowSection: {
      price: "$12.99",
      unit: "per 12oz bottle",
      processingParams: ["Cold Blended", "Never Heated", "Dairy Free"],
      deliveryPromise: "Next-day delivery available. Chilled packaging ensures peak freshness.",
      returnPolicy: "100% Satisfaction Guarantee. Not happy? We'll replace it, no questions asked."
    },
    frameStart: 16,
    frameEnd: 208,
    framePrefix: "ezgif-frame-",
    frameExtension: ".jpg",
    padLength: 3
  }
];
