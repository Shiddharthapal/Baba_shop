import { Header } from "@/Layout/header";
import { Footer } from "@/Layout/footer";
import { Certifications } from "@/components/certifications";

export default function CertificationPage() {
  return (
    <main className="w-full">
      <Header />
      <div className="pt-16">
        <Certifications />
      </div>
      <Footer />
    </main>
  );
}
