import { useEffect, useState } from "react";

import {
  Code2,
  Database,
  Server,
  Shield,
  Terminal,
  GitBranch,
  CheckCircle2,
} from "lucide-react";

const SkillsAndServices = () => {
  const [animate, setAnimate] = useState(false);

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code2 size={22} />,
      color: "blue",
      skills: ["Java", "Python"],
    },
    {
      category: "Backend & APIs",
      icon: <Server size={22} />,
      color: "green",
      skills: [
        "Node.js",
        "REST APIs",
        "JWT Authentication",
        "OpenAPI / Swagger",
        "Postman",
      ],
    },
    {
      category: "Databases",
      icon: <Database size={22} />,
      color: "purple",
      skills: ["MySQL", "MongoDB"],
    },
    {
      category: "Cybersecurity & Systems",
      icon: <Shield size={22} />,
      color: "red",
      skills: [
        "Cybersecurity",
        "Windows API",
        "Keyboard Hooks",
        "Linux",
        "Security Research",
      ],
    },
    {
      category: "Tools & Architecture",
      icon: <GitBranch size={22} />,
      color: "orange",
      skills: [
        "Git",
        "GitHub",
        "Microservices Architecture",
        "OpenAPI / Swagger",
        "Postman",
      ],
    },
    {
      category: "Development Concepts",
      icon: <Terminal size={22} />,
      color: "cyan",
      skills: [
        "File I/O",
        "Multi-threading",
        "RESTful Architecture",
        "Database Design",
        "API Development",
      ],
    },
  ];

  const services = [
    {
      icon: <Code2 size={30} />,
      title: "Software Development",
      description:
        "Building reliable software solutions using Java and Python with a focus on clean and maintainable code.",
      features: [
        "Java development",
        "Python development",
        "Object-oriented programming",
        "Problem solving",
        "Application development",
      ],
    },
    {
      icon: <Server size={30} />,
      title: "Backend Development",
      description:
        "Developing backend applications and REST APIs with secure authentication and efficient database integration.",
      features: [
        "Node.js development",
        "REST API development",
        "JWT authentication",
        "API testing with Postman",
        "OpenAPI / Swagger",
      ],
    },
    {
      icon: <Database size={30} />,
      title: "Database Solutions",
      description:
        "Designing and working with relational and NoSQL databases for efficient data management.",
      features: [
        "MySQL",
        "MongoDB",
        "Database design",
        "Query optimization",
        "Data management",
      ],
    },
    {
      icon: <Shield size={30} />,
      title: "Cybersecurity Projects",
      description:
        "Developing educational cybersecurity projects to understand security concepts, threats, and system behavior.",
      features: [
        "Security research",
        "Python security tools",
        "Windows API",
        "Event interception",
        "Cybersecurity analysis",
      ],
    },
  ];

  /* =========================================
     START ANIMATION WHEN SECTION IS VISIBLE
  ========================================= */

  useEffect(() => {
    const section = document.getElementById("skills");

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative py-24 bg-[#080d19] text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full" />

        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div
          className={`mb-14 transition-all duration-700 ease-out ${
            animate
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >

          <div className="flex items-center gap-3 mb-5">

            <span className="font-mono text-sm text-blue-400">
              02.
            </span>

            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
              Skills & Toolkit
            </span>

          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">

            <div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Technical{" "}
                <span className="text-blue-400">
                  Skills
                </span>
              </h2>

            </div>

            <p className="text-gray-400 leading-7 max-w-xl">
              My technical skills cover software development, backend
              technologies, databases, cybersecurity, and modern development
              tools.
            </p>

          </div>

        </div>

        {/* =========================================
            SKILL CARDS
        ========================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className={`
                group
                relative
                p-6
                rounded-xl
                bg-[#0d1424]
                border border-white/10
                hover:border-blue-500/40
                hover:-translate-y-2
                transition-all
                duration-700
                overflow-hidden
                ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }
              `}
              style={{
                transitionDelay: `${150 + index * 130}ms`,
              }}
            >

              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon / Number */}
              <div className="flex items-start justify-between mb-6">

                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 transition-transform duration-500 group-hover:scale-110">
                  {category.icon}
                </div>

                <span className="font-mono text-xs text-gray-600">
                  0{index + 1}
                </span>

              </div>

              <h3 className="text-lg font-semibold text-gray-100 mb-5">
                {category.category}
              </h3>

              {/* Skills */}
              <div className="space-y-3">

                {category.skills.map((skill, idx) => (

                  <div
                    key={idx}
                    className={`
                      flex items-center gap-3 text-sm
                      transition-all duration-500
                      ${
                        animate
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-5"
                      }
                    `}
                    style={{
                      transitionDelay: `${
                        350 + index * 130 + idx * 70
                      }ms`,
                    }}
                  >

                    <CheckCircle2
                      size={15}
                      className="text-blue-400 flex-shrink-0"
                    />

                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {skill}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* =========================================
            SERVICES
        ========================================= */}

        <div className="mt-24">

          {/* Service heading */}
          <div
            className={`
              transition-all
              duration-700
              ease-out
              ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }
            `}
            style={{ transitionDelay: "900ms" }}
          >

            <div className="flex items-center gap-3 mb-5">

              <span className="font-mono text-sm text-blue-400">
                02.1
              </span>

              <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
                Areas of Work
              </span>

            </div>

            <div className="mb-10">

              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                What I{" "}
                <span className="text-blue-400">
                  Work With
                </span>
              </h3>

              <p className="text-gray-400 max-w-2xl leading-7">
                Areas where I apply my technical knowledge and development
                skills.
              </p>

            </div>

          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {services.map((service, index) => (

              <div
                key={index}
                className={`
                  group
                  relative
                  p-7
                  rounded-xl
                  bg-[#0d1424]
                  border border-white/10
                  hover:border-blue-500/40
                  hover:-translate-y-2
                  transition-all
                  duration-700
                  overflow-hidden
                  ${
                    animate
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-16"
                  }
                `}
                style={{
                  transitionDelay: `${1000 + index * 180}ms`,
                }}
              >

                <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />

                <div className="relative z-10">

                  <div className="flex items-center justify-between mb-6">

                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 transition-transform duration-500 group-hover:scale-110">
                      {service.icon}
                    </div>

                    <span className="font-mono text-xs text-gray-600">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="text-xl font-bold text-gray-100 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-7 mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    {service.features.map((feature, idx) => (

                      <div
                        key={idx}
                        className={`
                          flex items-center gap-2 text-sm
                          transition-all duration-500
                          ${
                            animate
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 translate-x-4"
                          }
                        `}
                        style={{
                          transitionDelay: `${
                            1200 + index * 180 + idx * 70
                          }ms`,
                        }}
                      >

                        <CheckCircle2
                          size={15}
                          className="text-green-400 flex-shrink-0"
                        />

                        <span className="text-gray-400">
                          {feature}
                        </span>

                      </div>

                    ))}

                  </div>

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