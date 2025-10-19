"use client"

export function ImpactVisualization() {
  const impacts = [
    {
      value: "35%",
      label: "Shorter Wait Times",
      description: "Reduced patient wait times during peak periods through predictive resource allocation",
      icon: "⏱️",
    },
    {
      value: "100%",
      label: "Zero Supply Stockouts",
      description: "Maintained supply levels during peak periods with AI-driven inventory management",
      icon: "📦",
    },
    {
      value: "500+",
      label: "Rural Hospitals Connected",
      description: "Hospitals across India connected to the network for collaborative care",
      icon: "🏥",
    },
  ]

  return (
    <section
      id="impact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-card/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">Measurable Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Real outcomes that transform healthcare delivery and save lives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-card via-card to-card/50 border border-border/60 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{impact.icon}</div>
                <div className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                  {impact.value}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{impact.label}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{impact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
