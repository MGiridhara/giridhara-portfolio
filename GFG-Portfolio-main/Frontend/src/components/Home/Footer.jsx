import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Giridhara M
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Computer Science and Engineering student specializing in
              Cyber Security, passionate about software development,
              backend technologies, and cybersecurity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <a href="#home" className="hover:text-blue-400 transition-colors">
                Home
              </a>

              <a href="#skills" className="hover:text-blue-400 transition-colors">
                Skills
              </a>

              <a href="#projects" className="hover:text-blue-400 transition-colors">
                Projects
              </a>

              <a href="#contact" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/MGiridhara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/giridhara-77m0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:mgiridhara770@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Giridhara M. All rights reserved.
            </p>

            <p className="text-sm text-gray-400 flex items-center gap-1">
              Built with
              <Heart
                size={15}
                className="text-red-500 fill-red-500"
              />
              using React & Tailwind CSS
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;