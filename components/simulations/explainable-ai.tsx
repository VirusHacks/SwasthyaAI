"use client"

import { useState } from "react"
import { ChevronDown, CheckCircle, AlertCircle } from "lucide-react"

export function ExplainableAI() {
  const [expandedDecision, setExpandedDecision] = useState(0)

  const decisions = [
    {
      title: "Recommend 25% ICU Staffing Increase",
      confidence: 94,
      reasoning: [
        {
          factor: "Historical Pattern Match",
          weight: 35,
          description: "Similar weather & day-of-week patterns from past 2 years show 68% surge probability",
          icon: "📊",
        },
        {
          factor: "Real-time Admission Trend",
          weight: 28,
          description: "Current admission rate is 12% above baseline for this time period",
          icon: "📈",
        },
        {
          factor: "Regional Health Events",
          weight: 18,
          description: "Flu outbreak reported in nearby districts; expected spillover effect",
          icon: "🏥",
        },
        {
          factor: "Weather Forecast",
          weight: 12,
          description: "Cold front moving in; respiratory cases typically increase by 15-20%",
          icon: "🌡️",
        },
        {
          factor: "Social Media Sentiment",
          weight: 7,
          description: "Increased health-related queries in local communities",
          icon: "💬",
        },
      ],
    },
    {
      title: "Route Patient to General Ward (Not ICU)",
      confidence: 87,
      reasoning: [
        {
          factor: "Symptom Analysis",
          weight: 40,
          description: "Vital signs stable, oxygen saturation 96%, no respiratory distress",
          icon: "🫀",
        },
        {
          factor: "Medical History",
          weight: 25,
          description: "No chronic conditions, previous similar cases recovered in general ward",
          icon: "📋",
        },
        {
          factor: "ICU Availability",
          weight: 20,
          description: "Only 2 ICU beds available; prioritize critical patients",
          icon: "🛏️",
        },
        {
          factor: "Treatment Protocol",
          weight: 15,
          description: "Condition responds well to standard ward-level care",
          icon: "💊",
        },
      ],
    },
    {
      title: "Recommend Oxygen Cylinder Reorder",
      confidence: 91,
      reasoning: [
        {
          factor: "Current Stock Level",
          weight: 30,
          description: "45 cylinders in stock; 7-day forecast predicts 62 needed",
          icon: "🔋",
        },
        {
          factor: "Consumption Rate",
          weight: 28,
          description: "Average daily consumption: 8.2 cylinders; trending up 3% weekly",
          icon: "📉",
        },
        {
          factor: "Supplier Lead Time",
          weight: 25,
          description: "Supplier requires 3-day delivery; reorder now to avoid stockout",
          icon: "🚚",
        },
        {
          factor: "Seasonal Demand",
          weight: 17,
          description: "Winter months show 40% higher respiratory cases",
          icon: "❄️",
        },
      ],
    },
  ]

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground mb-6">
        Every AI recommendation is fully explainable. Click on any decision to see the reasoning behind it.
      </p>

      {decisions.map((decision, idx) => (
        <div key={idx} className="border border-border rounded-lg overflow-hidden">
          {/* Header */}
          <button
            onClick={() => setExpandedDecision(expandedDecision === idx ? -1 : idx)}
            className="w-full p-4 bg-card hover:bg-gray-50 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-3 flex-1 text-left">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">{decision.title}</p>
                <p className="text-sm text-muted-foreground">Confidence: {decision.confidence}%</p>
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform ${
                expandedDecision === idx ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Expanded Content */}
          {expandedDecision === idx && (
            <div className="border-t border-border bg-gray-50 p-4 space-y-4">
              {/* Confidence Bar */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold text-foreground">Decision Confidence</p>
                  <p className="text-sm font-bold text-green-600">{decision.confidence}%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all"
                    style={{ width: `${decision.confidence}%` }}
                  />
                </div>
              </div>

              {/* Reasoning Factors */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">Key Factors Contributing to This Decision:</p>
                {decision.reasoning.map((factor, fidx) => (
                  <div key={fidx} className="bg-white border border-border rounded-lg p-3">
                    <div className="flex items-start gap-3">
                      <span className="text-lg flex-shrink-0">{factor.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-semibold text-foreground text-sm">{factor.factor}</p>
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                            {factor.weight}%
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{factor.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Transparency Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex gap-2">
                <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-700">
                  <span className="font-semibold">Transparent AI:</span> Hospital staff can override any recommendation
                  with documented reasoning. All decisions are logged for audit trails.
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
