import type { ReactNode } from "react";

import { Header } from "@/Layout/header";
import { Footer } from "@/Layout/footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full">
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
    </main>
  );
}
