interface ProductCardProps {
  title: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  badge?: string;
  link: string;
  delay?: number;
}

export function ProductCard({ title, image, price, originalPrice, rating, reviews, badge, link, delay = 0 }: ProductCardProps) {
  const delayClass = delay === 1 ? "animate-fade-up-delay-1" : delay === 2 ? "animate-fade-up-delay-2" : delay === 3 ? "animate-fade-up-delay-3" : delay === 4 ? "animate-fade-up-delay-4" : "";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`group block rounded-2xl bg-card border border-border overflow-hidden card-hover animate-fade-up ${delayClass}`}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {badge && (
          <span className="absolute top-3 left-3 rounded-full bg-badge px-3 py-1 text-xs font-semibold text-badge-foreground">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className={`w-3.5 h-3.5 ${i < rating ? "text-warm" : "text-border"}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-muted-foreground ml-1">({reviews.toLocaleString()})</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-foreground">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
          )}
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          View on Amazon
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </div>
      </div>
    </a>
  );
}
