import { Award, Shield, CheckCircle } from "lucide-react"

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Quality Management System Certification",
  },
  {
    icon: Shield,
    title: "ISO 14001:2015",
    description: "Environmental Management Certification",
  },
  {
    icon: CheckCircle,
    title: "Industry Standards",
    description: "Full compliance with ANSI and ASME standards",
  },
]

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 md:py-24 bg-card border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Policies & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading certifications demonstrating our commitment to excellence
            and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert) => {
            const Icon = cert.icon
            return (
              <div
                key={cert.title}
                className="bg-background rounded-lg p-8 text-center hover:border-secondary border border-border transition-colors"
              >
                <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}