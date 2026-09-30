// src/components/HelplinePage.jsx
export default function HelplinePage() {
  return (
    <div className="pt-24 px-6 pb-12 min-h-screen bg-gradient-to-b from-stone-50 via-white to-lime-50 text-gray-800">
      <h1 className="text-3xl font-bold text-lime-700 mb-6">📞 Government Helplines for Farmers</h1>

      <div className="space-y-6 text-sm md:text-base">
        <div className="bg-green-100 rounded-xl shadow p-6 text-gray-800">
          <h2 className="text-lg font-semibold text-lime-800 mb-2">📍 National Kisan Call Centre (KCC)</h2>
          <p><strong>Toll-Free:</strong> 1800-180-1551 or just dial 1551 (from BSNL landline)</p>
          <p><strong>Timing:</strong> 6 AM – 10 PM, all 7 days</p>
          <p>Languages supported: Most regional languages</p>
        </div>

        <div className="bg-green-100 rounded-xl shadow p-6 text-gray-800">
          <h2 className="text-lg font-semibold text-lime-800 mb-2">🌾 ICAR Farmer’s Helpline</h2>
          <p><strong>Toll-Free:</strong> 1800-180-2311</p>
          <p><strong>Direct Line:</strong> +91-5962-241022</p>
          <p><strong>WhatsApp Support:</strong> +91-9997023062, +91-9456596659</p>
        </div>

        <div className="bg-green-100 rounded-xl shadow p-6 text-gray-800">
          <h2 className="text-lg font-semibold text-lime-800 mb-2">🌿 Tamil Nadu Agriculture Department</h2>
          <p><strong>Office Number:</strong> 044-28583323</p>
          <p><strong>Support:</strong> 044-28524894</p>
        </div>

        <div className="bg-green-100 rounded-xl shadow p-6 text-gray-800">
          <h2 className="text-lg font-semibold text-lime-800 mb-2">🛒 e-NAM (National Agriculture Market)</h2>
          <p><strong>Helpdesk:</strong> 1800-270-0224</p>
          <p>Support for APMC markets and mandi price systems</p>
        </div>

        <div className="text-xs text-gray-500 italic text-center pt-4">
          These helplines are provided by the Government of India and state agricultural departments.
        </div>
      </div>
    </div>
  );
}
