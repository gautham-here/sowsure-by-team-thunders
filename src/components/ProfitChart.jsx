import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ProfitChart({ data }) {
  const chartData = {
    labels: data.map((crop) => crop.name),
    datasets: [
      {
        label: "Profitability (%)",
        data: data.map((crop) => crop.profit),
        backgroundColor: ["#16a34a", "#15803d", "#65a30d"], // Tailwind green shades
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#15803d", // Text color in legend
        },
      },
      tooltip: {
        backgroundColor: "#f1f5f9",
        titleColor: "#4b5563",
        bodyColor: "#4b5563",
        borderColor: "#d1d5db",
        borderWidth: 1,
        cornerRadius: 8,
        padding: 10,
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
    scales: {
      y: {
        ticks: {
          color: "#4b5563",
        },
        grid: {
          color: "#e5e7eb",
        },
      },
      x: {
        ticks: {
          color: "#4b5563",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 mt-10 rounded shadow max-w-3xl mx-auto">
      <h3 className="text-xl font-bold text-center text-green-800 mb-4">
        📊 Profitability Comparison
      </h3>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
