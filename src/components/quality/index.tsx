import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Quality() {
  return (
    <section id="quality" className="bg-background py-16 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative h-96 min-h-96 overflow-hidden rounded-lg md:h-full">
            <Image
              src="/preview.webp"
              alt="মেশিন কোয়ালিটি চেক এবং সার্ভিস প্রস্তুতি"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              কোয়ালিটি ও সার্ভিসে আমাদের অঙ্গীকার
            </h2>

            <p className="mb-6 text-lg text-muted-foreground">
              প্রতিটি মেশিন ডেলিভারির আগে কর্মক্ষমতা, নিরাপত্তা এবং স্থায়িত্ব যাচাই
              করা হয়। বিক্রয়ের পরেও দ্রুত সাড়া দিয়ে রিপেয়ার ও খুচরা যন্ত্রাংশ
              সাপোর্ট নিশ্চিত করি।
            </p>

            <div className="mb-8 space-y-4">
              {[
                "ডেলিভারির আগে পূর্ণ মেশিন টেস্ট ও ফাইনাল চেক",
                "অরিজিনাল পার্টস ও সঠিক ফিটমেন্ট সাপোর্ট",
                "অন-সাইট ডায়াগনস্টিক ও দ্রুত রিপেয়ার রেসপন্স",
                "কাজভিত্তিক সার্ভিস গাইডলাইন ও ওয়ারেন্টি সহায়তা",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-secondary font-bold text-secondary-foreground hover:bg-secondary/90"
            >
              <a href="#products">পণ্য ও সার্ভিস বিস্তারিত দেখুন</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
