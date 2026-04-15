import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { products, categories, testimonials } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PicksForYou — Handpicked Product Deals & Reviews" },
      { name: "description", content: "Discover the best Amazon deals and honest product reviews. Updated daily with handpicked recommendations you'll love." },
      { property: "og:title", content: "PicksForYou — Handpicked Product Deals & Reviews" },
      { property: "og:description", content: "Discover the best Amazon deals and honest product reviews." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <Hero />

      {/* Featured Products */}
      <section id="featured" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Handpicked</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Featured Products</h2>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto">Our editors' top picks — tested, reviewed, and recommended.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} {...product} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hero-gradient rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">Don't Miss Today's Deals</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto">Limited-time offers updated every 24 hours. Grab them before they're gone.</p>
            <a href="/deals" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              See All Deals
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Browse</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.title} {...cat} delay={i % 4 + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* More Products */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Trending</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">More Top Picks</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.slice(4).map((product, i) => (
              <ProductCard key={product.id} {...product} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Reviews</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">What Readers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Never Miss a Deal</h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">Subscribe and get the best picks delivered to your inbox every week.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <button type="submit" className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">No spam, unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
