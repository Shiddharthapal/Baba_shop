import { Header } from "@/Layout/header";
import { Footer } from "@/Layout/footer";
import { Products } from "@/components/products";

export default function ProductsPage() {
  return (
    <main className="w-full">
      <Header />
      <div className="pt-16">
        <Products />
      </div>
      <Footer />
    </main>
  );
}
