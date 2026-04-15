import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pickify — AI Electronics Reviews & Deals" },
      { name: "description", content: "Learn about Pickify — your trusted source for AI-powered electronics reviews, honest recommendations, and the best Amazon deals on smart tech." },
      { property: "og:title", content: "About Pickify — AI Electronics Reviews & Deals" },
      { property: "og:description", content: "Your trusted source for AI-powered electronics reviews and deals." },
      { name: "twitter:title", content: "About Pickify" },
      { name: "twitter:description", content: "Your trusted source for AI electronics reviews and deals." },
    ],
    links: [
      { rel: "canonical", href: "https://pickify.com/about" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Pickify",
          description: "Your trusted source for AI-powered electronics reviews, honest recommendations, and smart tech deals.",
          url: "https://pickify.com/about",
          mainEntity: {
            "@type": "Organization",
            name: "Pickify",
            description: "AI electronics affiliate review and deals platform.",
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight text-center animate-fade-up">About Pickify</h1>
        <div className="mt-10 space-y-6 text-foreground/80 leading-relaxed animate-fade-up animate-fade-up-delay-1">
          <p>
            We're a team of tech enthusiasts and AI geeks who believe buying smart electronics shouldn't require a PhD. We cut through the noise so you can find the perfect AI-powered gadget — fast.
          </p>
          <p>
            Every product on Pickify is handpicked after thorough testing of its AI capabilities. We evaluate real-world performance, not just specs — from noise cancellation algorithms to robot vacuum navigation intelligence.
          </p>
          <p>
            As an Amazon Associate, we earn from qualifying purchases — but that never influences our recommendations. We only share products with AI features that genuinely deliver on their promises.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up animate-fade-up-delay-2">
          {[
            { stat: "2,500+", label: "AI Products Reviewed" },
            { stat: "75K+", label: "Monthly Readers" },
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
          <a href="mailto:hello@pickify.com" className="mt-5 inline-flex rounded-xl bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
