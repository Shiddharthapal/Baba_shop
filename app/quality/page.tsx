import { Header } from "@/Layout/header";
import { Footer } from "@/Layout/footer";
import { Quality } from "@/components/quality";

export default function QualityPage() {
  return (
    <main className="w-full">
      <Header />
      <div className="pt-16">
        <Quality />
      </div>
      <Footer />
    </main>
  );
}
