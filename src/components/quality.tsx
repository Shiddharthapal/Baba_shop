import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Quality() {
  return (
    <section id="quality" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden">
            <Image
              src="/preview.webp"
              alt="Quality manufacturing process"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quality First Approach
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Every component that leaves our facility meets the highest standards of
              excellence. Our comprehensive quality control process ensures precision,
              durability, and reliability in every product.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "ISO 9001:2015 Certified",
                "Advanced Testing Equipment",
                "Expert Quality Team",
                "Detailed Documentation",
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
              Learn More About Quality
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}