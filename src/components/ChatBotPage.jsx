import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ChatBotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Show bot's welcome message once when component mounts
    setMessages([
      {
        from: "bot",
        text: "👋 Hello! I'm AgriBot, your virtual assistant for regenerative farming and localised agro-advisories. Ask me anything about SowSure!",
      },
    ]);
  }, []);

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { from: "user", text: input }];
    newMessages.push({
      from: "bot",
      text: "🤖 This feature is under construction. We'll update it soon 😊",
    });

    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="pt-24 min-h-screen bg-green-50 px-4 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-bold text-green-700 text-center">💬 SowSure ChatBot</h2>

        <div className="h-64 overflow-y-auto bg-gray-100 p-4 rounded text-sm space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg max-w-xs ${
                msg.from === "bot"
                  ? "bg-green-100 text-left text-green-800"
                  : "bg-green-600 text-white ml-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded px-4 py-2"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-green-700 text-white px-4 rounded hover:bg-green-800"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-green-600 underline text-sm mt-4 hover:text-green-800"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
