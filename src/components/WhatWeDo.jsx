export default function WhatWeDo() {
  return (
    <div className="pt-24 px-6 pb-16 min-h-screen bg-gradient-to-b from-lime-50 via-white to-stone-100 text-gray-800">
      <h1 className="text-4xl font-extrabold text-center text-leaf mb-10" data-aos="fade-up">
        🚜 What We Do at <span className="text-sprout">SowSure</span>
      </h1>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {/* Empowering Farmers */}
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-lime-500" data-aos="fade-up">
          <h2 className="text-xl font-bold text-lime-700 mb-2">🌱 Empowering Farmers</h2>
          <p className="text-sm text-gray-700">
            SowSure delivers personalized crop insights, helping every farmer make better decisions
            using AI, local data, and sustainable practices.
          </p>
        </div>

        {/* Crop Recommendation */}
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-sprout" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xl font-bold text-green-800 mb-2">📊 Smart Crop Planning</h2>
          <p className="text-sm text-gray-700">
            We suggest crops based on soil type, water availability, climate, and crop history,
            supporting intercropping and rotation methods.
          </p>
        </div>

        {/* Disease Detection */}
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-400" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-xl font-bold text-orange-700 mb-2">🧪 Disease Detection</h2>
          <p className="text-sm text-gray-700">
            Upload images of your crops — our AI model detects diseases and recommends organic or low-cost treatments instantly.
          </p>
        </div>

        {/* Market Intelligence */}
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-400" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-xl font-bold text-yellow-700 mb-2">📈 Market Intelligence</h2>
          <p className="text-sm text-gray-700">
            Know today’s rates for vegetables and grains from nearby markets. Plan your selling strategy for better margins.
          </p>
        </div>

        {/* Task & Calendar */}
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-400" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-xl font-bold text-blue-700 mb-2">📅 Task & Calendar</h2>
          <p className="text-sm text-gray-700">
            Use our calendar to set up reminders and manage farm activities like irrigation, composting, and harvests — all in one place.
          </p>
        </div>

        {/* Multilingual Support */}
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-400" data-aos="fade-up" data-aos-delay="500">
          <h2 className="text-xl font-bold text-purple-700 mb-2">🌐 Multilingual Support</h2>
          <p className="text-sm text-gray-700">
            SowSure is available in English, தமிழ், हिंदी, తెలుగు — breaking language barriers so every farmer gets the help they deserve.
          </p>
        </div>
      </div>

      <p className="mt-12 text-center text-sm text-gray-500 italic">
        We believe in building technology that grows <strong>with farmers</strong> , not just for them.
      </p>
    </div>
  );
}
