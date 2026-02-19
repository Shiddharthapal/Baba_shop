import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "হোম", href: "/" },
  { label: "পণ্য", href: "/products" },
  { label: "গুণমান", href: "/quality" },
  { label: "নীতি", href: "/certifications" },
  { label: "যোগাযোগ", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border/70 bg-card/70 py-8 md:mt-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              দুই ভাই ওয়ার্কশপ
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">
              নির্ভরযোগ্য মেশিন সলিউশন
            </h3>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            কাঠ কাটার মেশিন, রাইস মিল মেশিন, রিপেয়ার ও খুচরা যন্ত্রাংশ সাপোর্টে
            দ্রুত এবং বাস্তবভিত্তিক সার্ভিস।
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold text-foreground">
            দ্রুত নেভিগেশন
          </h4>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold text-foreground">যোগাযোগ</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+8801719634871" className="hover:text-primary">
                01719-634871
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>shiddhartpal01355@gmail.com</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>দাসপাড়া মোড়, বাগেরহাট-সদর, বাগেরহাট </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border/70 px-4 pt-6 text-xs text-center text-muted-foreground sm:px-6 lg:px-8">
        © {new Date().getFullYear()} দুই ভাই ইঞ্জিনিয়ারিং ওয়ার্কশপ। সর্বস্বত্ব
        সংরক্ষিত।
      </div>
    </footer>
  );
}
