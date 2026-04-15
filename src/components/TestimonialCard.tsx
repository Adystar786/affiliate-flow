interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  initial: string;
  delay?: number;
}

export function TestimonialCard({ quote, name, role, initial, delay = 0 }: TestimonialCardProps) {
  const delayClass = delay === 1 ? "animate-fade-up-delay-1" : delay === 2 ? "animate-fade-up-delay-2" : delay === 3 ? "animate-fade-up-delay-3" : "";

  return (
    <div className={`rounded-2xl bg-card border border-border p-6 sm:p-8 card-hover animate-fade-up ${delayClass}`}>
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-warm" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-foreground leading-relaxed italic">"{quote}"</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          {initial}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
