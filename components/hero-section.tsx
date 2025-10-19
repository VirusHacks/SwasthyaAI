"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-in-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Predict. Prepare. Protect.
            </span>
          </h1>
        </div>

        <p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in-right"
          style={{ animationDelay: "0.2s" }}
        >
          Agentic AI that helps hospitals anticipate and manage surges during festivals, pollution spikes, and
          epidemics.
        </p>

        {/* Animated hero illustration placeholder */}
        <div className="mb-12 h-64 sm:h-80 bg-gradient-to-b from-primary/5 to-accent/5 rounded-2xl border border-border flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse-glow"></div>
            <div
              className="absolute w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full opacity-30 animate-pulse-glow"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full opacity-40 animate-pulse-glow"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <span className="relative text-muted-foreground text-sm">AI Nodes Connecting Hospitals Across India</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            Run Simulation
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            <Play className="w-4 h-4" />
            View Prototype
          </Button>
        </div>
      </div>
    </section>
  )
}
