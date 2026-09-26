import { useEffect, useState } from "react";

import Navbar from "./components/Includes/Navbar";
import Hero from "./components/Home/Hero";
import SkillsAndServices from "./components/Home/Skills";
import FeaturedProjects from "./components/Home/Projects";
import Experience from "./components/Home/Experience";
import FreelancingServices from "./components/Home/Freelancing";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";
import AIChat from "./components/AIChat/AIChat";

function App() {
  const [countdown, setCountdown] = useState(3);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((current) => {
        if (current === 0) {
          clearInterval(timer);

          setShowWelcome(true);

          setTimeout(() => {
            setShowPortfolio(true);
          }, 1800);

          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* ================================
     PORTFOLIO INTRO SCREEN
  ================================= */

  if (!showPortfolio) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#050914] text-white flex items-center justify-center overflow-hidden">

        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Glow */}
        <div className="absolute w-96 h-96 bg-blue-600/10 blur-3xl rounded-full" />

        {/* Intro Content */}
        <div className="relative z-10 text-center px-6">

          {!showWelcome ? (
            <>
              <p className="font-mono text-xs text-blue-400 tracking-[0.35em] uppercase mb-8">
                Initializing Portfolio
              </p>

              <div
                key={countdown}
                className="text-8xl md:text-9xl font-bold text-white animate-pulse"
              >
                {countdown}
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                <span className="font-mono text-xs text-gray-500">
                  SYSTEM INITIALIZING
                </span>
              </div>
            </>
          ) : (
            <div className="animate-pulse">

              <p className="font-mono text-xs text-blue-400 tracking-[0.35em] uppercase mb-6">
                00. SYSTEM READY
              </p>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Welcome to{" "}
                <span className="text-blue-400">
                  Giridhara
                </span>
              </h1>

              <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mt-3">
                Portfolio
              </h2>

              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                <span className="font-mono text-xs text-gray-500">
                  LOADING PORTFOLIO...
                </span>
              </div>

            </div>
          )}

        </div>
      </div>
    );
  }

  /* ================================
     MAIN PORTFOLIO
  ================================= */

  return (
    <div className="min-h-screen bg-[#080d19] text-white">

      {/* Navigation */}
      <Navbar />

      {/* Portfolio Sections */}
      <main>

        {/* Hero */}
        <Hero />

        {/* Skills & Services */}
        <SkillsAndServices />

        {/* Projects */}
        <FeaturedProjects />

        {/* Education / Experience */}
        <Experience />

        {/* Expertise / Services */}
        <FreelancingServices />

        {/* Contact */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer />

      {/* AI Portfolio Assistant */}
      <AIChat />

    </div>
  );
}

export default App;