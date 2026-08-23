import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-gutter-mobile text-center">
      <p className="font-mono text-xs uppercase tracking-label text-ash">404</p>
      <h1 className="mt-4 font-display text-lg uppercase tracking-wordmark text-bone">Not found</h1>
      <p className="mt-4 max-w-sm font-body text-sm font-light text-bone/70">
        This page doesn&apos;t exist, or it hasn&apos;t been made yet.
      </p>
      <Link
        href="/"
        className="link-underline mt-8 font-mono text-xs uppercase tracking-label text-bone/70 hover:text-bone"
      >
        Back home
      </Link>
    </div>
  );
}
