"use client"

import { Github, Mail, Heart, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-card/50 border-t border-border/40 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div>
                <span className="font-bold text-foreground block">Swasthya Sentinel</span>
                <span className="text-xs text-muted-foreground">Predictive Hospital Intelligence</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming healthcare through agentic AI and predictive intelligence
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#capabilities" className="hover:text-primary transition-colors duration-200">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Swasthya Sentinel. Built with <Heart className="w-4 h-4 inline text-accent" /> for healthcare.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
