"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import {
  Clock3,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Phone,
    label: "ফোন",
    value: "01719-634871",
    href: "tel:+8801719634871",
  },
  {
    icon: MessageCircle,
    label: "হোয়াটসঅ্যাপ",
    value: "01886-634861",
    href: "https://wa.me/8801886634861",
  },
];

const supportPoints = [
  "মেশিন মডেল নির্বাচন ও প্রাথমিক গাইডেন্স",
  "রিপেয়ার/সার্ভিসের জন্য দ্রুত রেসপন্স",
  "প্রয়োজনমতো অন-সাইট সাপোর্ট সমন্বয়",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.message.trim().length < 10) {
      setSubmitState("error");
      setSubmitMessage("মেসেজ কমপক্ষে ১০ অক্ষরের হতে হবে।");
      return;
    }

    setSubmitState("submitting");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "বার্তা পাঠানো যায়নি।");
      }

      setSubmitState("success");
      setSubmitMessage(result.message ?? "ধন্যবাদ, আপনার মেসেজ পাঠানো হয়েছে।");
      setFormData(initialFormState);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "সার্ভারে সমস্যা হয়েছে। পরে চেষ্টা করুন।";
      setSubmitState("error");
      setSubmitMessage(message);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-border bg-card py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-secondary/15 px-4 py-2 text-sm font-semibold text-secondary">
              যোগাযোগ
            </span>
            <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">
              সার্ভিস বা কোটেশন দরকার?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              কাঠ কাটার মেশিন, চাল ভাঙা মেশিন কিংবা অন্যান্য প্রসেসিং ইউনিটের
              বিক্রয় ও রিপেয়ার সার্ভিসের জন্য সরাসরি যোগাযোগ করুন। সমস্যার ধরন
              জানালে দ্রুত পরবর্তী ধাপ জানিয়ে দেওয়া হবে।
            </p>

            <div className="space-y-4">
              {contactMethods.map((item) => {
                const Icon = item.icon;
                const external = item.href.startsWith("http");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="flex items-center justify-between rounded-lg border border-border bg-background p-4 transition-colors hover:border-secondary"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15">
                        <Icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      যোগাযোগ করুন
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <a href="tel:+8801719634871">এখনই কল করুন</a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://wa.me/8801886634861"
                  target="_blank"
                  rel="noreferrer"
                >
                  হোয়াটসঅ্যাপে মেসেজ
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background p-6 md:p-8">
            <h3 className="mb-6 text-xl font-bold text-foreground">
              সাপোর্ট তথ্য
            </h3>

            <div className="mb-5 flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  সার্ভিস এলাকা
                </p>
                <p className="text-sm text-muted-foreground">
                  বাগেরহাট, খুলনা, মোরেলগঞ্জ, রায়েন্দা, শরণখোলা, পিরোজপুর,
                  ফকিরহাট, রামপাল, কচুয়া, মঠবাড়িয়া (প্রয়োজনভিত্তিক সাপোর্ট)
                </p>
              </div>
            </div>

            <div className="mb-6 flex items-start gap-3">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  সাপোর্ট সময়
                </p>
                <p className="text-sm text-muted-foreground">
                  শনি - বৃহস্পতিবার: সকাল ৮ টা - রাত ১০ টা
                </p>
                <p className="text-sm text-muted-foreground">
                  শুক্রবার: সকাল ১০ টা - বিকেল ৪ টা
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {supportPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <p className="text-sm text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-border bg-background p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground">মেসেজ বক্স</h3>
            <p className="mt-2 text-muted-foreground">
              আপনার প্রয়োজন লিখে পাঠান।
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground">নাম</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-secondary"
                  placeholder="আপনার নাম"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground">
                  মোবাইল নাম্বার
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-secondary"
                  placeholder="01XXXXXXXXX"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground">
                  ইমেইল (ঐচ্ছিক)
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-secondary"
                  placeholder="name@example.com"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground">
                  বিষয় (ঐচ্ছিক)
                </span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-secondary"
                  placeholder="যেমন: রাইস মিল মেশিন সার্ভিস"
                />
              </label>
            </div>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-foreground">মেসেজ</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={500}
                rows={5}
                className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-secondary"
                placeholder="আপনার সমস্যা বা প্রয়োজন বিস্তারিত লিখুন..."
              />
              <p
                className={`text-xs text-right  ${formData.message.length >= 500 ? "text-red-500" : "text-muted-foreground"}`}
              >
                {formData.message.length}/500
              </p>
            </label>

            {submitMessage ? (
              <p
                className={
                  submitState === "success"
                    ? "text-sm font-medium text-green-500"
                    : "text-sm font-medium text-red-500"
                }
              >
                {submitMessage}
              </p>
            ) : null}

            <Button
              type="submit"
              variant="secondary"
              disabled={submitState === "submitting"}
              className="self-end"
            >
              {submitState === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  পাঠানো হচ্ছে...
                </>
              ) : (
                "মেসেজ পাঠান"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}


