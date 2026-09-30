import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import InputForm from "./components/InputForm";
import ResultsPage from "./components/ResultsPage";
import About from "./components/About";
import FAQ from "./components/FAQ";
import WhatWeDo from "./components/WhatWeDo";
import ChatBotPage from "./components/ChatBotPage";
import MarketCategoryPage from "./components/MarketCategoryPage";
import FruitsPricePage from "./components/FruitsPricePage";
import VegetablesPricePage from "./components/VegetablesPricePage";
import FarmDashboard from "./components/FarmDashboard";
import PlantDiseaseInfoPage from "./components/PlantDiseaseInfoPage";
import FarmCalendarPage from "./components/FarmCalendarPage";
import MarketMapPage from "./components/MarketMapPage";
import HelplinePage from "./components/HelplinePage";
import FeedbackPage from "./components/FeedbackPage";
import "./i18n";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="bg-base min-h-screen text-gray-800">
        <Navbar />

        <Routes>
          {/* 🟢 If user not logged in, only allow /login and redirect others */}
          {!user && (
            <>
              <Route path="/login" element={<LoginPage setUser={setUser} />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}

          {/* ✅ Authenticated user routes */}
          {user && (
            <>
              <Route path="/" element={<LandingPage user={user} />} />
              <Route path="/form" element={<InputForm />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/whatwedo" element={<WhatWeDo />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/chat" element={<ChatBotPage />} />
              <Route path="/market" element={<MarketCategoryPage />} />
              <Route path="/market/fruits" element={<FruitsPricePage />} />
              <Route path="/market/vegetables" element={<VegetablesPricePage />} />
              <Route path="/disease-info" element={<PlantDiseaseInfoPage />} />
              <Route path="/myfarm" element={<FarmDashboard user={user} />} />
              <Route path="/calendar" element={<FarmCalendarPage />} />
              <Route path="/market-map" element={<MarketMapPage />} />
              <Route path="/helpline" element={<HelplinePage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              {/* 🔒 Optional fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
