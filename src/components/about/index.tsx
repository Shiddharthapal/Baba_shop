import Link from "next/link";
import { Building2, Clock3, ShieldCheck, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Building2,
    title: "ওয়ার্কশপ-ভিত্তিক বাস্তব অভিজ্ঞতা",
    description:
      "দীর্ঘদিনের মাঠপর্যায়ের কাজের অভিজ্ঞতা থেকে আমরা বাস্তব সমস্যা ধরে সমাধান দিই।",
  },
  {
    icon: Wrench,
    title: "বিক্রয় + রিপেয়ার একসাথে",
    description:
      "মেশিন সরবরাহের সাথে ইনস্টলেশন, ত্রুটি নির্ণয় এবং নিয়মিত সার্ভিস সাপোর্ট নিশ্চিত করি।",
  },
  {
    icon: ShieldCheck,
    title: "কাজভিত্তিক মান নিশ্চয়তা",
    description:
      "প্রতিটি কাজের শেষে পারফরম্যান্স চেক করে হস্তান্তর করা হয়, যাতে উৎপাদনে বিঘ্ন না ঘটে।",
  },
  {
    icon: Clock3,
    title: "দ্রুত রেসপন্স সাপোর্ট",
    description:
      "জরুরি সার্ভিসে দ্রুত যোগাযোগ, প্রাথমিক গাইডলাইন ও প্রয়োজনমতো সাইট ভিজিট প্রদান করা হয়।",
  },
];

export function About() {
  return (
    <section id="about" className="py-12 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-block rounded-full border border-secondary/35 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
              আমাদের সম্পর্কে
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              দুই ভাই ইঞ্জিনিয়ারিং ওয়ার্কশপ
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
              আমরা কাঠ কাটার মেশিন, চাল ভাঙা মেশিন এবং অন্যান্য ইন্ডাস্ট্রিয়াল
              প্রসেসিং ইউনিটের বিক্রয় ও রিপেয়ার সার্ভিস দিয়ে থাকি। আমাদের লক্ষ্য
              একটাই: আপনার কাজের ধারাবাহিকতা ধরে রাখা।
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
              মডেল নির্বাচন, ইনস্টলেশন, পারফরম্যান্স টেস্ট থেকে বিক্রয়-পরবর্তী
              সাপোর্ট পর্যন্ত প্রতিটি ধাপে ব্যবহারযোগ্য সহায়তা প্রদান করি।
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="surface-panel p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  সেবা এলাকা
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  বাগেরহাট, মোরেলগঞ্জ, রায়েন্দা, শরণখোলা, পিরোজপুর, ফকিরহাট,
                  রামপাল, কচুয়া, মঠবাড়িয়া
                </p>
              </div>
              <div className="surface-panel p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  হেল্পলাইন
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">01719-634871</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  জরুরি সাপোর্টে দ্রুত সাড়া
                </p>
              </div>
            </div>
          </div>

          <div className="surface-panel glow-border p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-foreground">
              কেন আমাদের সাথে কাজ করবেন
            </h3>

            <div className="mt-6 space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">সরাসরি যোগাযোগ করুন</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:+8801719634871">এখনই কল করুন</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
