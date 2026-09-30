import { useLocation } from "react-router-dom";

const diseaseSamples = [
  {
    name: "Early Blight",
    crop: "Tomato",
    symptoms: ["Dark spots on older leaves", "Yellowing around the lesions", "Leaf drop"],
    treatment: "Apply copper-based fungicides and ensure proper crop rotation.",
  },
  {
    name: "Powdery Mildew",
    crop: "Chickpea",
    symptoms: ["White powdery growth on leaves", "Stunted growth", "Leaf curl"],
    treatment: "Use sulfur dust or potassium bicarbonate spray. Improve air circulation.",
  },
  {
    name: "Bacterial Leaf Blight",
    crop: "Paddy",
    symptoms: ["Water-soaked lesions on leaf tips", "Yellowing from tip downwards", "Wilting in severe cases"],
    treatment: "Use certified seeds, proper spacing, and apply streptomycin-based sprays.",
  },
];

export default function PlantDiseaseInfoPage() {
  const location = useLocation();
  const { fileName } = location.state || {};
  const random = diseaseSamples[Math.floor(Math.random() * diseaseSamples.length)];

  return (
    <div className="pt-20 px-6 min-h-screen bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-lime-700 mb-6">🌿 Plant Disease Analysis</h1>

      <div className="bg-stone-100 rounded-xl shadow-md p-6">
        <p className="mb-2 text-sm text-gray-600">Uploaded Image: <strong>{fileName}</strong></p>

        <h2 className="text-xl font-semibold text-soil mb-2">🦠 Detected Disease: {random.name}</h2>
        <p className="text-md mb-1">🌾 Affected Crop: <strong>{random.crop}</strong></p>

        <div className="mt-4">
          <h3 className="font-semibold text-soil">Symptoms:</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {random.symptoms.map((symptom, i) => (
              <li key={i}>{symptom}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-soil">Recommended Treatment:</h3>
          <p className="text-sm text-gray-700 mt-1">{random.treatment}</p>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={() => window.history.back()}
          className="bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded shadow"
        >
          ⬅️ Back to Dashboard
        </button>
      </div>
    </div>
  );
}
