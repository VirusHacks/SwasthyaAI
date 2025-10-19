"use client"

import { useState } from "react"
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts"
import { AlertCircle } from "lucide-react"

export function PredictiveForecasting() {
  const [days, setDays] = useState(7)
  const [isAnimating, setIsAnimating] = useState(true)

  // Realistic hospital data with surge prediction
  const generateForecastData = () => {
    const data = []
    const today = new Date()
    const baselinePatients = 450
    const surgeFactor = 1.6

    for (let i = 0; i <= days; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() + i)
      const dayName = date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })

      // Realistic pattern: weekend surge
      const isWeekend = date.getDay() === 0 || date.getDay() === 6
      const baselineVariation = Math.sin(i * 0.5) * 50
      const actual = i < 3 ? baselinePatients + baselineVariation : null
      const predicted =
        baselinePatients + baselineVariation + (isWeekend && i >= 3 ? baselinePatients * (surgeFactor - 1) : 0)

      data.push({
        date: dayName,
        actual: actual,
        predicted: Math.round(predicted),
        capacity: 800,
        confidence: 95 - i * 2,
      })
    }
    return data
  }

  const data = generateForecastData()
  const maxPatients = Math.max(...data.map((d) => d.predicted))
  const surgePredicted = data.slice(3).some((d) => d.predicted > 650)

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Current Census</p>
          <p className="text-3xl font-bold text-foreground">487</p>
          <p className="text-xs text-muted-foreground mt-2">↑ 8% from yesterday</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">7-Day Forecast Peak</p>
          <p className="text-3xl font-bold text-foreground">{maxPatients}</p>
          <p className="text-xs text-muted-foreground mt-2">Expected on Day 5</p>
        </div>
        <div
          className={`bg-gradient-to-br ${surgePredicted ? "from-orange-50 to-orange-100/50 border-orange-200" : "from-green-50 to-green-100/50 border-green-200"} border rounded-lg p-4`}
        >
          <p className="text-sm text-muted-foreground mb-1">Surge Alert</p>
          <p className="text-3xl font-bold text-foreground">{surgePredicted ? "⚠️ Yes" : "✓ No"}</p>
          <p className="text-xs text-muted-foreground mt-2">
            {surgePredicted ? "Prepare resources" : "Normal operations"}
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg p-4 border border-border">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
              formatter={(value) => (value ? `${value} patients` : "—")}
            />
            <Legend />
            <Area type="monotone" dataKey="actual" stroke="#10b981" fill="url(#colorActual)" name="Actual (Past)" />
            <Area
              type="monotone"
              dataKey="predicted"
              stroke="#3b82f6"
              fill="url(#colorPredicted)"
              name="Predicted (Future)"
            />
            <Line type="monotone" dataKey="capacity" stroke="#ef4444" strokeDasharray="5 5" name="Hospital Capacity" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Insights */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-foreground mb-1">AI Insight</p>
          <p className="text-sm text-muted-foreground">
            Based on historical patterns and current trends, we predict a {surgePredicted ? "significant" : "normal"}{" "}
            patient surge by Day 5.
            {surgePredicted && " Recommend increasing ICU staffing by 25% and pre-positioning emergency supplies."}
          </p>
        </div>
      </div>
    </div>
  )
}
