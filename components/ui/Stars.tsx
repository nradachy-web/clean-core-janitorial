export function Stars({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#2f9fb2" aria-hidden="true">
          <path d="M12 2l2.95 6.18 6.8.78-5.05 4.6 1.38 6.66L12 17.8 5.92 20.22l1.38-6.66L2.25 8.96l6.8-.78L12 2z" />
        </svg>
      ))}
    </span>
  );
}
