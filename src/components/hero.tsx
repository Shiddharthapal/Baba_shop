import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <Image
        src="/image (5).jpg"
        alt="Industrial manufacturing equipment"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-background/70" />

      <div className="absolute inset-0 flex items-center justify-end">
        <div className="w-full md:w-1/2 px-6 md:px-12 pb-12 text-right relative">
          {/* Small Tagline Badge */}
          <span className="inline-block mb-6 px-4 py-2 bg-secondary/70 text-gray-100 text-sm font-semibold rounded-full tracking-wide">
            ইন্ডাস্ট্রিয়াল মেশিন সলিউশন
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            কাঠ কাটার ও রাইস মিল মেশিন
            <br />
            <span className="bg-gradient-to-l from-secondary to-yellow-400 bg-clip-text text-transparent">
              বিক্রয় ও মেরামত সেবা
            </span>
          </h1>

          {/* Description Line */}
          <p className="text-lg md:text-xl font-semibold text-gray-200 mb-8 tracking-wide">
            উন্নত মান | দ্রুত সার্ভিস | খুচরা যন্ত্রাংশ সুবিধা
          </p>

          {/* Button */}
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-yellow-500 transition-all duration-300 
               text-secondary-foreground font-bold text-sm px-10 py-6 
               shadow-lg hover:shadow-2xl hover:scale-105 rounded-full"
          >
            <Link href="#capabilities">আমাদের সেবাসমূহ দেখুন</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
