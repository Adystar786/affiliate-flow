import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">P</span>
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">PicksForYou</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link to="/" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent" activeProps={{ className: "px-4 py-2 text-sm font-medium text-foreground bg-accent rounded-lg" }}>
              Home
            </Link>
            <Link to="/deals" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent" activeProps={{ className: "px-4 py-2 text-sm font-medium text-foreground bg-accent rounded-lg" }}>
              Today's Deals
            </Link>
            <Link to="/categories" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent" activeProps={{ className: "px-4 py-2 text-sm font-medium text-foreground bg-accent rounded-lg" }}>
              Categories
            </Link>
            <Link to="/about" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent" activeProps={{ className: "px-4 py-2 text-sm font-medium text-foreground bg-accent rounded-lg" }}>
              About
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col p-4 gap-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-accent transition-colors">Home</Link>
            <Link to="/deals" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-accent transition-colors">Today's Deals</Link>
            <Link to="/categories" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-accent transition-colors">Categories</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-accent transition-colors">About</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
