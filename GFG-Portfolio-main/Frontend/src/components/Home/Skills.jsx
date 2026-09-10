import {
  Code2,
  Database,
  Server,
  Shield,
  Terminal,
  GitBranch,
  CheckCircle2
} from 'lucide-react';

const SkillsAndServices = () => {

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code2 size={26} className="text-blue-600 dark:text-blue-400" />,
      skills: [
        "Java",
        "Python"
      ]
    },

    {
      category: "Backend & APIs",
      icon: <Server size={26} className="text-green-600 dark:text-green-400" />,
      skills: [
        "Node.js",
        "REST APIs",
        "JWT Authentication",
        "OpenAPI / Swagger",
        "Postman"
      ]
    },

    {
      category: "Databases",
      icon: <Database size={26} className="text-purple-600 dark:text-purple-400" />,
      skills: [
        "MySQL",
        "MongoDB"
      ]
    },

    {
      category: "Cybersecurity & Systems",
      icon: <Shield size={26} className="text-red-600 dark:text-red-400" />,
      skills: [
        "Cybersecurity",
        "Windows API",
        "Keyboard Hooks",
        "Linux",
        "Security Research"
      ]
    },

    {
      category: "Tools & Architecture",
      icon: <GitBranch size={26} className="text-orange-600 dark:text-orange-400" />,
      skills: [
        "Git",
        "GitHub",
        "Microservices Architecture",
        "OpenAPI / Swagger",
        "Postman"
      ]
    },

    {
      category: "Development Concepts",
      icon: <Terminal size={26} className="text-indigo-600 dark:text-indigo-400" />,
      skills: [
        "File I/O",
        "Multi-threading",
        "RESTful Architecture",
        "Database Design",
        "API Development"
      ]
    }
  ];

  const services = [
    {
      icon: <Code2 size={38} className="text-blue-600 dark:text-blue-400" />,
      title: "Software Development",
      description:
        "Building reliable software solutions using Java and Python with a focus on clean and maintainable code.",
      features: [
        "Java development",
        "Python development",
        "Object-oriented programming",
        "Problem solving",
        "Application development"
      ]
    },

    {
      icon: <Server size={38} className="text-green-600 dark:text-green-400" />,
      title: "Backend Development",
      description:
        "Developing backend applications and REST APIs with secure authentication and efficient database integration.",
      features: [
        "Node.js development",
        "REST API development",
        "JWT authentication",
        "API testing with Postman",
        "OpenAPI / Swagger"
      ]
    },

    {
      icon: <Database size={38} className="text-purple-600 dark:text-purple-400" />,
      title: "Database Solutions",
      description:
        "Designing and working with relational and NoSQL databases for efficient data management.",
      features: [
        "MySQL",
        "MongoDB",
        "Database design",
        "Query optimization",
        "Data management"
      ]
    },

    {
      icon: <Shield size={38} className="text-red-600 dark:text-red-400" />,
      title: "Cybersecurity Projects",
      description:
        "Developing educational cybersecurity projects to understand security concepts, threats, and system behavior.",
      features: [
        "Security research",
        "Python security tools",
        "Windows API",
        "Event interception",
        "Cybersecurity analysis"
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Skills
            </span>{" "}
            &{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Expertise
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical skills cover software development, backend
            technologies, databases, cybersecurity, and modern development
            tools.
          </p>

        </div>

        {/* SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="
                bg-white dark:bg-gray-800
                rounded-xl
                shadow-md
                p-6
                hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300
              "
            >

              {/* CATEGORY TITLE */}
              <div className="flex items-center gap-3 mb-5">

                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>

              </div>

              {/* SKILL LIST */}
              <div className="space-y-3">

                {category.skills.map((skill, idx) => (

                  <div
                    key={idx}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={17}
                      className="text-green-500 flex-shrink-0"
                    />

                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* SERVICES */}
        <div className="mt-20">

          <div className="text-center mb-10">

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              What I{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Work With
              </span>
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mt-3">
              Areas where I apply my technical knowledge and development skills.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {services.map((service, index) => (

              <div
                key={index}
                className="
                  group
                  bg-white dark:bg-gray-800
                  rounded-xl
                  shadow-md
                  p-6
                  hover:bg-blue-600
                  dark:hover:bg-blue-700
                  hover:shadow-xl
                  transition-all duration-300
                "
              >

                <div className="mb-4">
                  {service.icon}
                </div>

                <h3 className="
                  text-xl
                  font-bold
                  text-gray-900
                  dark:text-white
                  group-hover:text-white
                  mb-3
                ">
                  {service.title}
                </h3>

                <p className="
                  text-gray-600
                  dark:text-gray-400
                  group-hover:text-white/90
                  mb-5
                ">
                  {service.description}
                </p>

                <div className="space-y-2">

                  {service.features.map((feature, idx) => (

                    <div
                      key={idx}
                      className="flex items-center gap-2"
                    >

                      <CheckCircle2
                        size={16}
                        className="text-green-500 group-hover:text-white"
                      />

                      <span className="
                        text-gray-700
                        dark:text-gray-300
                        group-hover:text-white/90
                      ">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsAndServices;