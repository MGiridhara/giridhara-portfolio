import { useEffect, useState } from "react";

import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
} from "lucide-react";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080d19] text-white"
    >
      {/* =========================
          BACKGROUND
      ========================= */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Blue Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />

        {/* Purple Glow */}
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

      </div>

      {/* =========================
          MAIN CONTAINER
      ========================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10 pt-28 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* =========================
              LEFT SIDE
          ========================= */}
          <div className="lg:col-span-7">

            {/* Section Label */}
            <div
              className={`flex items-center gap-3 mb-7 transition-all duration-700 ease-out ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="font-mono text-sm text-blue-400">
                01.
              </span>

              <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 transition-all duration-800 ease-out ${
                animate
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
                Giridhara M
              </span>
            </h1>

            {/* Role */}
            <h2
              className={`text-2xl sm:text-3xl font-semibold text-gray-200 mb-7 transition-all duration-700 ease-out ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Computer Science &{" "}
              <span className="text-blue-400">
                Cybersecurity Student
              </span>
            </h2>

            {/* Description */}
            <p
              className={`max-w-2xl text-gray-400 text-base sm:text-lg leading-8 mb-9 transition-all duration-700 ease-out ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              Computer Science and Engineering student specializing in Cyber
              Security, passionate about software development, cybersecurity,
              and building secure and impactful software solutions.
            </p>

            {/* Status */}
            <div
              className={`flex items-center gap-3 mb-9 transition-all duration-700 ease-out ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <span className="relative flex h-3 w-3">

                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50" />

                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />

              </span>

              <span className="font-mono text-xs text-gray-400">
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-9">

              {/* View Projects */}
              <a
                href="#projects"
                className={`group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-md font-medium transition-all duration-700 shadow-lg shadow-blue-600/20 ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                View Projects

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              {/* Download OLD Resume */}
              <a
                href="/Resume.pdf"
                download="Giridhara-M-Resume.pdf"
                className={`inline-flex items-center gap-2 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-6 py-3.5 rounded-md font-medium transition-all duration-700 ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                Download CV

                <Download size={18} />
              </a>

            </div>

            {/* Social Links */}
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "950ms" }}
            >

              {/* GitHub */}
              <a
                href="https://github.com/MGiridhara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-md border border-white/10 bg-white/[0.03] text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Github size={19} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/giridhara-77m0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-md border border-white/10 bg-white/[0.03] text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Linkedin size={19} />
              </a>

              {/* Email */}
              <a
                href="mailto:mgiridhara770@gmail.com"
                aria-label="Email"
                className="p-3 rounded-md border border-white/10 bg-white/[0.03] text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Mail size={19} />
              </a>

            </div>

          </div>

          {/* =========================
              RIGHT SIDE - CIRCULAR PHOTO
          ========================= */}
          <div className="lg:col-span-5">

            <div
              className={`relative flex justify-center items-center transition-all duration-1000 ease-out ${
                animate
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-20 scale-90"
              }`}
              style={{ transitionDelay: "400ms" }}
            >

              {/* Large Blue Glow */}
              <div className="absolute w-80 h-80 sm:w-[26rem] sm:h-[26rem] bg-blue-500/10 rounded-full blur-3xl" />

              {/* Purple Glow */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl" />

              {/* =========================
                  CIRCULAR PHOTO
              ========================= */}
              <div className="relative z-10">

                {/* Gradient Circular Frame */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[23rem] lg:h-[23rem] rounded-full p-[4px] bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 shadow-2xl shadow-blue-500/30">

                  {/* Circular Image */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#080d19] bg-[#101827]">

                    <img
                      src="/Images/profile.jpeg"
                      alt="Giridhara M"
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    />

                  </div>

                </div>

                {/* Online Status */}
                <div className="absolute bottom-5 right-5 flex items-center justify-center w-9 h-9 rounded-full bg-[#080d19] border-2 border-[#080d19] shadow-xl">

                  <span className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/60 animate-pulse" />

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            SCROLL INDICATOR
        ========================= */}
        <div
          className={`hidden sm:flex justify-center mt-14 transition-all duration-700 ${
            animate
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <button
            onClick={() => {
              document
                .getElementById("skills")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-400 transition-colors"
          >
            <span className="font-mono text-xs">
              SCROLL TO EXPLORE
            </span>

            <span className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;