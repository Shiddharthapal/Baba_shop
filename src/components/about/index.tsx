import { Building2, Users, ShieldCheck } from "lucide-react"

const highlights = [
  {
    icon: Building2,
    title: "Purpose-Built Facility",
    description:
      "Modern equipment, calibrated workflows, and a layout optimized for precision manufacturing.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "A cross-functional team that partners with you from prototype to production.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability First",
    description:
      "Documented processes, strict inspections, and continuous improvement across every job.",
  },
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Roberts Manufacturing
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We build high-precision components for demanding industrial applications.
              Our focus is straightforward: deliver consistent quality, keep timelines
              tight, and make collaboration easy.
            </p>
            <p className="text-lg text-muted-foreground">
              From machining to inspection and documentation, every step is designed
              to reduce risk and increase confidence in your supply chain.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-secondary/15 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}