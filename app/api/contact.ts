import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactPayload = {
  name?: unknown
  phone?: unknown
  email?: unknown
  subject?: unknown
  message?: unknown
}

function toSafeString(value: unknown, maxLength: number) {
  if (typeof value !== "string") return ""
  return value.trim().slice(0, maxLength)
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    const name = toSafeString(body.name, 80)
    const phone = toSafeString(body.phone, 40)
    const email = toSafeString(body.email, 120)
    const subject = toSafeString(body.subject, 140)
    const message = toSafeString(body.message, 4000)

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "নাম, মোবাইল এবং মেসেজ আবশ্যক।" },
        { status: 400 }
      )
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "মেসেজ কমপক্ষে ১০ অক্ষরের হতে হবে।" },
        { status: 400 }
      )
    }

    if (email && !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "সঠিক ইমেইল দিন অথবা ফাঁকা রাখুন।" },
        { status: 400 }
      )
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT ?? "587")
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL
    const senderEmail = process.env.CONTACT_FROM_EMAIL || smtpUser

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !receiverEmail || !senderEmail) {
      return NextResponse.json(
        {
          error:
            "ইমেইল সার্ভিস কনফিগার করা হয়নি। SMTP এবং CONTACT_RECEIVER_EMAIL সেট করুন।",
        },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const safeName = escapeHtml(name)
    const safePhone = escapeHtml(phone)
    const safeEmail = escapeHtml(email || "Not provided")
    const safeSubject = escapeHtml(subject || "Website message")
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>")

    await transporter.sendMail({
      from: `"Baba Shop Website" <${senderEmail}>`,
      to: receiverEmail,
      replyTo: email || undefined,
      subject: `[Website Contact] ${subject || "New customer message"}`,
      text: `Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Subject: ${subject || "Website message"}

Message:
${message}`,
      html: `<h2>New Website Message</h2>
<p><strong>Name:</strong> ${safeName}</p>
<p><strong>Phone:</strong> ${safePhone}</p>
<p><strong>Email:</strong> ${safeEmail}</p>
<p><strong>Subject:</strong> ${safeSubject}</p>
<p><strong>Message:</strong><br/>${safeMessage}</p>`,
    })

    return NextResponse.json({
      message: "ধন্যবাদ। আপনার মেসেজ নির্ধারিত ইমেইলে পাঠানো হয়েছে।",
    })
  } catch (error) {
    console.error("Contact form submission failed:", error)
    return NextResponse.json(
      { error: "এই মুহূর্তে মেসেজ পাঠানো যাচ্ছে না। পরে আবার চেষ্টা করুন।" },
      { status: 500 }
    )
  }
}
