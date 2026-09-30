import { useNavigate } from "react-router-dom";

export default function MarketCategoryPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen bg-green-50 flex flex-col items-center px-6">
      <h2 className="text-3xl font-bold text-green-800 mb-6">🛒 Choose Category</h2>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
  <button
    onClick={() => navigate("/market/fruits")}
    className="bg-orange-200 text-orange-900 px-8 py-6 text-xl rounded-2xl shadow hover:bg-orange-300 transition-all w-60"
  >
    🍊 Fruits
  </button>
  <button
    onClick={() => navigate("/market/vegetables")}
    className="bg-green-200 text-green-900 px-8 py-6 text-xl rounded-2xl shadow hover:bg-green-300 transition-all w-60"
  >
    🥦 Vegetables
  </button>
</div>

    </div>
  );
}
