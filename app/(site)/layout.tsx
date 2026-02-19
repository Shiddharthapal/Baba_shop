import type { ReactNode } from "react";

import { Header } from "@/Layout/header";
import { Footer } from "@/Layout/footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative isolate min-h-screen w-full overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10 soft-grid opacity-20" />
      <div className="pointer-events-none absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <Header />
      <div className="section-spacing">{children}</div>
      <Footer />
    </main>
  );
}
