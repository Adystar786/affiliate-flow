import { createFileRoute } from "@tanstack/react-router";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/products";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Browse Categories — PicksForYou" },
      { name: "description", content: "Explore products by category. Electronics, fashion, home, beauty, sports, and more." },
      { property: "og:title", content: "Browse Categories — PicksForYou" },
      { property: "og:description", content: "Explore products by category." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">Browse Categories</h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">Find the perfect product in your favorite category.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} {...cat} delay={i % 4 + 1} />
          ))}
        </div>

        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">All Products</h2>
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
