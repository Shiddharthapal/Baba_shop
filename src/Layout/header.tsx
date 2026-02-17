"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "পণ্যসমূহ", href: "/products" },
    { label: "নীতি", href: "/certifications" },
    { label: "গুণমান", href: "/quality" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
    { label: "যোগাযোগ", href: "/contact" },
  ];


  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="w-full mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 bg-[hsl(206,28%,11%)]">
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <div className=" rounded-full flex items-center justify-center">
              <img src="/diagram.svg" alt="diagram" className="w-10 h-10 " />
            </div>
            <span className="text-white font-bold text-sm hidden sm:inline">
              দুই ভাই ইঞ্জিনিয়ারিং ওয়ার্কশপ
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+8801719634871"
              className="hidden sm:block bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 text-xs font-semibold transition-colors"
            >
              01719634871
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors pl-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+8801719634871"
                className="text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors pl-4 py-2"
              >
                Call: 01719634871
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
