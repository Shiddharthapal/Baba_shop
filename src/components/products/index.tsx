"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

type Product = {
  id: number
  title: string
  category: string
  shortDescription: string
  fullDescription: string
  usage: string
  serviceWarranty: string
  priceInfo: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    title: "গাছ / কাঠ কাটার মেশিন - ট্রলি মেশিন",
    category: "মেশিন বিক্রয়",
    shortDescription:
      "ফার্নিচার ওয়ার্কশপের জন্য মাঝারি ক্ষমতার ডেমো কাঠ কাটার মেশিন।",
    fullDescription:
      "এটি একটি ডেমো প্রোডাক্ট ডেটা। রিয়েল প্রজেক্টে এখানে মোটর ক্ষমতা, RPM, ব্লেড সাইজ, বডি ম্যাটেরিয়াল এবং সেফটি ফিচারের তথ্য বসানো হবে।",
    usage:
      "ছোট ও মাঝারি কাঠ প্রসেসিং ইউনিট, ফার্নিচার ফ্যাক্টরি এবং স্থানীয় কারখানায় ব্যবহারযোগ্য।",
    serviceWarranty: "ডেমো ওয়ারেন্টি: ৬ মাস সার্ভিস সাপোর্ট (উদাহরণ)।",
    priceInfo: "ডেমো মূল্য: ৳ ৪,৩৫,০০০",
    image: "/image (6).jpg",
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
    shortDescription:
      "হাই-গ্রেড ব্লেড, বেয়ারিং ও বেল্ট সহ ডেমো কম্বো সেট।",
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
    serviceWarranty:
      "ডেমো সাপোর্ট: প্রজেক্ট হ্যান্ডওভারের পর অন-কল গাইডেন্স।",
    priceInfo: "ডেমো কোটেশন: প্রয়োজন অনুযায়ী",
    image: "/nature.jpeg",
  },
]

function ProductDetails({
  product,
  onClose,
}: {
  product: Product | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!product) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [product, onClose])

  if (!product) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="মডাল বন্ধ করুন"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.title}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-border bg-background p-6 md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          বন্ধ করুন
        </button>

        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <img
            src={product.image}
            alt={product.title}
            className="h-52 w-full rounded-lg object-cover md:h-56 md:w-80"
          />

          <div className="flex-1">
            <p className="mb-2 text-sm font-semibold text-secondary">{product.category}</p>
            <h3 className="mb-4 text-2xl font-bold text-foreground">{product.title}</h3>
            <p className="mb-3 text-muted-foreground">{product.fullDescription}</p>
            <p className="mb-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">ব্যবহার ক্ষেত্র:</span>{" "}
              {product.usage}
            </p>
            <p className="mb-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">সার্ভিস/ওয়ারেন্টি:</span>{" "}
              {product.serviceWarranty}
            </p>
            <p className="mb-5 text-sm font-medium text-foreground">{product.priceInfo}</p>

            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <a href="tel:+8801719634871">কল করুন</a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://wa.me/8801719634871" target="_blank" rel="noreferrer">
                  হোয়াটসঅ্যাপ
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Products() {
  const [showAll, setShowAll] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const visibleProducts = useMemo(
    () => (showAll ? products : products.slice(0, 3)),
    [showAll]
  )

  return (
    <section id="products" className="py-16 md:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            আমাদের পণ্য ও সার্ভিস
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            কাঠ কাটার মেশিন, চাল ভাঙা মেশিন এবং ইন্ডাস্ট্রিয়াল রিপেয়ার সার্ভিসে
            নির্ভরযোগ্য সমাধান।
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-xl border border-border bg-background"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-secondary">
                  {product.category}
                </p>
                <h3 className="mb-2 text-lg font-bold text-foreground">{product.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {product.shortDescription}
                </p>
                <p className="mb-4 text-xs font-medium text-foreground">{product.priceInfo}</p>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedProduct(product)}
                >
                  বিস্তারিত
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            variant="secondary"
            onClick={() => {
              setShowAll((prev) => !prev)
              setSelectedProduct(null)
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
  )
}
