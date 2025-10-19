"use client"

import { useState } from "react"
import { PredictiveForecasting } from "./simulations/predictive-forecasting"
import { ResourceOptimization } from "./simulations/resource-optimization"
import { PatientAdvisory } from "./simulations/patient-advisory"
import { ExplainableAI } from "./simulations/explainable-ai"

export function SimulationsSection() {
  const [activeTab, setActiveTab] = useState(0)

  const simulations = [
    {
      id: "forecasting",
      title: "Predictive Surge Forecasting",
      description: "See how Swasthya Sentinel predicts patient surges 7 days in advance",
      component: PredictiveForecasting,
    },
    {
      id: "optimization",
      title: "Smart Resource Optimization",
      description: "Watch real-time resource allocation across departments",
      component: ResourceOptimization,
    },
    {
      id: "advisory",
      title: "Multilingual Patient Advisory",
      description: "Intelligent patient routing and guidance system",
      component: PatientAdvisory,
    },
    {
      id: "explainable",
      title: "Explainable AI Decisions",
      description: "Understand the reasoning behind every recommendation",
      component: ExplainableAI,
    },
  ]

  const ActiveComponent = simulations[activeTab].component

  return (
    <section
      id="simulations"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-green-50/20 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">See It In Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive simulations showing how Swasthya Sentinel transforms hospital operations
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {simulations.map((sim, index) => (
            <button
              key={sim.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? "bg-primary text-white shadow-lg"
                  : "bg-card border border-border text-foreground hover:border-primary/50"
              }`}
            >
              {sim.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Active Simulation */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">{simulations[activeTab].title}</h3>
            <p className="text-muted-foreground">{simulations[activeTab].description}</p>
          </div>
          <ActiveComponent />
        </div>
      </div>
    </section>
  )
}
