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
    <section id="quality" className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative order-2 h-80 overflow-hidden rounded-xl border border-border lg:order-1 lg:h-[480px]">
            <Image
              src="/image (6).jpg"
              alt="মেশিন মান যাচাই প্রক্রিয়া"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-md bg-background/90 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                মান নিয়ন্ত্রণ
              </p>
              <p className="text-sm font-medium text-foreground">
                প্রতিটি ইউনিট ডেলিভারির আগে চেকলিস্ট সম্পন্ন
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-block rounded-full bg-secondary/15 px-4 py-2 text-sm font-semibold text-secondary">
              গুণমান প্রতিশ্রুতি
            </span>
            <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">
              নির্ভরযোগ্য কাজ, পরীক্ষিত মান
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              কাঠ কাটার মেশিন, চাল ভাঙা মেশিন এবং রিপেয়ার সার্ভিসে আমরা কাজের
              প্রতিটি ধাপে মান যাচাই করি, যাতে আপনার উৎপাদন বন্ধ না হয়ে
              স্থিরভাবে চলতে পারে।
            </p>

            <div className="mb-8 space-y-3">
              {qualityPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>

            <div className="mb-8 grid gap-3 sm:grid-cols-3">
              {qualityFlow.map((item) => (
                <div
                  key={item.step}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <p className="mb-1 text-xs font-semibold text-secondary">
                    ধাপ {item.step}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link href="#contact">কোয়ালিটি সাপোর্ট নিয়ে কথা বলুন</Link>
              </Button>
              <Button asChild variant="outline">
                <div>
                  <PhoneCall />
                  <a href="tel:+8801719634871">এখনই কল করুন</a>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
