import { Building2, Users, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    icon: Building2,
    title: "কারখানা ও সেটআপ",
    description:
      "আধুনিক ওয়ার্কশপ সেটআপে কাঠ কাটার এবং চাল ভাঙা মেশিনের বিক্রয়, ইনস্টলেশন ও সার্ভিস সাপোর্ট প্রদান করি।",
  },
  {
    icon: Users,
    title: "অভিজ্ঞ টিম",
    description:
      "দক্ষ টেকনিক্যাল টিম সাইট ভিজিট থেকে সমস্যা শনাক্তকরণ, রিপেয়ার এবং অপারেশন গাইডেন্স পর্যন্ত পাশে থাকে।",
  },
  {
    icon: Wrench,
    title: "বিক্রয়োত্তর সহায়তা",
    description:
      "খুচরা যন্ত্রাংশ, দ্রুত রিপেয়ার রেসপন্স এবং কাজভিত্তিক সাপোর্টের মাধ্যমে মেশিন ডাউনটাইম কমাতে সহায়তা করি।",
  },
]

export function About() {
  return (
    <section id="about" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              আমাদের সম্পর্কে
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              আমরা কাঠ কাটার মেশিন, চাল ভাঙা মেশিন এবং ইন্ডাস্ট্রিয়াল রিপেয়ার
              সার্ভিস নিয়ে কাজ করি। আমাদের লক্ষ্য হলো নির্ভরযোগ্য মান, দ্রুত
              সাপোর্ট এবং দীর্ঘমেয়াদি কাজের আস্থা নিশ্চিত করা।
            </p>
            <p className="mb-8 text-lg text-muted-foreground">
              নতুন মেশিন সরবরাহ থেকে শুরু করে পুরোনো মেশিনের সার্ভিস, পার্টস
              পরিবর্তন এবং নিয়মিত রক্ষণাবেক্ষণ পর্যন্ত প্রতিটি ধাপে আমরা বাস্তব
              কাজভিত্তিক সমাধান দিই।
            </p>

            <Button asChild variant="secondary">
              <a href="#products">পণ্য ও সার্ভিস দেখুন</a>
            </Button>
          </div>

          <div className="space-y-6">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-lg border border-border bg-card p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15">
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
