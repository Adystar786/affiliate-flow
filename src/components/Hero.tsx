import heroImage from "@/assets/hero-products.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0" />
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="AI-powered electronics and smart gadgets collection"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-foreground border border-primary-foreground/20">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse" />
              AI Picks · Updated Daily
            </span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient leading-[1.1] animate-fade-up animate-fade-up-delay-1">
            Smart Tech,
            <br />Smarter Deals.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-lg leading-relaxed animate-fade-up animate-fade-up-delay-2">
            Discover the best AI-powered electronics — from smart speakers to robot vacuums. Expert reviews, real savings.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up animate-fade-up-delay-3">
            <a href="#featured" className="inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              Browse AI Picks
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#categories" className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-all">
              View Categories
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
