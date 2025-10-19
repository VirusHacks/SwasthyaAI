"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">SS</span>
          </div>
          <div>
            <span className="font-bold text-lg text-foreground block">Swasthya Sentinel</span>
            <span className="text-xs text-muted-foreground">Predictive Hospital Intelligence</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#solution"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Solution
          </a>
          <a
            href="#capabilities"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Capabilities
          </a>
          <a
            href="#impact"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Impact
          </a>
        </nav>
        <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 text-primary-foreground font-semibold transition-all duration-300">
          Get Started
        </Button>
      </div>
    </header>
  )
}
