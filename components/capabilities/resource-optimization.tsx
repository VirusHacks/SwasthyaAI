"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Zap } from "lucide-react"

export function ResourceOptimization() {
  const [scenario, setScenario] = useState("current")

  const departmentData = [
    { name: "ICU", current: 85, optimized: 92, capacity: 100, savings: "12% cost" },
    { name: "Emergency", current: 72, optimized: 88, capacity: 100, savings: "8% wait time" },
    { name: "Surgery", current: 65, optimized: 78, capacity: 100, savings: "15% efficiency" },
    { name: "General Ward", current: 78, optimized: 82, capacity: 100, savings: "5% bed turnover" },
    { name: "Pediatrics", current: 55, optimized: 68, capacity: 100, savings: "18% utilization" },
    { name: "Maternity", current: 62, optimized: 75, capacity: 100, savings: "10% staffing" },
  ]

  const staffingData = [
    { role: "Doctors", current: 45, optimized: 48, shift: "+3 during peak" },
    { role: "Nurses", current: 120, optimized: 135, shift: "+15 during peak" },
    { role: "Technicians", current: 30, optimized: 35, shift: "+5 during peak" },
    { role: "Support Staff", current: 60, optimized: 68, shift: "+8 during peak" },
  ]

  const supplyData = [
    { item: "Oxygen Cylinders", current: 45, optimized: 62, unit: "units" },
    { item: "Ventilators", current: 12, optimized: 18, unit: "units" },
    { item: "ICU Beds", current: 28, optimized: 35, unit: "beds" },
    { item: "Medications", current: 78, optimized: 95, unit: "% stock" },
  ]

  return (
    <div className="space-y-8">
      {/* Scenario Selector */}
      <div className="flex gap-3 flex-wrap">
        {[
          { id: "current", label: "Department Utilization" },
          { id: "staffing", label: "Staffing Allocation" },
          { id: "supply", label: "Supply Chain" },
        ].map((opt) => (
          <button
            key={opt.id}
            onClick={() => setScenario(opt.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              scenario === opt.id ? "bg-primary text-white" : "bg-gray-100 text-foreground hover:bg-gray-200"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Department Utilization */}
      {scenario === "current" && (
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-border">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => `${value}%`}
                />
                <Legend />
                <Bar dataKey="current" fill="#ef4444" name="Current Utilization" />
                <Bar dataKey="optimized" fill="#10b981" name="AI-Optimized" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {departmentData.map((dept, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-lg p-4"
              >
                <p className="font-semibold text-foreground mb-2">{dept.name}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-green-600">{dept.optimized}%</span>
                  <span className="text-sm text-muted-foreground">vs {dept.current}%</span>
                </div>
                <p className="text-xs text-green-700 font-medium">{dept.savings}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Staffing Allocation */}
      {scenario === "staffing" && (
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-border">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={staffingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="role" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => `${value} staff`}
                />
                <Legend />
                <Bar dataKey="current" fill="#f59e0b" name="Current Staffing" />
                <Bar dataKey="optimized" fill="#3b82f6" name="AI-Recommended" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {staffingData.map((staff, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-lg p-4"
              >
                <p className="font-semibold text-foreground mb-3">{staff.role}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Current</span>
                    <span className="font-semibold">{staff.current}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Optimized</span>
                    <span className="font-semibold text-blue-600">{staff.optimized}</span>
                  </div>
                  <p className="text-xs text-blue-700 font-medium mt-2">{staff.shift}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Supply Chain */}
      {scenario === "supply" && (
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-border">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={supplyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="item" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => `${value}`}
                />
                <Legend />
                <Bar dataKey="current" fill="#ef4444" name="Current Stock" />
                <Bar dataKey="optimized" fill="#10b981" name="AI-Recommended" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3">
            <Zap className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Smart Inventory Management</p>
              <p className="text-sm text-muted-foreground">
                AI predicts demand patterns and automatically triggers reorders. Reduces stockouts by 87% and excess
                inventory by 34%.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
