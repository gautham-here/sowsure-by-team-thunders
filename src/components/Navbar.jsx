import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-green-700/85 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">
      {/* 🌱 Brand Name */}
      <Link to="/" className="flex items-center gap-2">
        <span className="text-2xl font-bold text-white tracking-wide">🌱 SowSure</span>
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6 text-sm text-white">
        <Link to="/about" className="hover:underline hover:text-lime-200 transition">About</Link>
        <Link to="/whatwedo" className="hover:underline hover:text-lime-200 transition">What We Do</Link>
        <Link to="/faq" className="hover:underline hover:text-lime-200 transition">FAQ</Link>
        <Link to="/form" className="hover:underline hover:text-lime-200 transition">Plan</Link>
        <Link to="/myfarm" className="hover:underline hover:text-lime-200 transition">My Farm</Link>
        <Link to="/helpline" className="hover:underline hover:text-yellow-200 transition">📞 Helpline</Link>
      </div>
    </nav>
  );
}
