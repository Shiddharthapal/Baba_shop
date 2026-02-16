import { Award, CheckCircle, Shield } from "lucide-react"

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
]

export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-y border-border bg-card py-10 md:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            নীতি ও নির্ভরযোগ্যতা
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            মেশিন বিক্রয়, রিপেয়ার সার্ভিস এবং খুচরা যন্ত্রাংশ সাপোর্টে আমাদের কাজের
            নীতি ও মান বজায় রাখার প্রতিশ্রুতি।
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {certifications.map((cert) => {
            const Icon = cert.icon

            return (
              <div
                key={cert.title}
                className="rounded-lg border border-border bg-background p-8 text-center transition-colors hover:border-secondary"
              >
                <Icon className="mx-auto mb-4 h-12 w-12 text-secondary" />
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
