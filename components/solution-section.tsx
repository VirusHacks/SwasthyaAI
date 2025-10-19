"use client"

import { useEffect, useState } from "react"
import { Database, Zap, Users, MessageSquare } from "lucide-react"

export function SolutionSection() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      icon: Database,
      title: "Data Layer",
      description: "Pollution data, festival APIs, patient records feeding into the AI",
      color: "from-primary to-blue-500",
    },
    {
      icon: Zap,
      title: "Local Orchestrator",
      description: "Staffing, Supply, and Advisory Agents making local predictions",
      color: "from-secondary to-teal-500",
    },
    {
      icon: Users,
      title: "Regional Orchestrator",
      description: "Central node coordinating multiple hospitals, balancing load dynamically",
      color: "from-accent to-green-500",
    },
    {
      icon: MessageSquare,
      title: "Patient Impact",
      description: "Alerts sent in multiple languages via WhatsApp and SMS",
      color: "from-primary to-accent",
    },
  ]

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center">
          How Swasthya Sentinel Responds
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A scroll-based simulation showing how the system adapts in real time
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Animated workflow cards */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 transition-all duration-500 cursor-pointer ${
                    activeStep === index
                      ? `border-primary bg-primary/5 shadow-lg`
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${step.color} text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Animated visualization */}
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-border min-h-96 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent rounded-full blur-xl"></div>
            </div>
            <div className="relative z-10 text-center">
              <div
                className={`text-6xl font-bold bg-gradient-to-r ${steps[activeStep].color} bg-clip-text text-transparent mb-4`}
              >
                {activeStep + 1}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{steps[activeStep].title}</h3>
              <p className="text-muted-foreground max-w-xs">{steps[activeStep].description}</p>
            </div>
          </div>
        </div>

        {/* Floating tooltips */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Forecasts surge", "Reallocates staff", "Sends advisories", "Reduces wait times"].map((tooltip, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
            >
              <p className="text-sm font-medium text-foreground">{tooltip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
