/**
 * The two-mark lockup. Every piece in the market carries the creator's
 * imprint and ours, set at the same weight — the whole deal in one
 * graphic. The accent rule between them is the store's colour.
 */
export default function CoBrandLockup({
  studio,
  accent,
  size = "base",
  className = "",
}: {
  studio: string;
  accent: string;
  size?: "sm" | "base" | "lg";
  className?: string;
}) {
  const scale = {
    sm: { text: "text-[9px]", gap: "gap-2", rule: "w-4" },
    base: { text: "text-[10px]", gap: "gap-3", rule: "w-6" },
    lg: { text: "text-xs", gap: "gap-4", rule: "w-10" },
  }[size];

  return (
    <span
      className={`inline-flex items-center ${scale.gap} ${className}`}
      style={{ ["--accent" as string]: accent }}
    >
      <span className={`font-mono ${scale.text} uppercase tracking-label text-bone`}>{studio}</span>
      <span className={`h-px ${scale.rule} bg-[color:var(--accent)]`} aria-hidden />
      <span className={`font-display ${scale.text} uppercase tracking-wordmark text-bone`}>Kallén</span>
    </span>
  );
}
