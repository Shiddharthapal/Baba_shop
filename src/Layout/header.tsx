"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";

const navItems = [
  { label: "হোম", href: "/" },
  { label: "পণ্য", href: "/products" },
  { label: "নীতি", href: "/certifications" },
  { label: "গুণমান", href: "/quality" },
  { label: "আমাদের সম্পর্কে", href: "/about" },
  { label: "যোগাযোগ", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-border/70 bg-card/70">
            <Image src="/diagram.svg" alt="Workshop Logo" fill className="object-contain p-2.5" />
          </div>
          <div className="hidden sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
              Industrial Workshop
            </p>
            <p className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
              দুই ভাই ইঞ্জিনিয়ারিং
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = isActiveLink(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-primary/15 text-primary shadow-[inset_0_0_0_1px_hsl(var(--primary)/0.35)]"
                    : "text-muted-foreground hover:bg-card/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+8801719634871"
            className="group hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            <PhoneCall className="h-3.5 w-3.5 group-hover:animate-spin group-hover:[animation-duration:0.8s]" />
            01719634871
          </a>

          <button 
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border/70 bg-card/95 px-4 pb-5 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActiveLink(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    active
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="tel:+8801719634871"
              className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              এখনই কল করুন
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
