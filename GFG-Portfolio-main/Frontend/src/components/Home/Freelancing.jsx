import { useEffect, useState } from "react";
import {
  Code,
  Shield,
  Database,
  Network,
  Check,
  Zap,
  Lock,
  GitBranch,
  ChevronRight,
} from "lucide-react";

const FreelancingServices = () => {
  const [animate, setAnimate] = useState(false);

  const expertise = [
    {
      icon: <Code size={25} />,
      title: "Software Development",
      description:
        "Building software solutions using programming fundamentals, object-oriented programming and problem-solving techniques.",
      features: [
        "Java development",
        "Python development",
        "C++ programming",
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
      ],
    },

    {
      icon: <Shield size={25} />,
      title: "Cybersecurity",
      description:
        "Applying cybersecurity concepts to understand vulnerabilities, security risks and secure software practices.",
      features: [
        "Network Security",
        "Penetration Testing",
        "Security Testing",
        "Vulnerability Analysis",
        "Cybersecurity Research",
      ],
    },

    {
      icon: <Network size={25} />,
      title: "Networking & Security",
      description:
        "Understanding computer networking, protocols and security concepts used in modern network environments.",
      features: [
        "Computer Networking",
        "Network Protocols",
        "Network Security",
        "Security Analysis",
        "Cryptography",
      ],
    },

    {
      icon: <Database size={25} />,
      title: "Backend & Databases",
      description:
        "Developing backend components and working with databases and APIs to build structured applications.",
      features: [
        "Node.js",
        "REST APIs",
        "MySQL",
        "MongoDB",
        "JWT Authentication",
      ],
    },
  ];

  const strengths = [
    {
      icon: <Zap size={20} />,
      title: "Problem Solving",
      description:
        "Strong foundation in programming, data structures and algorithms.",
    },

    {
      icon: <Lock size={20} />,
      title: "Security Focus",
      description:
        "Interested in identifying vulnerabilities and understanding security risks.",
    },

    {
      icon: <GitBranch size={20} />,
      title: "Development Tools",
      description:
        "Experience with Git, GitHub, Postman and OpenAPI / Swagger.",
    },
  ];

  useEffect(() => {
    const section = document.getElementById("services");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
      id="services"
      className="relative py-24 bg-[#080d19] text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-40 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full" />

        <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-600/10 blur-3xl rounded-full" />

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

        {/* HEADER */}
        <div
          className={`mb-14 transition-all duration-700 ease-out ${
            animate
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-sm text-blue-400">
              05.
            </span>

            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
              Expertise
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Areas of{" "}
              <span className="text-blue-400">
                Expertise
              </span>
            </h2>

            <p className="text-gray-400 leading-7 max-w-xl">
              My technical interests and strengths include software
              development, cybersecurity, networking, backend development
              and databases.
            </p>
          </div>
        </div>

        {/* EXPERTISE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">

          {expertise.map((item, index) => (
            <div
              key={index}
              className={`
                group
                relative
                bg-[#0d1424]
                border border-white/10
                rounded-xl
                p-7
                overflow-hidden
                hover:border-blue-500/40
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all duration-700
                ease-out
                ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }
              `}
              style={{
                transitionDelay: `${350 + index * 180}ms`,
              }}
            >

              {/* Number */}
              <span className="absolute top-5 right-6 font-mono text-xs text-gray-600">
                05.{index + 1}
              </span>

              {/* Hover line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/10 text-blue-400 mb-6 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7 mb-6">
                {item.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {item.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 group/feature"
                  >
                    <Check
                      size={15}
                      className="text-blue-400 flex-shrink-0 transition-transform duration-300 group-hover/feature:scale-125"
                    />

                    <span className="text-sm text-gray-400 group-hover/feature:text-gray-200 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* STRENGTHS + EDUCATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* STRENGTHS */}
          <div
            className={`
              border border-white/10
              bg-[#0d1424]
              rounded-xl
              p-7
              transition-all duration-700 ease-out
              hover:border-blue-500/30
              ${
                animate
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
              }
            `}
            style={{ transitionDelay: "1050ms" }}
          >

            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs text-blue-400">
                05.5
              </span>

              <span className="h-px w-8 bg-white/10" />

              <h3 className="text-xl font-bold text-white">
                Why Work With Me?
              </h3>
            </div>

            <p className="text-gray-400 leading-7 mb-7">
              I am continuously developing my technical skills through
              academic projects, cybersecurity research and practical
              software development.
            </p>

            <div className="space-y-5">

              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className={`
                    flex items-start gap-4
                    transition-all duration-500
                    ${
                      animate
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }
                  `}
                  style={{
                    transitionDelay: `${1200 + index * 150}ms`,
                  }}
                >

                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0 transition-all duration-300 hover:scale-110">
                    {strength.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">
                      {strength.title}
                    </h4>

                    <p className="text-sm text-gray-500 leading-6">
                      {strength.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* EDUCATION */}
          <div
            className={`
              border border-white/10
              bg-[#0d1424]
              rounded-xl
              p-7
              transition-all duration-700 ease-out
              hover:border-blue-500/30
              ${
                animate
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-16"
              }
            `}
            style={{ transitionDelay: "1050ms" }}
          >

            <div className="flex items-center gap-3 mb-7">
              <span className="font-mono text-xs text-blue-400">
                05.6
              </span>

              <span className="h-px w-8 bg-white/10" />

              <h3 className="text-xl font-bold text-white">
                Education
              </h3>
            </div>

            {/* BE */}
            <div className="relative pl-6 border-l border-blue-500/40 mb-9">

              <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-400 animate-pulse" />

              <p className="font-mono text-xs text-blue-400 mb-2">
                2024 – 2027
              </p>

              <h4 className="text-lg font-bold text-gray-100">
                B.E. in Computer Science & Engineering
              </h4>

              <p className="text-blue-400 text-sm mt-1">
                Cyber Security
              </p>

              <p className="text-gray-500 text-sm mt-3">
                Dayanada Sagar Academy of Technology and Management
              </p>

              <p className="text-sm text-gray-400 mt-3">
                Current CGPA:{" "}
                <span className="text-gray-200 font-semibold">
                  8.06
                </span>
              </p>

            </div>

            {/* DIPLOMA */}
            <div className="relative pl-6 border-l border-purple-500/40">

              <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-purple-400 animate-pulse" />

              <p className="font-mono text-xs text-purple-400 mb-2">
                2021 – 2024
              </p>

              <h4 className="text-lg font-bold text-gray-100">
                Diploma in Cyber Physical Systems and Security
              </h4>

              <p className="text-gray-500 text-sm mt-3">
                Kudligi Polytechnic College
              </p>

              <p className="text-gray-500 text-sm">
                Vijayanagara, India
              </p>

              <p className="text-sm text-gray-400 mt-3">
                Final CGPA:{" "}
                <span className="text-gray-200 font-semibold">
                  8.95
                </span>
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div
          className={`
            relative
            mt-16
            border border-blue-500/20
            bg-[#0d1424]
            rounded-xl
            p-8 md:p-10
            text-center
            overflow-hidden
            transition-all duration-700 ease-out
            ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }
          `}
          style={{ transitionDelay: "1550ms" }}
        >

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

          <div className="relative">

            <span className="font-mono text-xs text-blue-400 uppercase tracking-[0.25em]">
              Let's Connect
            </span>

            <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-3">
              Let's Build Something Meaningful
            </h3>

            <p className="text-gray-400 max-w-2xl mx-auto mb-7 leading-7">
              Interested in software development, cybersecurity or
              technology? Feel free to connect with me.
            </p>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                border border-blue-500/50
                text-blue-400
                px-6 py-3
                rounded-md
                font-medium
                hover:bg-blue-500
                hover:text-white
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              Get in Touch
              <ChevronRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FreelancingServices;