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
    title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    price: "$278.00",
    originalPrice: "$399.99",
    rating: 5,
    reviews: 14523,
    badge: "Best Seller",
    link: "https://amazon.com",
    category: "Electronics",
  },
  {
    id: "2",
    title: "Apple Watch Series 9 GPS 45mm Smartwatch",
    image: "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600&h=600&fit=crop",
    price: "$329.00",
    originalPrice: "$429.00",
    rating: 5,
    reviews: 8921,
    badge: "Top Pick",
    link: "https://amazon.com",
    category: "Electronics",
  },
  {
    id: "3",
    title: "Hydro Flask Wide Mouth Stainless Steel Water Bottle",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop",
    price: "$32.95",
    originalPrice: "$44.95",
    rating: 4,
    reviews: 32187,
    badge: "26% Off",
    link: "https://amazon.com",
    category: "Kitchen",
  },
  {
    id: "4",
    title: "Kindle Paperwhite 11th Gen — 6.8\" Display, 16 GB",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop",
    price: "$109.99",
    originalPrice: "$139.99",
    rating: 5,
    reviews: 45320,
    link: "https://amazon.com",
    category: "Electronics",
  },
  {
    id: "5",
    title: "Lululemon Everywhere Belt Bag — Crossbody",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    price: "$38.00",
    rating: 4,
    reviews: 19876,
    badge: "Trending",
    link: "https://amazon.com",
    category: "Fashion",
  },
  {
    id: "6",
    title: "Nespresso Vertuo Next Premium Coffee Machine",
    image: "https://images.unsplash.com/photo-1517353856414-25ad321e5364?w=600&h=600&fit=crop",
    price: "$159.00",
    originalPrice: "$209.00",
    rating: 4,
    reviews: 11243,
    badge: "24% Off",
    link: "https://amazon.com",
    category: "Kitchen",
  },
  {
    id: "7",
    title: "Ray-Ban Classic Aviator Sunglasses — Polarized",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
    price: "$143.00",
    originalPrice: "$163.00",
    rating: 5,
    reviews: 7654,
    link: "https://amazon.com",
    category: "Fashion",
  },
  {
    id: "8",
    title: "Dyson V15 Detect Cordless Vacuum Cleaner",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&h=600&fit=crop",
    price: "$579.99",
    originalPrice: "$749.99",
    rating: 5,
    reviews: 6234,
    badge: "23% Off",
    link: "https://amazon.com",
    category: "Home",
  },
];

export const categories = [
  { title: "Electronics", icon: "🎧", count: 250 },
  { title: "Fashion", icon: "👜", count: 180 },
  { title: "Home & Kitchen", icon: "🏠", count: 320 },
  { title: "Beauty", icon: "✨", count: 150 },
  { title: "Sports", icon: "⚽", count: 200 },
  { title: "Books", icon: "📚", count: 400 },
];

export const testimonials = [
  {
    quote: "Found my new favorite headphones through this site. The reviews are honest and the deals are actually good!",
    name: "Sarah M.",
    role: "Verified Reader",
    initial: "S",
  },
  {
    quote: "I check this site every morning for deals. Saved over $500 in the past 3 months on things I actually needed.",
    name: "James L.",
    role: "Deal Hunter",
    initial: "J",
  },
  {
    quote: "Finally a product review site that doesn't feel like every review is bought. Genuine recommendations.",
    name: "Mia W.",
    role: "Loyal Follower",
    initial: "M",
  },
];
