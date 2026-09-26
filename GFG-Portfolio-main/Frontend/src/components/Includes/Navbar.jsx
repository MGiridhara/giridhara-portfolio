import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  Briefcase,
  Send,
  FileText,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(0);

  const navLinks = [
    {
      number: "01",
      name: "Home",
      href: "#home",
      icon: <Home size={16} />,
    },
    {
      number: "02",
      name: "About",
      href: "#skills",
      icon: <User size={16} />,
    },
    {
      number: "03",
      name: "Projects",
      href: "#projects",
      icon: <Code2 size={16} />,
    },
    {
      number: "04",
      name: "Experience",
      href: "#experience",
      icon: <Briefcase size={16} />,
    },
    {
      number: "05",
      name: "Contact",
      href: "#contact",
      icon: <Send size={16} />,
    },
  ];

  // Navbar entrance animation
  useEffect(() => {
    const timers = [];

    navLinks.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleItems(index + 1);
      }, 350 + index * 300);

      timers.push(timer);
    });

    // Resume appears after all navigation items
    const resumeTimer = setTimeout(() => {
      setVisibleItems(navLinks.length + 1);
    }, 350 + navLinks.length * 300);

    timers.push(resumeTimer);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);

    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b1120]/90 backdrop-blur-md border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <button
              onClick={() => handleNavClick("#home")}
              className="group flex items-center gap-3"
            >
              <span className="text-xs text-blue-400 font-mono">
                00.
              </span>

              <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Giridhara M
              </span>
            </button>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center gap-1">

              {navLinks.map((link, index) => {

                const isVisible = visibleItems > index;

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`
                      group
                      flex items-center gap-2
                      px-4 py-3
                      font-mono text-xs
                      transition-all duration-500 ease-out
                      ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4 pointer-events-none"
                      }
                    `}
                  >
                    <span className="text-blue-400/70 group-hover:text-blue-400">
                      {link.number}.
                    </span>

                    <span className="text-gray-400 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                  </button>
                );
              })}

            </div>

            {/* RESUME */}
            <a
              href="/NewResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                hidden md:flex
                items-center gap-2
                border border-blue-500/60
                text-blue-400
                hover:bg-blue-500
                hover:text-white
                px-5 py-2.5
                rounded-md
                text-sm
                font-medium
                transition-all duration-500 ease-out
                ${
                  visibleItems > navLinks.length
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }
              `}
            >
              <FileText size={16} />
              Resume
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                md:hidden
                p-2
                text-gray-300
                hover:text-blue-400
                transition-colors
              "
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={26} />
              ) : (
                <Menu size={26} />
              )}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0b1120] border-t border-white/10">

            <div className="px-5 py-5 space-y-1">

              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="
                    w-full
                    flex items-center gap-3
                    text-left
                    text-gray-300
                    hover:text-blue-400
                    hover:bg-white/5
                    px-4 py-3
                    rounded-md
                    font-mono text-sm
                    transition-all
                  "
                >
                  <span className="text-blue-400">
                    {link.number}.
                  </span>

                  {link.icon}

                  <span>{link.name}</span>
                </button>
              ))}

              <a
                href="/NewResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="
                  mt-4
                  flex items-center justify-center gap-2
                  border border-blue-500/60
                  text-blue-400
                  hover:bg-blue-500
                  hover:text-white
                  px-4 py-3
                  rounded-md
                  text-sm
                  font-medium
                  transition-all
                "
              >
                <FileText size={17} />
                View Resume
              </a>

            </div>
          </div>
        )}

      </nav>
    </>
  );
};

export default Navbar;