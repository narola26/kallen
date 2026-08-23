import PageTransition from "@/components/motion/PageTransition";

/**
 * app-router templates remount on every navigation (unlike layouts), which
 * is what gives each route its own 1200ms entrance without needing
 * AnimatePresence + exit-transition plumbing.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
