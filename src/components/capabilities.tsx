import { CheckCircle2 } from "lucide-react"

const capabilities = [
  {
    title: "Precision Machining",
    description: "State-of-the-art equipment for exact specifications",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and inspection standards",
  },
  {
    title: "Advanced Engineering",
    description: "Expert team with decades of experience",
  },
  {
    title: "Custom Solutions",
    description: "Tailored manufacturing for unique requirements",
  },
  {
    title: "Rapid Turnaround",
    description: "Efficient production timelines without compromise",
  },
  {
    title: "Industry Certified",
    description: "Full compliance with ISO and industry standards",
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Plant Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive manufacturing solutions built on precision, quality, and
            reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div key={capability.title} className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}