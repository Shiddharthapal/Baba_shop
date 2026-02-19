import {
  Drill,
  Gauge,
  PackageCheck,
  Settings2,
  ShieldCheck,
  Wheat,
  Wrench,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    icon: Drill,
    title: "কাঠ কাটার মেশিন বিক্রয়",
    description:
      "ওয়ার্কশপ ও ফার্নিচার ইউনিট অনুযায়ী কাস্টম ক্ষমতার মডেল বাছাই এবং সেটআপ।",
  },
  {
    icon: Wheat,
    title: "রাইস মিল মেশিন সলিউশন",
    description: "চাল প্রসেসিংয়ের জন্য উপযোগী মেশিন কনফিগারেশন।",
  },
  {
    icon: Wrench,
    title: "অন-সাইট রিপেয়ার সার্ভিস",
    description:
      "মোটর, ব্লেড, বেয়ারিং ও কন্ট্রোল ইউনিটের দ্রুত ডায়াগনস্টিক ও সমাধান।",
  },
  {
    icon: PackageCheck,
    title: "খুচরা যন্ত্রাংশ সরবরাহ",
    description: "প্রয়োজনীয় পার্টস দ্রুত সরবরাহ করে ডাউনটাইম কমাতে সহায়তা করি।",
  },
  {
    icon: Settings2,
    title: "কাস্টম মেশিন ফ্যাব্রিকেশন",
    description:
      "প্রোডাকশন লাইনের চাহিদা অনুযায়ী ডিজাইন, নির্মাণ ও ডেলিভারি সাপোর্ট।",
  },
  {
    icon: Gauge,
    title: "পারফরম্যান্স টেস্টিং",
    description:
      "সাইটভিত্তিক লোড ও পারফরম্যান্স টেস্ট করে ইউনিট হস্তান্তর করা হয়।",
  },
  {
    icon: ShieldCheck,
    title: "ওয়ারেন্টি ও ফলো-আপ",
    description:
      "কাজভিত্তিক ওয়ারেন্টি, ব্যবহার নির্দেশনা এবং পরবর্তী সার্ভিস কমিটমেন্ট।",
  },
  {
    icon: Zap,
    title: "দ্রুত রেসপন্স সাপোর্ট",
    description:
      "জরুরি কেসে প্রাধান্যভিত্তিক রেসপন্স ও প্রয়োজনমতো ফিল্ড ভিজিট সমন্বয়।",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-4 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-secondary/35 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
            প্রযুক্তি ও দক্ষতা
          </span>

          <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
            আপনার কাজের জন্য সম্পূর্ণ মেশিন সাপোর্ট
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            বিক্রয় থেকে ইনস্টলেশন, রিপেয়ার থেকে পার্টস সাপোর্ট পর্যন্ত প্রতিটি
            ধাপে বাস্তবভিত্তিক সমাধান।
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="surface-panel glow-border group h-full p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {capability.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
