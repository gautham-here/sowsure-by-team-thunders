import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setUser }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && location) {
      setUser({ username, location });
      navigate("/"); // Redirect to Landing Page
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-green-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-green-700 text-center">🔐 Login to SowSure</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded px-4 py-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full border rounded px-4 py-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded px-4 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="bg-green-700 text-white w-full py-2 rounded hover:bg-green-800 transition-all">
          Login 🚀
        </button>
      </form>
    </div>
  );
}
