import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/deals")({
  head: () => ({
    meta: [
      { title: "Today's Best Deals — PicksForYou" },
      { name: "description", content: "Today's hottest Amazon deals handpicked by our editors. Limited-time offers updated daily." },
      { property: "og:title", content: "Today's Best Deals — PicksForYou" },
      { property: "og:description", content: "Today's hottest Amazon deals handpicked by our editors." },
    ],
  }),
  component: DealsPage,
});

function DealsPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-badge/10 px-4 py-1.5 text-sm font-medium text-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-badge animate-pulse" />
            Updated Today
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">Today's Best Deals</h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">Hand-selected deals that are actually worth your money. We check every day so you don't have to.</p>
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
