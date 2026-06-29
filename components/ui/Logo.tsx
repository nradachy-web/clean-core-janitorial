import Link from "next/link";

/**
 * Clean Core wordmark. The supplied logo is a 1080² JPG on white (no transparency),
 * so header/footer use this crisp SVG: teal "bubbles" mark + navy/teal wordmark that
 * works on any background. Swap to their vector when provided.
 */
export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light"; // dark = navy text (light bg); light = white text (navy bg)
  className?: string;
}) {
  const word = variant === "dark" ? "#003040" : "#ffffff";
  return (
    <Link href="/" aria-label="Clean Core Janitorial — home" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true" className="shrink-0">
        <circle cx="14" cy="14" r="8.5" fill="#40b0c0" />
        <circle cx="24" cy="18" r="6" fill="#88d0e0" />
        <circle cx="17" cy="24" r="4.5" fill="#2f9fb2" />
        <circle cx="14" cy="14" r="3.2" fill="#ffffff" opacity="0.9" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-[family-name:var(--font-display)] font-extrabold tracking-tight text-[1.12rem]"
          style={{ color: word }}
        >
          Clean Core
        </span>
        <span className="font-[family-name:var(--font-display)] font-semibold tracking-[0.32em] text-[0.52rem] uppercase mt-1 text-teal-deep">
          Janitorial
        </span>
      </span>
    </Link>
  );
}
