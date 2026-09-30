import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, MapPin } from "lucide-react";

export default function FarmDashboard({ user }) {
  const [weather, setWeather] = useState({ temp: 68, status: "Partly Cloudy" });
  const [alerts] = useState(2);
  const [locationOption, setLocationOption] = useState("current");
  const [customLocation, setCustomLocation] = useState("");

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      navigate("/disease-info", { state: { fileName: file.name } });
    }
  };

  return (
    <div className="pt-20 px-4 sm:px-10 bg-gradient-to-b from-stone-100 via-stone-50 to-lime-100 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-lime-700 flex items-center justify-between">
        🌾 My Farm Dashboard
        <div className="flex gap-2">
          <button
            onClick={() => navigate("/calendar")}
            className="bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-full flex items-center gap-2"
          >
            <CalendarDays size={18} /> Calendar
          </button>
          <button
            onClick={() => navigate("/market-map")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2"
          >
            <MapPin size={18} /> Market Map
          </button>
        </div>
      </h1>

      {/* 📍 Location Selector */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold text-lime-700 mb-2">📍 Farm Location</h2>
        <p className="text-sm text-gray-600 mb-3">Where is your farmland located?</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="location"
              value="current"
              checked={locationOption === "current"}
              onChange={() => setLocationOption("current")}
            />
            Use current location
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="location"
              value="custom"
              checked={locationOption === "custom"}
              onChange={() => setLocationOption("custom")}
            />
            Enter manually
          </label>
        </div>
        {locationOption === "custom" && (
          <input
            type="text"
            placeholder="Enter your village, town, or district"
            value={customLocation}
            onChange={(e) => setCustomLocation(e.target.value)}
            className="mt-3 w-full border border-lime-400 px-4 py-2 rounded-lg text-sm"
          />
        )}
      </div>

      {/* 📷 Plant Disease Detector */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="text-lg font-semibold text-lime-700 mb-2">📷 Upload Plant Image for Disease Detection</h2>
        <p className="text-sm text-gray-600 mb-4">
          Upload a photo showing signs of plant stress or disease. We’ll analyze it and show possible issues.
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block mx-auto border border-lime-500 rounded-full px-4 py-2 text-sm text-gray-700 cursor-pointer file:bg-lime-50 file:text-lime-800 file:font-semibold file:rounded-full file:border-none hover:file:bg-lime-100"
        />
      </div>

      {/* 🧑‍🌾 Labour Availability */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold text-lime-700 mb-2">🧑‍🌾 Labour Availability</h2>
        <p className="text-sm text-gray-600 italic">
          We're working on connecting you with local agricultural laborers. <strong>Coming soon...</strong>
        </p>
      </div>

      {/* (unchanged content below) */}
      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card title="Crop Health" value="92%" icon="🌿" subtitle="+2.5% from last week" accent="text-green-600" />
        <Card title="Soil Moisture" value="64%" icon="💧" subtitle="Optimal level" accent="text-blue-500" />
        <Card title="Temperature" value="76°F" icon="🌡" subtitle="+5°F from yesterday" accent="text-yellow-600" />
        <Card title="Alerts" value={alerts} icon="⚠️" subtitle="Requires attention" accent="text-orange-600" />
      </div>

      {/* Grid for Planning, Market, Weather */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl shadow col-span-1 md:col-span-1">
          <h2 className="text-lg font-semibold text-lime-700 mb-2">📋 Crop Planning</h2>
          <div className="text-sm text-gray-700">
            <p><strong>Current Season:</strong> Kharif 2025</p>
            <div className="mt-4">
              <p><strong>Tomato</strong> – Sowing (Apr 15)</p>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-400 h-full w-1/4"></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">25% complete</p>

              <p className="mt-4"><strong>Chickpea</strong> – Preparation (May 5)</p>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-1/6"></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">16% complete</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow col-span-1">
          <h2 className="text-lg font-semibold text-lime-700 mb-2">📈 Market Prices</h2>
          <p className="text-sm text-gray-500 mb-2">Updated: Today, 10:45 AM</p>
          <div className="text-sm text-gray-800 space-y-2">
            <div className="flex justify-between">
              <span>Tomato</span>
              <span>₹14.50 <span className="text-green-600 text-xs">▲ 0.75</span></span>
            </div>
            <div className="flex justify-between">
              <span>Chickpea</span>
              <span>₹58.20 <span className="text-green-600 text-xs">▲ 1.10</span></span>
            </div>
            <div className="flex justify-between">
              <span>Paddy</span>
              <span>₹21.00 <span className="text-red-600 text-xs">▼ 0.40</span></span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow col-span-1">
          <h2 className="text-lg font-semibold text-lime-700 mb-2">☄ Weather & Tips</h2>
          <div className="text-sm text-gray-800">
            <div className="flex justify-between mb-2">
              <span className="text-2xl">☁️</span>
              <div>
                <p className="text-xl">{weather.temp}°F</p>
                <p className="text-xs text-gray-600">{weather.status}</p>
              </div>
            </div>
            <div className="grid grid-cols-4 text-center text-xs text-gray-600 mt-4">
              <div>
                ☀️<br />72°F<br /><span>Tue</span>
              </div>
              <div>
                🌧<br />65°F<br /><span>Wed</span>
              </div>
              <div>
                ☁️<br />70°F<br /><span>Thu</span>
              </div>
              <div>
                🌬<br />69°F<br /><span>Fri</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crop Rotation Plan Section */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-bold text-lime-700 mb-4">🌾 Crop Rotation Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 bg-stone-100 rounded-xl">
            <p className="text-sm text-gray-500">Current Active Plan</p>
            <p className="text-xl font-semibold">Standard 4-Season Rotation</p>
            <p className="text-green-600 text-sm">↑ +12% yield improvement</p>
          </div>
          <div className="p-4 bg-stone-100 rounded-xl">
            <p className="text-sm text-gray-500">Soil Health Index</p>
            <p className="text-xl font-semibold">87/100</p>
            <p className="text-green-600 text-sm">↑ +5 points from last season</p>
          </div>
        </div>

        <table className="w-full text-sm text-left">
          <thead className="text-gray-600 border-b">
            <tr>
              <th className="py-2">Season</th>
              <th>Months</th>
              <th>Recommended Crop</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Spring</td>
              <td>Mar-May</td>
              <td>Wheat</td>
              <td><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Completed</span></td>
              <td>Nitrogen-fixing, soil preparation</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Summer</td>
              <td>Jun-Aug</td>
              <td>Corn</td>
              <td><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">In Progress</span></td>
              <td>High yield, market demand</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Fall</td>
              <td>Sep-Nov</td>
              <td>Soybeans</td>
              <td><span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Scheduled</span></td>
              <td>Soil restoration, export potential</td>
            </tr>
            <tr>
              <td className="py-2">Winter</td>
              <td>Dec-Feb</td>
              <td>Cover Crop</td>
              <td><span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Scheduled</span></td>
              <td>Soil protection, erosion control</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6">
          <h3 className="text-md font-semibold mb-2">🔎 Recommendations</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li><strong>Adjust planting schedule:</strong> Consider earlier wheat planting due to climate forecasts</li>
            <li><strong>Soil testing:</strong> Schedule mid-season soil testing to optimize fertilizer application</li>
            <li><strong>Consider alternative winter crop:</strong> Winter wheat may be viable based on your soil conditions</li>
          </ul>
        </div>
      </div>
 
      
    </div>
  );
}

function Card({ title, value, subtitle, icon, accent }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
      <div className="text-sm text-gray-500 flex justify-between">
        <span>{title}</span>
        <span className="text-lg">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-lime-700">{value}</div>
      <div className={`text-xs ${accent}`}>{subtitle}</div>
    </div>
  );
}
