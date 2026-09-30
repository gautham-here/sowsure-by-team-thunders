import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import TaskReminder from "./TaskReminder";
import { useTranslation } from "react-i18next";

import farmer1 from "../assets/farmer1.jpg";
import farmer2 from "../assets/farmer2.jpg";
import farmer3 from "../assets/farmer3.jpg";

const images = [
  { src: farmer1, captionKey: "carousel.caption1" },
  { src: farmer2, captionKey: "carousel.caption2" },
  { src: farmer3, captionKey: "carousel.caption3" },
];

export default function LandingPage({ user }) {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="pt-20 w-full text-gray-800">
      {/* Language Selector */}
      <div className="absolute top-20 right-6 z-50">
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          value={i18n.language}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm shadow"
        >
          <option value="en">English</option>
          <option value="ta">தமிழ்</option>
          <option value="hi">हिन्दी</option>
          <option value="te">తెలుగు</option>
        </select>
      </div>

      {/* Hero Section */}
      <section className="w-full bg-cream py-12 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-leaf drop-shadow-md">🌱 SowSure</h1>
        {user?.username && (
          <p className="mt-2 text-leaf text-sm italic">
            👋 {t("welcomeUser", { name: user.username, location: user.location })}
          </p>
        )}
        <h2 className="text-xl md:text-2xl text-soil mt-4 max-w-3xl mx-auto">
          <Typewriter
            words={[
              t("typewriter.line1"),
              t("typewriter.line2"),
              t("typewriter.line3"),
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <div className="mt-8">
          <button
            onClick={() => navigate("/form")}
            className="bg-sprout text-white px-6 py-3 rounded-full hover:bg-green-800 transition-all"
          >
            🚜 {t("cta.startPlanning")}
          </button>
        </div>
      </section>

      {/* Task Reminders */}
      <div className="bg-white py-6">
        <TaskReminder
          tasks={[
            t("tasks.0"),
            t("tasks.1"),
            t("tasks.2"),
            t("tasks.3"),
            t("tasks.4"),
          ]}
        />
      </div>

      {/* Image Carousel Section */}
      <section className="w-full bg-white py-10 px-6 flex flex-col items-center">
        <div className="relative w-full max-w-4xl" data-aos="fade-up" data-aos-delay="100">
          <img
            src={images[current].src}
            alt={`Slide ${current}`}
            className="rounded-2xl shadow-xl object-cover h-[360px] w-full transition-all duration-500"
          />
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-leaf font-bold px-3 py-2 rounded-full shadow"
          >
            ⬅️
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-leaf font-bold px-3 py-2 rounded-full shadow"
          >
            ➡️
          </button>
          <p className="text-center mt-3 text-gray-700 italic">{t(images[current].captionKey)}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-tan py-12 px-6 text-center">
        <div className="max-w-xl mx-auto bg-accent/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-leaf" data-aos="zoom-in-up" data-aos-delay="200">
          <h2 className="text-2xl font-bold text-leaf mb-2">{t("why.heading")}</h2>
          <ul className="text-soil list-disc list-inside space-y-1 text-sm text-left">
            <li>{t("why.point1")}</li>
            <li>{t("why.point2")}</li>
            <li>{t("why.point3")}</li>
            <li>{t("why.point4")}</li>
          </ul>

          <div className="mt-6 text-center">
            <button
              className="w-full sm:w-auto text-lg px-6 py-3 rounded-full bg-sprout hover:bg-green-800 text-white transition-all duration-300"
              onClick={() => navigate("/form")}
            >
              🚜 {t("cta.startPlanning")}
            </button>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => navigate("/market")}
            className="bg-white text-leaf border border-leaf px-6 py-3 text-lg rounded-full hover:bg-lime-100 transition-all shadow"
          >
            🛒 {t("cta.checkMarket")}
          </button>
        </div>
      </section>

      {/* Bottom Info */}
      <div className="bg-tan py-10 text-soil text-sm text-center px-6" data-aos="fade-up" data-aos-delay="300">
        <p>
          {t("footer.note")} <span className="font-semibold text-leaf">SDG 2, 12 & 13</span>. <br />
          {t("footer.credit")}
        </p>
      </div>

      {/* ChatBot Floating Button */}
      <button
        onClick={() => navigate("/chat")}
        className="fixed bottom-6 right-6 bg-leaf hover:bg-lime-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
        title="Chat with AgriBot"
      >
        💬
      </button>
    </div>
  );
}
