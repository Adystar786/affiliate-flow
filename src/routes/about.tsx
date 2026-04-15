import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — PicksForYou" },
      { name: "description", content: "Learn about PicksForYou — your trusted source for honest Amazon product reviews and deals." },
      { property: "og:title", content: "About Us — PicksForYou" },
      { property: "og:description", content: "Your trusted source for honest Amazon product reviews and deals." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight text-center animate-fade-up">About PicksForYou</h1>
        <div className="mt-10 space-y-6 text-foreground/80 leading-relaxed animate-fade-up animate-fade-up-delay-1">
          <p>
            We're a team of passionate deal hunters and product enthusiasts who believe online shopping should be simple, honest, and rewarding.
          </p>
          <p>
            Every product on our site is handpicked after thorough research. We read thousands of reviews, compare prices, and test products ourselves before recommending them to you.
          </p>
          <p>
            As an Amazon Associate, we earn from qualifying purchases — but that never influences our recommendations. We only share products we genuinely believe in.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up animate-fade-up-delay-2">
          {[
            { stat: "5,000+", label: "Products Reviewed" },
            { stat: "50K+", label: "Monthly Readers" },
            { stat: "98%", label: "Satisfaction Rate" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-card border border-border p-6 text-center card-hover">
              <p className="text-3xl font-bold text-primary">{item.stat}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl hero-gradient p-8 sm:p-12 text-center animate-fade-up animate-fade-up-delay-3">
          <h2 className="text-2xl font-bold text-gradient">Have a Question?</h2>
          <p className="mt-3 text-primary-foreground/80">We'd love to hear from you. Reach out anytime.</p>
          <a href="mailto:hello@picksforyou.com" className="mt-5 inline-flex rounded-xl bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
