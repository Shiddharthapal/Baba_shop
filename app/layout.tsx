import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import "@/styles/globals.css";

const fontBody = Manrope({ subsets: ["latin"], variable: "--font-body" });
const fontDisplay = Sora({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "দুই ভাই ইঞ্জিনিয়ারিং ওয়ার্কশপ",
  description:
    "কাঠ কাটার, রাইস মিল ও ইন্ডাস্ট্রিয়াল সার্ভিসের নির্ভরযোগ্য ও দ্রুত সমাধান।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontBody.variable} ${fontDisplay.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
