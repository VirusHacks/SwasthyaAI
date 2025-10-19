"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, TrendingDown, Zap, Activity } from "lucide-react"

export function CrisisRecoverySimulation() {
  const [isSimulating, setIsSimulating] = useState(false)
  const [simulationPhase, setSimulationPhase] = useState<"idle" | "crisis" | "recovery" | "resolved">("idle")
  const [bedOccupancy, setBedOccupancy] = useState(65)
  const [patientWaitTime, setPatientWaitTime] = useState(45)
  const [staffUtilization, setStaffUtilization] = useState(72)
  const [recoveredPatients, setRecoveredPatients] = useState(0)
  const [potentialLoss, setPotentialLoss] = useState(0)
  const [bedStates, setBedStates] = useState<("empty" | "occupied" | "critical")[]>(
    Array(20)
      .fill("empty")
      .map((_, i) => (i < 13 ? "occupied" : "empty")),
  )

  const startSimulation = async () => {
    setIsSimulating(true)
    setSimulationPhase("crisis")
    setRecoveredPatients(0)
    setPotentialLoss(0)

    // Phase 1: Crisis escalation (2 seconds)
    for (let i = 0; i < 20; i++) {
      await new Promise((resolve) => setTimeout(resolve, 100))
      setBedOccupancy((prev) => Math.min(prev + 2, 98))
      setPatientWaitTime((prev) => Math.min(prev + 8, 240))
      setStaffUtilization((prev) => Math.min(prev + 1.5, 95))
      setPotentialLoss((prev) => prev + 15000)

      setBedStates((prev) => {
        const newStates = [...prev]
        const emptyIndex = newStates.findIndex((state) => state === "empty")
        if (emptyIndex !== -1) {
          newStates[emptyIndex] = Math.random() > 0.3 ? "occupied" : "critical"
        }
        return newStates
      })
    }

    // Phase 2: Swasthya Sentinel activates (1 second pause)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSimulationPhase("recovery")

    // Phase 3: Recovery (3 seconds)
    for (let i = 0; i < 30; i++) {
      await new Promise((resolve) => setTimeout(resolve, 100))
      setBedOccupancy((prev) => Math.max(prev - 1.2, 72))
      setPatientWaitTime((prev) => Math.max(prev - 5, 35))
      setStaffUtilization((prev) => Math.max(prev - 1, 58))
      setRecoveredPatients((prev) => prev + 8)

      setBedStates((prev) => {
        const newStates = [...prev]
        const criticalIndex = newStates.findIndex((state) => state === "critical")
        if (criticalIndex !== -1) {
          newStates[criticalIndex] = "occupied"
        }
        return newStates
      })
    }

    setSimulationPhase("resolved")
    setIsSimulating(false)
  }

  const resetSimulation = () => {
    setSimulationPhase("idle")
    setBedOccupancy(65)
    setPatientWaitTime(45)
    setStaffUtilization(72)
    setRecoveredPatients(0)
    setPotentialLoss(0)
    setBedStates(
      Array(20)
        .fill("empty")
        .map((_, i) => (i < 13 ? "occupied" : "empty")),
    )
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">See Crisis Recovery in Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how Swasthya Sentinel prevents hospital collapse during a surge event
          </p>
        </div>

        {/* Main Simulation Container */}
        <div className="space-y-8">
          {/* Scenario Card */}
          <div className="bg-white rounded-2xl border border-border p-8 shadow-lg">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Scenario Description */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">Festival Season Surge</h3>
                <p className="text-muted-foreground mb-6">
                  A major festival draws 2 million visitors. Emergency departments across 5 hospitals face unprecedented
                  patient influx.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Without Swasthya Sentinel: System collapse</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">With Swasthya Sentinel: Crisis averted</span>
                  </div>
                </div>
                <Button
                  onClick={startSimulation}
                  disabled={isSimulating}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 text-base"
                >
                  <Zap className="w-5 h-5" />
                  {isSimulating ? "Simulating..." : "Start Simulation"}
                </Button>
                {simulationPhase !== "idle" && (
                  <Button onClick={resetSimulation} variant="outline" className="w-full mt-3 h-12 bg-transparent">
                    Reset
                  </Button>
                )}
              </div>

              {/* Hospital Bed Grid Visualization */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    ICU Bed Status (20 Beds)
                  </h4>
                  <div className="grid grid-cols-5 gap-3">
                    {bedStates.map((state, idx) => (
                      <div
                        key={idx}
                        className={`aspect-square rounded-lg border-2 flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                          state === "empty"
                            ? "bg-green-100 border-green-300 text-green-700"
                            : state === "occupied"
                              ? "bg-blue-100 border-blue-400 text-blue-700"
                              : "bg-red-100 border-red-500 text-red-700 animate-pulse"
                        }`}
                      >
                        {idx + 1}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-6 mt-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-green-400 border border-green-600"></div>
                      <span className="text-muted-foreground">Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-blue-400 border border-blue-600"></div>
                      <span className="text-muted-foreground">Occupied</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-red-400 border border-red-600 animate-pulse"></div>
                      <span className="text-muted-foreground">Critical</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Metrics Dashboard */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Bed Occupancy */}
            <div className="bg-white rounded-xl border border-border p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-foreground">ICU Occupancy</span>
                <span
                  className={`text-3xl font-bold transition-colors ${
                    bedOccupancy > 90 ? "text-red-500" : bedOccupancy > 80 ? "text-orange-500" : "text-green-500"
                  }`}
                >
                  {bedOccupancy.toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-3 rounded-full transition-all duration-300 ${
                    bedOccupancy > 90 ? "bg-red-500" : bedOccupancy > 80 ? "bg-orange-500" : "bg-green-500"
                  }`}
                  style={{ width: `${bedOccupancy}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-3 font-medium">
                {simulationPhase === "crisis" && "🚨 CRISIS: Beds filling rapidly"}
                {simulationPhase === "recovery" && "✓ RECOVERY: Swasthya Sentinel optimizing"}
                {simulationPhase === "resolved" && "✓ STABLE: System under control"}
                {simulationPhase === "idle" && "Ready to simulate"}
              </p>
            </div>

            {/* Patient Wait Time */}
            <div className="bg-white rounded-xl border border-border p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-foreground">ER Wait Time</span>
                <span
                  className={`text-3xl font-bold transition-colors ${
                    patientWaitTime > 120 ? "text-red-500" : patientWaitTime > 60 ? "text-orange-500" : "text-green-500"
                  }`}
                >
                  {patientWaitTime.toFixed(0)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">minutes</p>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-3 rounded-full transition-all duration-300 ${
                    patientWaitTime > 120 ? "bg-red-500" : patientWaitTime > 60 ? "bg-orange-500" : "bg-green-500"
                  }`}
                  style={{ width: `${Math.min(patientWaitTime / 2.4, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-3 font-medium">
                {simulationPhase === "crisis" && "⏱️ Patients waiting 4+ hours"}
                {simulationPhase === "recovery" && "✓ Smart routing reducing delays"}
                {simulationPhase === "resolved" && "✓ Wait time normalized"}
                {simulationPhase === "idle" && "Baseline: 45 minutes"}
              </p>
            </div>

            {/* Staff Utilization */}
            <div className="bg-white rounded-xl border border-border p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-foreground">Staff Load</span>
                <span
                  className={`text-3xl font-bold transition-colors ${
                    staffUtilization > 85
                      ? "text-red-500"
                      : staffUtilization > 75
                        ? "text-orange-500"
                        : "text-green-500"
                  }`}
                >
                  {staffUtilization.toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-3 rounded-full transition-all duration-300 ${
                    staffUtilization > 85 ? "bg-red-500" : staffUtilization > 75 ? "bg-orange-500" : "bg-green-500"
                  }`}
                  style={{ width: `${staffUtilization}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-3 font-medium">
                {simulationPhase === "crisis" && "⚠️ Burnout risk: 95%+ load"}
                {simulationPhase === "recovery" && "✓ Workload balanced"}
                {simulationPhase === "resolved" && "✓ Sustainable levels"}
                {simulationPhase === "idle" && "Baseline: 72%"}
              </p>
            </div>
          </div>

          {/* Impact Comparison */}
          {simulationPhase !== "idle" && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Crisis Impact */}
              <div className="bg-gradient-to-br from-red-50 via-red-50/50 to-background rounded-xl border-2 border-red-200 p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Without Swasthya Sentinel</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-lg p-4 border border-red-100">
                    <p className="text-sm font-semibold text-red-700 mb-1">Financial Loss</p>
                    <p className="text-2xl font-bold text-red-600">₹{potentialLoss.toLocaleString()}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>Critical cases delayed or diverted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>Staff burnout and turnover</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>Hospital reputation damage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>Patient mortality risk increases</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Recovery Impact */}
              <div className="bg-gradient-to-br from-green-50 via-green-50/50 to-background rounded-xl border-2 border-green-200 p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">With Swasthya Sentinel</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-lg p-4 border border-green-100">
                    <p className="text-sm font-semibold text-green-700 mb-1">Loss Prevented</p>
                    <p className="text-2xl font-bold text-green-600">₹{potentialLoss.toLocaleString()}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>{recoveredPatients} patients efficiently managed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Staff workload optimized and balanced</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Hospital capacity maximized</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Zero critical cases delayed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Key Insight */}
          {simulationPhase === "resolved" && (
            <div className="bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 rounded-2xl border-2 border-primary/30 p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Crisis Averted: ₹{potentialLoss.toLocaleString()} in losses prevented
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                By predicting the surge 48 hours in advance, Swasthya Sentinel enabled hospitals to redistribute staff,
                arrange additional resources, and maintain service quality without system collapse. This is the power of
                predictive intelligence in healthcare.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
