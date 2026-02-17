import { Header } from "@/Layout/header";
import { Footer } from "@/Layout/footer";
import { About } from "@/components/about";

export default function AboutPage() {
  return (
    <main className="w-full">
      <Header />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
    </main>
  );
}
