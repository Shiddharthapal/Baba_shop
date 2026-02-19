"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CircleDollarSign, X } from "lucide-react";

import { Button } from "@/components/ui/button";

type Product = {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  usage: string;
  serviceWarranty: string;
  priceInfo: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "ডেমো কাঠ কাটার মেশিন - X120",
    category: "মেশিন বিক্রয়",
    shortDescription:
      "ফার্নিচার ওয়ার্কশপের জন্য মাঝারি ক্ষমতার ডেমো কাঠ কাটার মেশিন।",
    fullDescription:
      "এটি একটি ডেমো প্রোডাক্ট ডেটা। রিয়েল প্রজেক্টে এখানে মোটর ক্ষমতা, RPM, ব্লেড সাইজ, বডি ম্যাটেরিয়াল এবং সেফটি ফিচারের তথ্য বসানো হবে।",
    usage:
      "ছোট ও মাঝারি কাঠ প্রসেসিং ইউনিট, ফার্নিচার ফ্যাক্টরি এবং স্থানীয় কারখানায় ব্যবহারযোগ্য।",
    serviceWarranty: "ডেমো ওয়ারেন্টি: ৬ মাস সার্ভিস সাপোর্ট (উদাহরণ)।",
    priceInfo: "ডেমো মূল্য: ৳ ১,৮৫,০০০",
    image: "/nature.jpeg",
  },
  {
    id: 2,
    title: "ডেমো চাল ভাঙা মেশিন - R80",
    category: "মেশিন বিক্রয়",
    shortDescription:
      "কম বিদ্যুৎ খরচে চাল/ধান প্রসেসিংয়ের জন্য নির্ভরযোগ্য ডেমো মডেল।",
    fullDescription:
      "এটি একটি উদাহরণ ডেটা এন্ট্রি। বাস্তবে এখানে প্রতি ঘণ্টার আউটপুট, মোটর স্পেসিফিকেশন, ফিড সিস্টেম এবং মেইনটেন্যান্স চাহিদা দেখানো যাবে।",
    usage:
      "ক্ষুদ্র ও মাঝারি রাইস মিল, স্থানীয় খাদ্য প্রক্রিয়াজাতকরণ ইউনিটে ব্যবহার করা যায়।",
    serviceWarranty: "ডেমো সার্ভিস: ৩ মাস টেকনিক্যাল সাপোর্ট (উদাহরণ)।",
    priceInfo: "ডেমো মূল্য: ৳ ২,২৫,০০০",
    image: "/preview.webp",
  },
  {
    id: 3,
    title: "ডেমো রিপেয়ার সার্ভিস প্যাকেজ",
    category: "রিপেয়ার সার্ভিস",
    shortDescription:
      "মোটর, ব্লেড, বেয়ারিং ও কন্ট্রোল ইউনিট ডায়াগনস্টিক এবং রিপেয়ার।",
    fullDescription:
      "এটি একটি ডেমো সার্ভিস কার্ড। আপনার বাস্তব প্রয়োজনে সাইট ভিজিট, পার্টস রিপ্লেসমেন্ট, অ্যালাইনমেন্ট এবং পারফরম্যান্স টিউনিংয়ের বিস্তারিত যোগ করা যাবে।",
    usage:
      "কাঠ কাটার মেশিন, রাইস মেশিন এবং ওয়ার্কশপের অন্যান্য যান্ত্রিক ইউনিটে প্রযোজ্য।",
    serviceWarranty: "ডেমো গ্যারান্টি: কাজভেদে ৩০-৯০ দিন (উদাহরণ)।",
    priceInfo: "ডেমো সার্ভিস চার্জ: ৳ ৫,০০০ থেকে শুরু",
    image: "/nature.jpeg",
  },
  {
    id: 4,
    title: "ডেমো স্পেয়ার পার্টস সেট",
    category: "খুচরা যন্ত্রাংশ",
    shortDescription: "হাই-গ্রেড ব্লেড, বেয়ারিং ও বেল্ট সহ ডেমো কম্বো সেট।",
    fullDescription:
      "ওয়ার্কশপে দ্রুত রিপেয়ার নিশ্চিত করতে প্রয়োজনীয় পার্টস সেটের ডেমো বর্ণনা। প্রয়োজনমতো ভিন্ন ভিন্ন কম্বিনেশন দেখানো যাবে।",
    usage: "ডাউনটাইম কমাতে এবং জরুরি মেইনটেন্যান্সে দ্রুত সাপোর্টের জন্য।",
    serviceWarranty: "ডেমো পরিবর্তন সুবিধা: ৭ দিনের মধ্যে (উদাহরণ)।",
    priceInfo: "ডেমো মূল্য: ৳ ১২,০০০",
    image: "/preview.webp",
  },
  {
    id: 5,
    title: "ডেমো কাস্টম মেশিন ফ্যাব্রিকেশন",
    category: "কাস্টম সলিউশন",
    shortDescription:
      "কারখানার প্রয়োজন অনুযায়ী কাস্টম ডিজাইন ও তৈরি (ডেমো তথ্য)।",
    fullDescription:
      "এখানে কাস্টম মেশিন প্রকল্পের ডেমো বর্ণনা দেখানো হয়েছে। বাস্তবে ডিজাইন টাইমলাইন, ডেলিভারি এবং টেস্টিং ধাপ যোগ করা হবে।",
    usage:
      "নতুন ইউনিট সেটআপ, উৎপাদন লাইন আপগ্রেড এবং নির্দিষ্ট কাজের জন্য কাস্টম প্রয়োজনে।",
    serviceWarranty: "ডেমো সাপোর্ট: প্রজেক্ট হ্যান্ডওভারের পর অন-কল গাইডেন্স।",
    priceInfo: "ডেমো কোটেশন: প্রয়োজন অনুযায়ী",
    image: "/nature.jpeg",
  },
];

