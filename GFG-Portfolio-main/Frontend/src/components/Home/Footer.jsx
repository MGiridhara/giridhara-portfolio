import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const [animate, setAnimate] = useState(false);

  const scrollToTop = () => {
    const home = document.getElementById("home");

    if (home) {
      home.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const footer = document.getElementById("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="footer"
      className="relative bg-[#050914] text-gray-300 border-t border-white/10 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">

          {/* BRAND */}
          <div
            className={`
              transition-all duration-700 ease-out
              ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
          >

            <div className="flex items-center gap-3 mb-5">

              <span className="font-mono text-xs text-blue-400">
                00.
              </span>

              <h2 className="text-2xl font-bold text-white">
                Giridhara M
              </h2>

            </div>

            <p className="text-gray-500 leading-7 max-w-md">
              Computer Science and Engineering student specializing in
              Cyber Security, passionate about software development,
              backend technologies, and cybersecurity.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div
            className={`
              transition-all duration-700 ease-out
              ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
            style={{ transitionDelay: "150ms" }}
          >

            <div className="flex items-center gap-3 mb-5">

              <span className="font-mono text-xs text-blue-400">
                01.
              </span>

              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Quick Links
              </h3>

            </div>

            <div className="grid grid-cols-2 gap-y-3">

              <a
                href="#home"
                className="font-mono text-xs text-gray-500 hover:text-blue-400 hover:translate-x-1 transition-all duration-300"
              >
                01. Home
              </a>

              <a
                href="#skills"
                className="font-mono text-xs text-gray-500 hover:text-blue-400 hover:translate-x-1 transition-all duration-300"
              >
                02. Skills
              </a>

              <a
                href="#projects"
                className="font-mono text-xs text-gray-500 hover:text-blue-400 hover:translate-x-1 transition-all duration-300"
              >
                03. Projects
              </a>

              <a
                href="#experience"
                className="font-mono text-xs text-gray-500 hover:text-blue-400 hover:translate-x-1 transition-all duration-300"
              >
                04. Experience
              </a>

              <a
                href="#services"
                className="font-mono text-xs text-gray-500 hover:text-blue-400 hover:translate-x-1 transition-all duration-300"
              >
                05. Expertise
              </a>

              <a
                href="#contact"
                className="font-mono text-xs text-gray-500 hover:text-blue-400 hover:translate-x-1 transition-all duration-300"
              >
                06. Contact
              </a>

            </div>

          </div>

          {/* CONNECT */}
          <div
            className={`
              transition-all duration-700 ease-out
              ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
            style={{ transitionDelay: "300ms" }}
          >

            <div className="flex items-center gap-3 mb-5">

              <span className="font-mono text-xs text-blue-400">
                02.
              </span>

              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Connect With Me
              </h3>

            </div>

            <div className="flex gap-3">

              {/* GITHUB */}
              <a
                href="https://github.com/MGiridhara"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  w-11 h-11
                  flex items-center justify-center
                  border border-white/10
                  rounded-lg
                  text-gray-500
                  hover:text-white
                  hover:border-blue-500/50
                  hover:bg-blue-500/10
                  hover:-translate-y-1
                  transition-all duration-300
                "
                aria-label="GitHub"
              >
                <Github
                  size={19}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/giridhara-77m0"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  w-11 h-11
                  flex items-center justify-center
                  border border-white/10
                  rounded-lg
                  text-gray-500
                  hover:text-blue-400
                  hover:border-blue-500/50
                  hover:bg-blue-500/10
                  hover:-translate-y-1
                  transition-all duration-300
                "
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={19}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:mgiridhara770@gmail.com"
                className="
                  group
                  w-11 h-11
                  flex items-center justify-center
                  border border-white/10
                  rounded-lg
                  text-gray-500
                  hover:text-blue-400
                  hover:border-blue-500/50
                  hover:bg-blue-500/10
                  hover:-translate-y-1
                  transition-all duration-300
                "
                aria-label="Email"
              >
                <Mail
                  size={19}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div
          className={`
            border-t border-white/10
            pt-7
            transition-all duration-700
            ${
              animate
                ? "opacity-100"
                : "opacity-0"
            }
          `}
          style={{ transitionDelay: "500ms" }}
        >

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="font-mono text-xs text-gray-600 text-center md:text-left">
              © {new Date().getFullYear()} Giridhara M. All rights reserved.
            </p>

            <p className="text-xs text-gray-600 flex items-center gap-2">
              Built with
              <Heart
                size={13}
                className="text-blue-400 animate-pulse"
              />
              React & Tailwind CSS
            </p>

            {/* BACK TO TOP */}
            <button
              onClick={scrollToTop}
              className="
                group
                flex items-center gap-2
                font-mono text-xs text-gray-500
                hover:text-blue-400
                transition-colors
              "
            >
              Back to top

              <span className="
                w-8 h-8
                flex items-center justify-center
                border border-white/10
                rounded-md
                group-hover:border-blue-500/40
                group-hover:bg-blue-500/10
                group-hover:-translate-y-1
                transition-all duration-300
              ">
                <ArrowUp
                  size={15}
                  className="group-hover:-translate-y-0.5 transition-transform"
                />
              </span>
            </button>

          </div>

        </div>

      </div>

      {/* Bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

    </footer>
  );
};

export default Footer;