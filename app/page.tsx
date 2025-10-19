import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ImpactVisualization } from "@/components/impact-visualization"
import { Footer } from "@/components/footer"
import { CrisisRecoverySimulation } from "@/components/crisis-recovery-simulation"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-blue-50/30 to-background">
      <Header />
      <HeroSection />
      <CrisisRecoverySimulation />
      <ProblemSection />
      <SolutionSection />
      <CapabilitiesSection />
      <ImpactVisualization />
      <Footer />
    </main>
  )
}
