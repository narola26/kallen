export default function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="marquee-track">
        <span className="flex shrink-0 items-center">{children}</span>
        <span aria-hidden className="flex shrink-0 items-center">
          {children}
        </span>
      </div>
    </div>
  );
}
