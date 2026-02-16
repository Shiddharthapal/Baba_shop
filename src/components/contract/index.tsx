import { Mail, MapPin, Phone } from "lucide-react"

const contacts = [
  {
    icon: Phone,
    label: "Phone",
    value: "(419)-594-2712",
    href: "tel:+14195942712",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@roberts.com",
    href: "mailto:info@roberts.com",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Tell us about your project. We respond quickly with practical guidance,
              timelines, and next steps.
            </p>
            <div className="space-y-4">
              {contacts.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
                  >
                    <Icon className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium">{item.value}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="bg-background border border-border rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-5 w-5 text-secondary mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Manufacturing Facility
                </p>
                <p className="text-sm text-muted-foreground">Ohio, USA</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-1">Hours</p>
              <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}