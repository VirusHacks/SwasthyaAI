"use client"

import { PredictiveForecasting } from "./capabilities/predictive-forecasting"
import { ResourceOptimization } from "./capabilities/resource-optimization"
import { PatientAdvisory } from "./capabilities/patient-advisory"
import { ExplainableAI } from "./capabilities/explainable-ai"

export function CapabilitiesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-green-50/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">How Swasthya Sentinel Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world examples showing how our AI transforms hospital operations, improves patient outcomes, and
            optimizes resources.
          </p>
        </div>

        {/* Capability 1: Predictive Forecasting */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Predict Patient Surges 7 Days in Advance</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our AI analyzes historical patterns, weather data, regional health events, and real-time admission
                trends to forecast patient volumes with 94% accuracy. Hospital administrators get actionable insights to
                prepare staffing, resources, and bed capacity before surges occur.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-muted-foreground">Predict surges 7 days in advance with 94% accuracy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-muted-foreground">
                    Identify surge triggers: weather, events, regional outbreaks
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-muted-foreground">
                    Get specific recommendations for staffing and resource prep
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <PredictiveForecasting />
            </div>
          </div>
        </div>

        {/* Capability 2: Resource Optimization */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg order-2 lg:order-1">
              <ResourceOptimization />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-foreground mb-4">Optimize Resources in Real-Time</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Swasthya Sentinel continuously monitors department utilization, staffing levels, and supply chains. It
                recommends optimal allocation strategies that reduce costs, minimize wait times, and prevent
                stockouts—all while maintaining quality care.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-muted-foreground">Increase department utilization by 15-20%</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-muted-foreground">Optimize staffing allocation across departments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-muted-foreground">Reduce supply chain stockouts by 87%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Capability 3: Patient Advisory */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Guide Patients Intelligently</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Patients receive personalized guidance in their preferred language. Our system assesses urgency,
                recommends the right facility, shows wait times, and provides health advice—reducing unnecessary ER
                visits and improving patient satisfaction.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-muted-foreground">Multilingual support for diverse patient populations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-muted-foreground">Urgency-based routing to appropriate facilities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-muted-foreground">Real-time wait times and health recommendations</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <PatientAdvisory />
            </div>
          </div>
        </div>

        {/* Capability 4: Explainable AI */}
        <div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg order-2 lg:order-1">
              <ExplainableAI />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-foreground mb-4">Transparent AI You Can Trust</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Every recommendation is fully explainable. Hospital staff see the exact factors, data sources, and
                confidence levels behind each decision. This transparency builds trust and allows clinicians to make
                informed overrides when needed.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-muted-foreground">See all factors contributing to each recommendation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-muted-foreground">Confidence scores for every decision</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-muted-foreground">Full audit trails for compliance and accountability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
