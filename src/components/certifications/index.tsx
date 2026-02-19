import { Award, CheckCircle, Shield } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "মান নিয়ন্ত্রণ নীতি",
    description:
      "প্রতিটি মেশিন ডেলিভারির আগে পারফরম্যান্স, সেফটি ও ফাইনাল অপারেশন চেক করা হয়।",
  },
  {
    icon: Shield,
    title: "সার্ভিস নিশ্চয়তা",
    description:
      "কাজভিত্তিক রিপেয়ার সাপোর্ট, দ্রুত রেসপন্স এবং বিক্রয়-পরবর্তী সহায়তা নিশ্চিত করা হয়।",
  },
  {
    icon: CheckCircle,
    title: "খুচরা যন্ত্রাংশ সাপোর্ট",
    description:
      "প্রয়োজনীয় পার্টস দ্রুত সরবরাহ ও সঠিক ফিটমেন্টের মাধ্যমে ডাউনটাইম কমাতে সহায়তা করি।",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Trust & Policy
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
            নীতি, নিরাপত্তা ও নির্ভরযোগ্যতা
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            মেশিন বিক্রয়, রিপেয়ার সার্ভিস এবং খুচরা যন্ত্রাংশ সাপোর্টে প্রতিটি কাজ
            নথিভুক্ত প্রক্রিয়া অনুযায়ী সম্পন্ন করা হয়।
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <article
                key={cert.title}
                className="surface-panel glow-border h-full p-6 text-center"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{cert.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{cert.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
