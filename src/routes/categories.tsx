import { createFileRoute } from "@tanstack/react-router";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/products";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "AI Electronics Categories — Pickify" },
      { name: "description", content: "Browse AI-powered electronics by category: AI Audio, AI Wearables, Smart Home, AI Security, Drones & more. Find the perfect smart gadget." },
      { property: "og:title", content: "AI Electronics Categories — Pickify" },
      { property: "og:description", content: "Browse AI-powered electronics by category. Find the perfect smart gadget." },
      { name: "twitter:title", content: "AI Electronics Categories — Pickify" },
      { name: "twitter:description", content: "Browse AI electronics by category." },
      { name: "keywords", content: "AI electronics categories, smart home devices, AI wearables, AI audio, AI security cameras, AI drones, smart gadgets by category" },
    ],
    links: [
      { rel: "canonical", href: "https://pickify.com/categories" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "AI Electronics Categories",
          description: "Browse AI-powered electronics by category.",
          url: "https://pickify.com/categories",
        }),
      },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">AI Electronics Categories</h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">Find the perfect AI-powered gadget in your favorite category.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} {...cat} delay={i % 4 + 1} />
          ))}
        </div>

        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">All AI Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.id} {...product} delay={i % 4 + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
