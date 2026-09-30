import { useLocation } from "react-router-dom";
import { useState } from "react";
import ProfitChart from "./ProfitChart"; // existing chart

export default function ResultsPage() {
  const location = useLocation();
  const data = location.state;

  const [selectedOption, setSelectedOption] = useState("calendar");

  if (!data) {
    return <div className="p-8 text-red-600">No data received from form. Please go back and fill it.</div>;
  }

  const recommendations = [
    {
      name: "Tomato",
      manure: "Compost + Neem Cake",
      intercropping: "Coriander",
      profit: 65,
    },
    {
      name: "Paddy",
      manure: "Vermicompost",
      intercropping: "Green Gram",
      profit: 78,
    },
    {
      name: "Chickpea",
      manure: "Farmyard manure",
      intercropping: "Mustard",
      profit: 70,
    },
  ];

  return (
    <div className="pt-24 px-8 bg-green-50 min-h-screen">
      <h2 className="text-3xl font-bold text-green-800 mb-6">🌿 Your Smart Farming Plan</h2>

      {/* Option Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setSelectedOption("calendar")}
          className={`px-4 py-2 rounded-full border ${
            selectedOption === "calendar"
              ? "bg-green-700 text-white"
              : "bg-white text-green-800"
          } shadow hover:bg-green-100 transition`}
        >
          📅 Show Yearly Calendar
        </button>

        <button
          onClick={() => setSelectedOption("chart")}
          className={`px-4 py-2 rounded-full border ${
            selectedOption === "chart"
              ? "bg-green-700 text-white"
              : "bg-white text-green-800"
          } shadow hover:bg-green-100 transition`}
        >
          📊 Profitability Forecast
        </button>

        <button
          onClick={() => setSelectedOption("manure")}
          className={`px-4 py-2 rounded-full border ${
            selectedOption === "manure"
              ? "bg-green-700 text-white"
              : "bg-white text-green-800"
          } shadow hover:bg-green-100 transition`}
        >
          🌿 Organic Manure Guidance
        </button>
      </div>

      {/* CALENDAR View */}
      {selectedOption === "calendar" && (
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h3 className="text-xl font-semibold text-green-700">🗓️ Year-Long Plan</h3>
          <ul className="text-sm text-gray-700 list-disc list-inside">
            <li><strong>Jan - Mar:</strong> Tomato + Coriander (Intercropping)</li>
            <li><strong>Apr - Jun:</strong> Chickpea + Mustard</li>
            <li><strong>Jul - Sep:</strong> Fallow or Green Manure</li>
            <li><strong>Oct - Dec:</strong> Paddy + Green Gram</li>
          </ul>
        </div>
      )}

      {/* CHART View */}
      {selectedOption === "chart" && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-4">📈 Profitability Forecast</h3>
          <ProfitChart data={recommendations} />
        </div>
      )}

      {/* MANURE View */}
      {selectedOption === "manure" && (
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h3 className="text-xl font-semibold text-green-700">🌱 Organic Manure & Fertilizer Guidance</h3>
          <p className="text-gray-700 text-sm">Your soil health and productivity can be improved with the following manure:</p>
          <ul className="list-disc list-inside text-sm text-gray-800">
            {recommendations.map((rec, index) => (
              <li key={index}>
                <strong>{rec.name}:</strong> {rec.manure}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
