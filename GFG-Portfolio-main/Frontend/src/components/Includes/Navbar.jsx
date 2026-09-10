// Navbar.jsx
import { useState } from 'react';
import {
  Menu,
  X,
  Code,
  Briefcase,
  User,
  Home,
  Send,
  FileText
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: 'Home',
      href: '#home',
      icon: <Home size={18} />
    },
    {
      name: 'About',
      href: '#skills',
      icon: <User size={18} />
    },
    {
      name: 'Projects',
      href: '#projects',
      icon: <Code size={18} />
    },
    {
      name: 'Experience',
      href: '#experience',
      icon: <Briefcase size={18} />
    },
    {
      name: 'Contact',
      href: '#contact',
      icon: <Send size={18} />
    }
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);

    const id = href.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-xl">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('#home')}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
            >
              Giridhara M
            </button>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center">

            <div className="flex items-center space-x-2">

              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="
                    flex items-center gap-1
                    text-gray-700 dark:text-gray-200
                    hover:text-blue-600 dark:hover:text-blue-400
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    px-3 py-2
                    rounded-md
                    text-sm
                    font-medium
                    transition-all duration-200
                  "
                >
                  {link.icon}
                  <span>{link.name}</span>
                </button>
              ))}

            </div>
          </div>

          {/* DESKTOP RESUME */}
          <div className="hidden md:block">

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-4 py-2
                rounded-md
                text-sm
                font-medium
                transition-all duration-200
                hover:shadow-lg
              "
            >
              <FileText size={17} />
              Resume
            </a>

          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                p-2
                rounded-md
                text-gray-700 dark:text-gray-200
                hover:text-blue-600
                hover:bg-gray-100
                dark:hover:bg-gray-800
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
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (

        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800">

          <div className="px-4 py-3 space-y-1">

            {navLinks.map((link) => (

              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="
                  w-full
                  flex items-center gap-3
                  text-left
                  text-gray-700 dark:text-gray-200
                  hover:text-blue-600 dark:hover:text-blue-400
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  px-3 py-3
                  rounded-md
                  text-base
                  font-medium
                  transition-colors
                "
              >
                {link.icon}
                {link.name}
              </button>

            ))}

            {/* MOBILE RESUME */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="
                mt-2
                flex items-center justify-center gap-2
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-4 py-3
                rounded-md
                text-base
                font-medium
                transition-colors
              "
            >
              <FileText size={18} />
              View Resume
            </a>

          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;