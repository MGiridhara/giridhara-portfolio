import {
  Code,
  Shield,
  Database,
  Network,
  Terminal,
  Check,
  Zap,
  Lock,
  GitBranch,
  ChevronRight
} from 'lucide-react';

const FreelancingServices = () => {

  const expertise = [
    {
      icon: <Code size={40} className="text-blue-600 dark:text-blue-400" />,
      title: "Software Development",
      description:
        "Building software solutions using programming fundamentals, object-oriented programming and problem-solving techniques.",
      features: [
        "Java development",
        "Python development",
        "C++ programming",
        "Object-Oriented Programming",
        "Data Structures & Algorithms"
      ]
    },

    {
      icon: <Shield size={40} className="text-purple-600 dark:text-purple-400" />,
      title: "Cybersecurity",
      description:
        "Applying cybersecurity concepts to understand vulnerabilities, security risks and secure software practices.",
      features: [
        "Network Security",
        "Penetration Testing",
        "Security Testing",
        "Vulnerability Analysis",
        "Cybersecurity Research"
      ]
    },

    {
      icon: <Network size={40} className="text-green-600 dark:text-green-400" />,
      title: "Networking & Security",
      description:
        "Understanding computer networking, protocols and security concepts used in modern network environments.",
      features: [
        "Computer Networking",
        "Network Protocols",
        "Network Security",
        "Security Analysis",
        "Cryptography"
      ]
    },

    {
      icon: <Database size={40} className="text-orange-600 dark:text-orange-400" />,
      title: "Backend & Databases",
      description:
        "Developing backend components and working with databases and APIs to build structured applications.",
      features: [
        "Node.js",
        "REST APIs",
        "MySQL",
        "MongoDB",
        "JWT Authentication"
      ]
    }
  ];

  const strengths = [
    {
      icon: <Zap size={20} className="text-blue-600 dark:text-blue-400" />,
      title: "Problem Solving",
      description:
        "Strong foundation in programming, data structures and algorithms."
    },

    {
      icon: <Lock size={20} className="text-purple-600 dark:text-purple-400" />,
      title: "Security Focus",
      description:
        "Interested in identifying vulnerabilities and understanding security risks."
    },

    {
      icon: <GitBranch size={20} className="text-green-600 dark:text-green-400" />,
      title: "Development Tools",
      description:
        "Experience with Git, GitHub, Postman and OpenAPI / Swagger."
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Areas of{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Expertise
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical interests and strengths include software development,
            cybersecurity, networking, backend development and databases.
          </p>

        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {expertise.map((item, index) => (

            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >

              {/* Icon */}
              <div className="mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {item.description}
              </p>

              {/* Features */}
              <div className="space-y-3">

                {item.features.map((feature, idx) => (

                  <div
                    key={idx}
                    className="flex items-start gap-2"
                  >

                    <Check
                      size={17}
                      className="text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0"
                    />

                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work With Me?
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I am continuously developing my technical skills through
              academic projects, cybersecurity research and practical
              software development.
            </p>

            <div className="space-y-4">

              {strengths.map((strength, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3"
                >

                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg mt-1">
                    {strength.icon}
                  </div>

                  <div>

                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {strength.title}
                    </h4>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {strength.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Education Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h3>

            {/* BE */}
            <div className="border-l-4 border-blue-600 pl-5 mb-8">

              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
                2024 – 2027
              </p>

              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                B.E. Computer Science & Engineering
              </h4>

              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Cyber Security
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                Dayanada Sagar Academy of Technology and Management
              </p>

              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
                Current CGPA: 8.06
              </p>

            </div>

            {/* Diploma */}
            <div className="border-l-4 border-purple-600 pl-5">

              <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">
                2021 – 2024
              </p>

              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                Diploma in Cyber Physical Systems and Security
              </h4>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                Kudligi Polytechnic College
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Vijayanagara, India
              </p>

              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
                Final CGPA: 8.95
              </p>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">

          <h3 className="text-2xl font-bold mb-3">
            Let's Build Something Meaningful
          </h3>

          <p className="mb-6 max-w-2xl mx-auto text-white/90">
            Interested in software development, cybersecurity or
            technology? Feel free to connect with me.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <ChevronRight size={18} className="ml-2" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default FreelancingServices;