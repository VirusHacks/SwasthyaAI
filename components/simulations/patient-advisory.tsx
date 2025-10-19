"use client"

import { useState } from "react"
import { MessageCircle, MapPin, Clock, AlertCircle } from "lucide-react"

export function PatientAdvisory() {
  const [selectedLanguage, setSelectedLanguage] = useState("hindi")
  const [selectedPatient, setSelectedPatient] = useState(0)

  const patients = [
    {
      id: 1,
      name: "Rajesh Kumar",
      language: "Hindi",
      symptom: "Chest pain & shortness of breath",
      urgency: "Critical",
      recommendation: "Emergency - Go to nearest hospital immediately",
      nearestHospital: "City Medical Center - 2.3 km away",
      waitTime: "15 mins",
      department: "Emergency & Cardiology",
      advice: "Call 108 ambulance immediately. Do not drive yourself.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      language: "Marathi",
      symptom: "Fever & cough for 3 days",
      urgency: "Moderate",
      recommendation: "Visit clinic within 24 hours",
      nearestHospital: "Wellness Clinic - 1.5 km away",
      waitTime: "45 mins",
      department: "General Medicine",
      advice: "Stay hydrated. Take paracetamol if fever > 101°F. Monitor symptoms.",
    },
    {
      id: 3,
      name: "Amit Patel",
      language: "Gujarati",
      symptom: "Routine checkup",
      urgency: "Low",
      recommendation: "Schedule appointment this week",
      nearestHospital: "Health Plus Center - 3.2 km away",
      waitTime: "2 hours",
      department: "General Checkup",
      advice: "Bring previous medical records. Fasting not required.",
    },
  ]

  const translations = {
    hindi: {
      title: "रोगी सलाह प्रणाली",
      subtitle: "बहुभाषी स्वास्थ्य मार्गदर्शन",
      urgency: "आपातकालीन",
      recommendation: "सिफारिश",
      hospital: "निकटतम अस्पताल",
      waitTime: "प्रतीक्षा समय",
      department: "विभाग",
      advice: "सलाह",
    },
    marathi: {
      title: "रुग्ण सल्ला प्रणाली",
      subtitle: "बहुभाषिक आरोग्य मार्गदर्शन",
      urgency: "आपत्कालीन",
      recommendation: "शिफारस",
      hospital: "जवळचे रुग्णालय",
      waitTime: "प्रतीक्षा वेळ",
      department: "विभाग",
      advice: "सल्ला",
    },
    gujarati: {
      title: "દર્દી સલાહ સિસ્ટમ",
      subtitle: "બહુભાષી આરોગ્ય માર્ગદર્શન",
      urgency: "કટોકટી",
      recommendation: "ભલામણ",
      hospital: "નજીકનું હોસ્પિટલ",
      waitTime: "રાહ જોવાનો સમય",
      department: "વિભાગ",
      advice: "સલાહ",
    },
    english: {
      title: "Patient Advisory System",
      subtitle: "Multilingual Health Guidance",
      urgency: "Urgency",
      recommendation: "Recommendation",
      hospital: "Nearest Hospital",
      waitTime: "Wait Time",
      department: "Department",
      advice: "Advice",
    },
  }

  const currentPatient = patients[selectedPatient]
  const t = translations[selectedLanguage]

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "Critical":
        return "bg-red-50 border-red-200 text-red-700"
      case "Moderate":
        return "bg-orange-50 border-orange-200 text-orange-700"
      default:
        return "bg-green-50 border-green-200 text-green-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* Language Selector */}
      <div className="flex gap-2 flex-wrap">
        {["hindi", "marathi", "gujarati", "english"].map((lang) => (
          <button
            key={lang}
            onClick={() => setSelectedLanguage(lang)}
            className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
              selectedLanguage === lang ? "bg-primary text-white" : "bg-gray-100 text-foreground hover:bg-gray-200"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Patient Selection */}
      <div className="grid md:grid-cols-3 gap-3">
        {patients.map((patient, idx) => (
          <button
            key={patient.id}
            onClick={() => setSelectedPatient(idx)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedPatient === idx ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50"
            }`}
          >
            <p className="font-semibold text-foreground">{patient.name}</p>
            <p className="text-sm text-muted-foreground">{patient.symptom}</p>
            <p className={`text-xs font-semibold mt-2 ${getUrgencyColor(patient.urgency).split(" ")[2]}`}>
              {patient.urgency}
            </p>
          </button>
        ))}
      </div>

      {/* Patient Details */}
      <div className="space-y-4">
        {/* Urgency Badge */}
        <div className={`rounded-lg border p-4 ${getUrgencyColor(currentPatient.urgency)}`}>
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5" />
            <span className="font-semibold">{currentPatient.urgency} Priority</span>
          </div>
          <p className="text-sm">{currentPatient.recommendation}</p>
        </div>

        {/* Hospital & Logistics */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-border rounded-lg p-4 flex gap-3">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground mb-1">Nearest Hospital</p>
              <p className="font-semibold text-foreground">{currentPatient.nearestHospital}</p>
              <p className="text-xs text-muted-foreground mt-1">{currentPatient.department}</p>
            </div>
          </div>
          <div className="bg-white border border-border rounded-lg p-4 flex gap-3">
            <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground mb-1">Expected Wait Time</p>
              <p className="font-semibold text-foreground">{currentPatient.waitTime}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Current queue: {Math.floor(Math.random() * 8) + 3} patients
              </p>
            </div>
          </div>
        </div>

        {/* AI Advice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex gap-3">
            <MessageCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-2">AI Health Advisor</p>
              <p className="text-sm text-muted-foreground">{currentPatient.advice}</p>
            </div>
          </div>
        </div>

        {/* Language Note */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-green-700">✓ Available in {currentPatient.language}</span> - Patient
            receives all guidance in their preferred language with culturally relevant health information.
          </p>
        </div>
      </div>
    </div>
  )
}
