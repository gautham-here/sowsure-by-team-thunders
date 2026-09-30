import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PriceLineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "#f1f5f9", // Tailwind stone-100
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
          }}
          labelStyle={{ color: "#4b5563" }} // Tailwind gray-700
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#22c55e" // Tailwind lime-500
          strokeWidth={3}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
