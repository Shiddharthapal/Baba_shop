import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";

const qualityPoints = [
  "ডেলিভারির আগে মোটর, ব্লেড ও সেফটি চেক সম্পন্ন করা হয়",
  "সাইটভিত্তিক ব্যবহার অনুযায়ী কনফিগারেশন যাচাই করা হয়",
  "রিপেয়ার শেষে ট্রায়াল রান এবং পারফরম্যান্স টেস্ট করা হয়",
  "প্রয়োজনীয় সার্ভিস গাইড ও ফলো-আপ সাপোর্ট প্রদান করা হয়",
];

const qualityFlow = [
  { step: "০১", title: "পরিদর্শন", note: "প্রাথমিক অবস্থা যাচাই" },
  { step: "০২", title: "পরীক্ষণ", note: "লোড ও পারফরম্যান্স টেস্ট" },
  { step: "০৩", title: "হস্তান্তর", note: "চূড়ান্ত মান নিশ্চিত করে হস্তান্তর" },
];

export function Quality() {
  return (
    <section id="quality" className="py-16 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-panel glow-border relative h-80 overflow-hidden p-3 lg:h-[510px]">
            <div className="relative h-full overflow-hidden rounded-xl">
              <Image
                src="/image (6).jpg"
                alt="মেশিন মান যাচাই প্রক্রিয়া"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-lg border border-border/70 bg-background/85 px-4 py-3 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                  Quality Assurance
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  প্রতিটি ইউনিট ডেলিভারির আগে চেকলিস্ট সম্পন্ন করা হয়
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block rounded-full border border-secondary/35 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
              গুণমান প্রতিশ্রুতি
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              নির্ভরযোগ্য কাজ, পরীক্ষিত মান
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
              কাঠ কাটার মেশিন, চাল ভাঙা মেশিন এবং রিপেয়ার সার্ভিসে আমরা প্রতিটি
              ধাপে কড়া মান যাচাই করি যাতে আপনার কাজ ধারাবাহিক থাকে।
            </p>

            <div className="mt-6 space-y-3">
              {qualityPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-muted-foreground md:text-base">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {qualityFlow.map((item) => (
                <div key={item.step} className="surface-panel p-4">
                  <p className="text-xs font-semibold text-secondary">ধাপ {item.step}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">কোয়ালিটি সাপোর্ট নিয়ে কথা বলুন</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:+8801719634871">
                  <PhoneCall className="h-4 w-4" />
                  এখনই কল করুন
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
