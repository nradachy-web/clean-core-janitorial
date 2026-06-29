/** Clean line icons for the service verticals. Keyed by Service.icon. */
const paths: Record<string, React.ReactNode> = {
  office: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.2" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" />
    </>
  ),
  medical: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  restaurant: (
    <>
      <path d="M7 3v8a2 2 0 0 0 4 0V3M9 11v10M16 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" />
    </>
  ),
  gym: (
    <>
      <path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" />
    </>
  ),
  retail: (
    <>
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  school: (
    <>
      <path d="M12 4 2 9l10 5 8-4v6" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
    </>
  ),
  industrial: (
    <>
      <path d="M3 21V10l6 4V10l6 4V8l6 4v9H3Z" />
      <path d="M7 21v-3M12 21v-3M17 21v-3" />
    </>
  ),
  municipal: (
    <>
      <path d="M3 9 12 4l9 5M4 9v10M20 9v10M3 21h18M8 19v-7M12 19v-7M16 19v-7" />
    </>
  ),
};

export function ServiceIcon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.office}
    </svg>
  );
}
