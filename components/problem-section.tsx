"use client"

import { useEffect, useState } from "react"

export function ProblemSection() {
  const [admissions, setAdmissions] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAdmissions((prev) => {
        if (prev >= 60) return 0
        return prev + 1
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center">
          When the System Can't See It Coming
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Hospital admissions rise up to <span className="font-semibold text-primary">60% overnight</span> during
          festive and pollution seasons.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Animated stat timeline */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Diwali Season</h3>
                <p className="text-sm text-muted-foreground">Respiratory cases spike 45%</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Pollution Peaks</h3>
                <p className="text-sm text-muted-foreground">Emergency admissions double</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Flu Season</h3>
                <p className="text-sm text-muted-foreground">ICU beds reach capacity</p>
              </div>
            </div>
          </div>

          {/* Animated chart */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="font-semibold text-foreground mb-6">Hospital Bed Occupancy</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Normal Days</span>
                  <span className="font-semibold">40%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Festival Days</span>
                  <span className="font-semibold">{admissions}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full transition-all duration-100"
                    style={{ width: `${admissions}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
