export default function Logo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M4 19V6h3.2v3.5h3.2V6h3.2v3.5h3.2V6H20v13H4Zm8-4.8-1.1 1.4V19h2.2v-3.4L12 14.2Z"
      />
    </svg>
  );
}
