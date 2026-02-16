import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "@/styles/globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "দুই ভাই ইঞ্জিনিয়ারিং ওয়ার্কশপ",
  description:
    "Dedicated to service, driven by excellence. Better, faster, smarter manufacturing solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}