function ProductDetails({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!product) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="মডাল বন্ধ করুন"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="surface-panel glow-border relative z-10 w-full max-w-4xl overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/80 text-muted-foreground hover:text-foreground"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid gap-6 p-5 md:grid-cols-[0.95fr_1.05fr] md:p-7">
          <div className="relative h-60 overflow-hidden rounded-xl md:h-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
              {product.category}
            </p>
            <h3 className="text-2xl font-semibold text-foreground">
              {product.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {product.fullDescription}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                ব্যবহার ক্ষেত্র:
              </span>{" "}
              {product.usage}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                সার্ভিস/ওয়ারেন্টি:
              </span>{" "}
              {product.serviceWarranty}
            </p>
            <p className="mt-4 flex items-center gap-2 text-base font-semibold text-primary">
              <CircleDollarSign className="h-4 w-4" />
              {product.priceInfo}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="tel:+8801719634871">এখনই কল করুন</a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://wa.me/8801719634871"
                  target="_blank"
                  rel="noreferrer"
                >
                  হোয়াটসঅ্যাপ
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const visibleProducts = useMemo(
    () => (showAll ? products : products.slice(0, 3)),
    [showAll],
  );

  return (
    <section id="products" className="pb-12 pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-4 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            নির্বাচিত কাজসমূহ
          </span>

          <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
            আমাদের জনপ্রিয় পণ্য ও সার্ভিস
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            ডেমো কন্টেন্টের জায়গায় আপনার আসল পণ্যের স্পেসিফিকেশন, মূল্য ও
            ওয়ারেন্টি তথ্য যোগ করলেই এই সেকশন live-ready হয়ে যাবে।
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product, index) => (
            <article
              key={product.id}
              className="surface-panel glow-border group overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
                <p className="absolute bottom-3 left-3 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary">
                  {product.category}
                </p>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-foreground">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {product.shortDescription}
                </p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  {product.priceInfo}
                </p>

                <Button
                  variant="outline"
                  className="mt-5 w-full rounded-xl"
                  onClick={() => setSelectedProduct(product)}
                >
                  বিস্তারিত দেখুন
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Button
            variant="secondary"
            className="rounded-full px-7"
            onClick={() => {
              setShowAll((previous) => !previous);
              setSelectedProduct(null);
            }}
          >
            {showAll ? "কম দেখুন" : "সব দেখুন"}
          </Button>
        </div>

        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </section>
  );
}
