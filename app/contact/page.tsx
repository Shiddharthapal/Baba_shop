import { Header } from "@/Layout/header";
import { Footer } from "@/Layout/footer";
import { Contact } from "@/components/contact";

export default function ContactPage() {
  return (
    <main className="w-full">
      <Header />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
