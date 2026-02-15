import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Capabilities } from "@/components/capabilities"
import { Quality } from "@/components/quality"
import { Certifications } from "@/components/certifications"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Products } from "@/components/products"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <div className="pt-16">
        <Hero />
        <Products/>
        <Capabilities />
        <Quality />
        <Certifications />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}