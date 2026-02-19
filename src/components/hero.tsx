import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";

const highlights = [
  { label: "১০+ বছর", detail: "ওয়ার্কশপ অভিজ্ঞতা" },
  { label: "দ্রুত সার্ভিস", detail: "অন-সাইট সাপোর্ট" },
  { label: "খুচরা পার্টস", detail: "স্টক সুবিধা" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-12 md:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]">
        <Image
          src="/image (5).jpg"
          alt="Industrial manufacturing equipment"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rise-in">
            <span
              className="relative inline-flex items-center gap-2 rounded-full
              border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold 
              uppercase tracking-[0.16em] text-primary"
            >
              <Wrench className="relative h-3.5 w-3.5" />
              ইন্ডাস্ট্রিয়াল সলিউশন পার্টনার
              {/* Ping Dot */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
              </span>
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              কাঠ কাটার ও রাইস মিল মেশিনের
              <span className="headline-gradient"> নির্ভরযোগ্য সাপোর্ট</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              মেশিন সাপ্লাই থেকে রিপেয়ার, খুচরা যন্ত্রাংশ এবং পরবর্তী
              রক্ষণাবেক্ষণ পর্যন্ত এক জায়গায় সম্পূর্ণ সার্ভিস।
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/products">
                  পণ্য দেখুন
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8"
              >
                <Link href="/contact">যোগাযোগ করুন</Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="surface-panel glow-border p-4">
                  <p className="text-xl font-semibold text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="float-soft rise-in surface-panel glow-border relative overflow-hidden p-3">
            <div className="relative h-[280px] overflow-hidden rounded-xl md:h-[360px]">
              <Image
                src="/image (6).jpg"
                alt="Machine service in action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-8 left-8 right-8 rounded-xl border border-border/70 bg-background/85 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                Live Support
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                সমস্যার ধরন জানালে দ্রুত টেকনিক্যাল টিম সাপোর্ট পেয়ে যাবেন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
