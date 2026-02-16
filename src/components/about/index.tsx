import { Building2, Clock3, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Building2,
    title: "ওয়ার্কশপ-ভিত্তিক বাস্তব অভিজ্ঞতা",
    description:
      "দীর্ঘদিন ধরে কাঠ কাটার ও খাদ্য প্রক্রিয়াজাত মেশিন নিয়ে কাজের অভিজ্ঞতা থেকে কার্যকর সমাধান দেই।",
  },
  {
    icon: Wrench,
    title: "বিক্রয় + রিপেয়ার একসাথে",
    description:
      "শুধু মেশিন বিক্রয় নয়, ইনস্টলেশন, ত্রুটি নির্ণয়, রিপেয়ার এবং খুচরা যন্ত্রাংশ সাপোর্টও নিশ্চিত করি।",
  },
  {
    icon: ShieldCheck,
    title: "কাজভিত্তিক মান নিশ্চয়তা",
    description:
      "প্রতিটি কাজ শেষে কার্যক্ষমতা যাচাই করে হস্তান্তর করা হয়, যাতে উৎপাদনে ঝামেলা কমে।",
  },
  {
    icon: Clock3,
    title: "দ্রুত রেসপন্স সাপোর্ট",
    description:
      "জরুরি সার্ভিসের ক্ষেত্রে দ্রুত যোগাযোগ, প্রাথমিক গাইডলাইন ও প্রয়োজনমতো সাইট সাপোর্ট দেওয়া হয়।",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-secondary/15 px-4 py-2 text-sm font-semibold text-secondary">
              আমাদের সম্পর্কে
            </span>
            <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">
              দুই ভাই ইঞ্জিনিয়ারিং ওয়ার্কশপ
            </h2>
            <p className="mb-5 text-lg text-muted-foreground">
              আমরা কাঠ কাটার মেশিন, চাল ভাঙা মেশিন এবং অন্যান্য ইন্ডাস্ট্রিয়াল
              প্রসেসিং ইউনিটের বিক্রয় ও রিপেয়ার সার্ভিস দিয়ে থাকি। লক্ষ্য একটাই,
              আপনার কাজের ধারাবাহিকতা ধরে রাখা।
            </p>
            <p className="mb-8 text-lg text-muted-foreground">
              মডেল নির্বাচন থেকে শুরু করে ইনস্টলেশন, পারফরম্যান্স টেস্ট এবং
              বিক্রয়-পরবর্তী সাপোর্ট পর্যন্ত প্রতিটি ধাপে ব্যবহারযোগ্য,
              বাস্তবভিত্তিক সহায়তা প্রদান করি।
            </p>
            <p className="mb-8 text-lg text-muted-foreground">
              দক্ষ টেকনিশিয়ান টিম, মানসম্মত যন্ত্রাংশ এবং দ্রুত সাড়া প্রদানের
              মাধ্যমে আমরা দীর্ঘমেয়াদি নির্ভরযোগ্য সার্ভিস নিশ্চিত করি।
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                  সেবা এলাকা
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                 বাগেরহাট, মোরেলগঞ্জ, রায়েন্দা, শরণখোলা, পিরোজপুর, ফকিরহাট, ফকিরহাট, রামপাল, কচুয়া, মঠবাড়িয়া
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                  যোগাযোগ
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  01719634871
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h3 className="mb-6 text-xl font-bold text-foreground">
              কেন আমাদের সাথে কাজ করবেন
            </h3>
            <div className="space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-base font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <a href="#contact">সরাসরি যোগাযোগ করুন</a>
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
