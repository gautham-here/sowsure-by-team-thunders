import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function InputForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    soilType: "",
    landSize: "",
    waterAvailability: "",
    previousCrop: "",
    duration: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just log it and navigate
    console.log("Form submitted:", formData);
    navigate("/results", { state: formData });
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-green-700">🌾 Enter Your Farm Details</h2>

      <form className="space-y-4 max-w-xl" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Soil Type</label>
          <select name="soilType" onChange={handleChange} className="w-full border p-2 rounded">
            <option value="">-- Select Soil Type --</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Alluvial">Alluvial</option>
            <option value="Laterite">Laterite</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700">Land Size (in acres)</label>
          <input type="number" name="landSize" onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-gray-700">Water Availability</label>
          <select name="waterAvailability" onChange={handleChange} className="w-full border p-2 rounded">
            <option value="">-- Select --</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700">Previous Crop</label>
          <input type="text" name="previousCrop" onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-gray-700">Duration (in months)</label>
          <input type="number" name="duration" onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Get Crop Suggestions
        </button>
      </form>
    </div>
  );
}
