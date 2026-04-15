export interface Product {
  id: string;
  title: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  badge?: string;
  link: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Sony WH-1000XM5 AI Noise Cancelling Wireless Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    price: "$278.00",
    originalPrice: "$399.99",
    rating: 5,
    reviews: 14523,
    badge: "Best Seller",
    link: "https://amazon.com",
    category: "AI Audio",
  },
  {
    id: "2",
    title: "Apple Watch Ultra 2 — AI Health Monitoring & Fitness",
    image: "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600&h=600&fit=crop",
    price: "$699.00",
    originalPrice: "$799.00",
    rating: 5,
    reviews: 8921,
    badge: "Top Pick",
    link: "https://amazon.com",
    category: "AI Wearables",
  },
  {
    id: "3",
    title: "Amazon Echo Show 15 — AI Smart Display with Alexa",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=600&h=600&fit=crop",
    price: "$199.99",
    originalPrice: "$279.99",
    rating: 4,
    reviews: 32187,
    badge: "29% Off",
    link: "https://amazon.com",
    category: "Smart Home",
  },
  {
    id: "4",
    title: "Kindle Scribe — AI-Powered E-Reader with Smart Pen",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop",
    price: "$259.99",
    originalPrice: "$339.99",
    rating: 5,
    reviews: 45320,
    badge: "Editor's Choice",
    link: "https://amazon.com",
    category: "AI Readers",
  },
  {
    id: "5",
    title: "iRobot Roomba j9+ — AI-Powered Robot Vacuum & Mop",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&h=600&fit=crop",
    price: "$599.00",
    originalPrice: "$899.00",
    rating: 4,
    reviews: 19876,
    badge: "33% Off",
    link: "https://amazon.com",
    category: "Smart Home",
  },
  {
    id: "6",
    title: "Ring Battery Doorbell Pro — AI Motion Detection & Alerts",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop",
    price: "$179.99",
    originalPrice: "$229.99",
    rating: 4,
    reviews: 11243,
    badge: "22% Off",
    link: "https://amazon.com",
    category: "AI Security",
  },
  {
    id: "7",
    title: "Ray-Ban Meta Smart Glasses — AI Assistant Built In",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
    price: "$299.00",
    rating: 5,
    reviews: 7654,
    badge: "Trending",
    link: "https://amazon.com",
    category: "AI Wearables",
  },
  {
    id: "8",
    title: "DJI Mini 4 Pro — AI Flight Modes & Obstacle Avoidance",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=600&fit=crop",
    price: "$759.00",
    originalPrice: "$959.00",
    rating: 5,
    reviews: 6234,
    badge: "21% Off",
    link: "https://amazon.com",
    category: "AI Drones",
  },
];

export const categories = [
  { title: "AI Audio", icon: "🎧", count: 120 },
  { title: "AI Wearables", icon: "⌚", count: 85 },
  { title: "Smart Home", icon: "🏠", count: 200 },
  { title: "AI Security", icon: "🔒", count: 95 },
  { title: "AI Drones", icon: "🚁", count: 60 },
  { title: "AI Readers", icon: "📱", count: 75 },
];

export const testimonials = [
  {
    quote: "Found my dream robot vacuum through Pickify. The AI picks are spot-on and the deals are legit!",
    name: "Sarah M.",
    role: "Verified Reader",
    initial: "S",
  },
  {
    quote: "I check Pickify every morning. Saved over $800 on smart home gadgets in the past 3 months.",
    name: "James L.",
    role: "Tech Enthusiast",
    initial: "J",
  },
  {
    quote: "Finally a tech review site that actually tests AI features instead of just listing specs. Love it.",
    name: "Mia W.",
    role: "Loyal Follower",
    initial: "M",
  },
];
