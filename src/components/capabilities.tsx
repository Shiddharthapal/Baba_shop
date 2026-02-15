import { CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    title: "গাছ / কাঠ কাটার মেশিন বিক্রয়",
    description:
      "ওয়ার্কশপ ও ফার্নিচার ফ্যাক্টরির জন্য প্রয়োজনভিত্তিক মডেল নির্বাচন ও সাপোর্ট।",
  },
  {
    title: "চাল ভাঙা মেশিন সলিউশন",
    description:
      "ক্ষুদ্র ও মাঝারি রাইস মিলের জন্য কার্যক্ষম, কম খরচে নির্ভরযোগ্য মেশিন সেটআপ।",
  },
  {
    title: "সুপারি কাঠার মেশিন",
    description:
      "দ্রুত, সমান এবং নিরাপদভাবে সুপারি কাটার জন্য শক্তিশালী মেশিন সরবরাহ ও সাপোর্ট।",
  },
  {
    title: "চানাচুর, মোয়া ও বিস্কুট প্রসেসিং মেশিন",
    description:
      "চানাচুর, মোয়া ও বিস্কুট তৈরির জন্য উপযোগী মেশিন সেটআপ, ইনস্টলেশন এবং ব্যবহার নির্দেশনা।",
  },
  {
    title: "মরিচ, হলুদ ও মসলা গুঁড়া করার মেশিন",
    description:
      "মরিচ, হলুদ ও বিভিন্ন মসলা দ্রুত এবং সমানভাবে গুঁড়া করার জন্য উপযোগী মেশিন ও সেটআপ সাপোর্ট।",
  },
  {
    title: "অন-সাইট রিপেয়ার সার্ভিস",
    description:
      "মোটর, ব্লেড, বেয়ারিং ও কন্ট্রোল ইউনিটের দ্রুত ডায়াগনস্টিক ও মেরামত সেবা।",
  },
  {
    title: "খুচরা যন্ত্রাংশ সাপোর্ট",
    description:
      "প্রয়োজনীয় স্পেয়ার পার্টস দ্রুত সরবরাহ করে ডাউনটাইম কমাতে সহায়তা করি।",
  },
  {
    title: "দ্রুত সার্ভিস ও ওয়ারেন্টি",
    description:
      "কাজভিত্তিক সার্ভিস কমিটমেন্ট, ফলো-আপ এবং বিক্রয়-পরবর্তী সহায়তা।",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-card pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            আমাদের সক্ষমতা
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            কাঠ কাটার মেশিন, রাইস মিল মেশিন এবং ইন্ডাস্ট্রিয়াল সার্ভিসে সম্পূর্ণ
            সলিউশন, এক জায়গায়।
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 h-57 custom-scrollbar">
          {capabilities.map((capability) => (
            <div key={capability.title} className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-secondary" />
              <div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
