import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/deals")({
  head: () => ({
    meta: [
      { title: "Today's Best AI Electronics Deals — Pickify" },
      { name: "description", content: "Today's hottest deals on AI-powered electronics. Save big on smart speakers, AI wearables, robot vacuums, drones and more. Updated daily." },
      { property: "og:title", content: "Today's Best AI Electronics Deals — Pickify" },
      { property: "og:description", content: "Today's hottest deals on AI-powered electronics. Save big on smart devices." },
      { name: "twitter:title", content: "Today's Best AI Electronics Deals — Pickify" },
      { name: "twitter:description", content: "Today's hottest AI gadget deals, updated daily." },
      { name: "keywords", content: "AI electronics deals, smart gadget sales, Amazon AI deals today, cheap AI headphones, robot vacuum deals, smart home discounts" },
    ],
    links: [
      { rel: "canonical", href: "https://pickify.com/deals" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Today's Best AI Electronics Deals",
          description: "Daily updated collection of the best deals on AI-powered electronics.",
          url: "https://pickify.com/deals",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: products.length,
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              url: p.link,
            })),
          },
        }),
      },
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
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">Today's Best AI Deals</h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">Hand-selected deals on AI-powered electronics that are actually worth your money. Checked and updated every day.</p>
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
