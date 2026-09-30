import { useState } from "react";
import PriceLineChart from "./PriceLineChart";

const fruitPrices = [
  {
    name: "Mango",
    price: 60,
    trend: [52, 54, 57, 58, 59, 62, 60],
    change: +1,
    emoji: "🥭",
  },
  {
    name: "Banana",
    price: 40,
    trend: [38, 39, 40, 42, 43, 41, 40],
    change: -1,
    emoji: "🍌",
  },
  {
    name: "Apple",
    price: 100,
    trend: [98, 99, 97, 95, 96, 98, 100],
    change: +2,
    emoji: "🍎",
  },
];

export default function FruitsPricePage() {
  const [showChart, setShowChart] = useState(null); // holds selected fruit for chart

  return (
    <div className="pt-24 px-6 min-h-screen bg-orange-50">
      <h2 className="text-3xl font-bold text-orange-800 mb-6">🍊 Fruit Market Prices</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fruitPrices.map((fruit) => (
          <div
            key={fruit.name}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border border-orange-200"
          >
            <div className="text-4xl">{fruit.emoji}</div>
            <h3 className="text-xl font-semibold text-orange-700 mt-2">{fruit.name}</h3>
            <p className="text-sm text-gray-700">Price: ₹{fruit.price}/kg</p>
            <p className={`text-sm font-medium ${fruit.change >= 0 ? "text-green-600" : "text-red-500"}`}>
              {fruit.change >= 0 ? "↑" : "↓"} {Math.abs(fruit.change)} today
            </p>
            <button
              onClick={() => setShowChart(showChart === fruit.name ? null : fruit.name)}
              className="mt-4 text-sm text-orange-600 underline hover:text-orange-800"
            >
              {showChart === fruit.name ? "Hide Price Trend" : "View Price Chart"}
            </button>

            {/* Inline Chart */}
            {showChart === fruit.name && (
              <div className="mt-4">
                <PriceLineChart
                  data={fruit.trend.map((val, index) => ({
                    day: `Day ${index + 1}`,
                    price: val,
                  }))}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
