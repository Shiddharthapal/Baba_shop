import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Capabilities } from "@/components/capabilities";
import { Quality } from "@/components/quality";
import { Certifications } from "@/components/certifications";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <Capabilities />
      <Quality />
      <Certifications />
      <About />
      <Contact />
    </>
  );
}
