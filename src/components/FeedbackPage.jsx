// src/components/FeedbackPage.jsx
import { useState } from "react";

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      alert("✅ Thank you for your feedback!");
      setFeedback("");
    }
  };

  return (
    <div className="pt-24 px-4 pb-12 min-h-screen bg-gradient-to-b from-white via-stone-50 to-lime-100 text-gray-800 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-lime-700 mb-6 text-center">✍️ Share Your Feedback</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg space-y-4"
      >
        <label className="block text-sm text-gray-700">
          What did you think about SowSure?
        </label>
        <textarea
          rows={6}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm resize-none"
          placeholder="Type your thoughts, suggestions, or issues here..."
        />

        <button
          type="submit"
          className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-2 rounded-md text-sm transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
