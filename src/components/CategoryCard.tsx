import { Link } from "@tanstack/react-router";

interface CategoryCardProps {
  title: string;
  icon: string;
  count: number;
  delay?: number;
}

export function CategoryCard({ title, icon, count, delay = 0 }: CategoryCardProps) {
  const delayClass = delay === 1 ? "animate-fade-up-delay-1" : delay === 2 ? "animate-fade-up-delay-2" : delay === 3 ? "animate-fade-up-delay-3" : delay === 4 ? "animate-fade-up-delay-4" : "";

  return (
    <Link
      to="/categories"
      className={`group flex flex-col items-center gap-3 rounded-2xl bg-card border border-border p-6 sm:p-8 card-hover animate-fade-up ${delayClass}`}
    >
      <span className="text-4xl">{icon}</span>
      <h3 className="text-sm font-semibold text-foreground text-center">{title}</h3>
      <span className="text-xs text-muted-foreground">{count}+ products</span>
    </Link>
  );
}
