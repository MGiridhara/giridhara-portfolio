import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Shield,
  Code2,
  Database,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 relative z-10">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex flex-col justify-center">

          {/* Welcome */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Giridhara M
            </span>
          </h1>

          {/* Role */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
              Computer Science &{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Cybersecurity Student
              </span>
            </h2>
          </div>

          {/* Introduction */}
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            Computer Science and Engineering student specializing in Cyber
            Security, passionate about software development, cybersecurity,
            and building secure and impactful software solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">

            {/* View Projects */}
            <a
              href="#projects"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            {/* Download CV */}
            <a
              href="/Resume.pdf"
              download="Giridhara-M-Resume.pdf"
              className="flex items-center gap-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Download CV
              <Download size={18} />
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/MGiridhara"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github
                size={20}
                className="text-gray-700 dark:text-gray-300"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/giridhara-77m0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={20}
                className="text-gray-700 dark:text-gray-300"
              />
            </a>

            {/* Email */}
            <a
              href="mailto:mgiridhara770@gmail.com"
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail
                size={20}
                className="text-gray-700 dark:text-gray-300"
              />
            </a>

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center justify-center relative">

          {/* Background Glow */}
          <div className="absolute w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="absolute w-60 h-60 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl -translate-x-20 translate-y-20"></div>

          {/* Profile Card */}
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-1 rounded-2xl shadow-xl w-full max-w-md">

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">

              {/* Browser Header */}
              <div className="h-6 bg-gray-100 dark:bg-gray-700 flex items-center gap-1 px-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>

              <div className="p-6">

                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">

                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                    GM
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                      Giridhara M
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Software Developer & Cybersecurity Enthusiast
                    </p>
                  </div>

                </div>

                {/* Skill Cards */}
                <div className="space-y-3">

                  {/* Java & Python */}
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">

                    <div className="flex items-center gap-3">

                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Code2
                          size={20}
                          className="text-blue-600 dark:text-blue-400"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          Java & Python
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Programming Languages
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Cybersecurity */}
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">

                    <div className="flex items-center gap-3">

                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <Shield
                          size={20}
                          className="text-purple-600 dark:text-purple-400"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          Cybersecurity
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Security & Research
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Backend */}
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">

                    <div className="flex items-center gap-3">

                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <Database
                          size={20}
                          className="text-green-600 dark:text-green-400"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          Backend & Databases
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Node.js • MySQL • MongoDB • REST APIs
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">

        <span className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          Scroll Down
        </span>

        <svg
          className="w-6 h-6 text-gray-600 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>

      </div>

    </section>
  );
};

export default Hero;