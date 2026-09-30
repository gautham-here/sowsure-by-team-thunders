import { useState } from "react";
import ProfitChart from "./ProfitChart"; // Assuming you're using the same chart component

const vegetablePrices = [
  {
    name: "Tomato",
    price: 28,
    trend: [25, 27, 26, 28, 29, 28, 28],
    change: -1,
    emoji: "🍅",
  },
  {
    name: "Onion",
    price: 34,
    trend: [32, 33, 33, 35, 34, 34, 34],
    change: +1,
    emoji: "🧅",
  },
  {
    name: "Carrot",
    price: 52,
    trend: [50, 51, 52, 53, 52, 51, 52],
    change: 0,
    emoji: "🥕",
  },
];


export default function VegetablesPricePage() {
  const [selected, setSelected] = useState(vegetablePrices[0]);

  return (
    <div className="pt-24 px-6 min-h-screen bg-green-50">
      <h2 className="text-2xl font-bold text-green-800 mb-4">🥦 Vegetable Market Prices</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vegetablePrices.map((veg) => (
          <div
            key={veg.name}
            onClick={() => setSelected(veg)}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg border border-green-200 transition-all cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-green-700">{veg.name}</h3>
            <p className="text-sm text-gray-700">Current Price: ₹{veg.price}/kg</p>
            <p
              className={`text-sm font-medium ${
                veg.change >= 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {veg.change >= 0 ? "↑" : "↓"} {Math.abs(veg.change)} today
            </p>
          </div>
        ))}
      </div>

      {/* Graph Section */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-green-700 mb-2">
          📈 Price Trend: {selected.name}
        </h3>
        <ProfitChart
          data={[
            { name: selected.name, profit: selected.trend[0] },
            { name: "", profit: selected.trend[1] },
            { name: "", profit: selected.trend[2] },
            { name: "", profit: selected.trend[3] },
            { name: "Now", profit: selected.trend[4] },
          ]}
        />
      </div>
    </div>
  );
}
