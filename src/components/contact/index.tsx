"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { Clock3, Loader2, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

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

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        error instanceof Error ? error.message : "সার্ভারে সমস্যা হয়েছে। পরে চেষ্টা করুন।";
      setSubmitState("error");
      setSubmitMessage(message);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            যোগাযোগ
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
            সার্ভিস বা কোটেশন দরকার?
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            আপনার প্রয়োজন জানালে দ্রুত টেকনিক্যাল টিম থেকে পরবর্তী ধাপ জানানো হবে।
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            {contactMethods.map((item) => {
              const Icon = item.icon;
              const external = item.href.startsWith("http");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="surface-panel glow-border flex items-center justify-between p-5 transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">যোগাযোগ করুন</span>
                </a>
              );
            })}

            <div className="surface-panel p-6">
              <h3 className="text-xl font-semibold text-foreground">সাপোর্ট তথ্য</h3>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">যোগাযোগ</p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      বাগেরহাট
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">সাপোর্ট সময়</p>
                    <p className="text-sm text-muted-foreground">
                      শনি - বৃহস্পতিবার: সকাল ৮ টা - রাত ১০ টা
                    </p>
                    <p className="text-sm text-muted-foreground">
                      শুক্রবার: সকাল ১০ টা - বিকেল ৪ টা
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {supportPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <p className="text-sm text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="surface-panel glow-border p-6 md:p-7">
            <h3 className="text-2xl font-semibold text-foreground">মেসেজ বক্স</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              আপনার সমস্যা বা প্রয়োজন সংক্ষেপে লিখে পাঠান।
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">নাম</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="আপনার নাম"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">মোবাইল নাম্বার</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="01XXXXXXXXX"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">ইমেইল (ঐচ্ছিক)</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="name@example.com"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">বিষয় (ঐচ্ছিক)</span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
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
                  className="w-full rounded-xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="আপনার সমস্যা বা প্রয়োজন বিস্তারিত লিখুন..."
                />
                <p
                  className={`text-right text-xs ${
                    formData.message.length >= 500 ? "text-red-500" : "text-muted-foreground"
                  }`}
                >
                  {formData.message.length}/500
                </p>
              </label>

              {submitMessage ? (
                <p
                  className={
                    submitState === "success"
                      ? "text-sm font-medium text-emerald-400"
                      : "text-sm font-medium text-red-400"
                  }
                >
                  {submitMessage}
                </p>
              ) : null}

              <Button
                type="submit"
                disabled={submitState === "submitting"}
                className="w-full rounded-xl md:w-auto"
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
      </div>
    </section>
  );
}
