import { useEffect, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const [animate, setAnimate] = useState(false);

  const experiences = [
    {
      type: "education",
      title: "B.E. Computer Science & Engineering - Cyber Security",
      organization:
        "Dayananda Sagar Academy of Technology and Management",
      duration: "2024 - 2027",
      description:
        "Currently pursuing my Bachelor of Engineering in Computer Science and Engineering with a specialization in Cyber Security.",
    },
    {
      type: "education",
      title: "Diploma in Cyber Physical Systems and Security",
      organization: "Kudligi Polytechnic College",
      duration: "2021 - 2024",
      description:
        "Completed Diploma in Cyber Physical Systems and Security with a strong foundation in programming, networking, databases, and cybersecurity.",
    },
  ];

  useEffect(() => {
    const section = document.getElementById("experience");

    if (!section) return;

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

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="relative py-24 bg-[#080d19] text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-20 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full" />

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
              04.
            </span>

            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
              Education & Journey
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              My{" "}
              <span className="text-blue-400">
                Experience
              </span>
            </h2>

            <p className="text-gray-400 leading-7 max-w-xl">
              My educational journey and technical background in computer
              science and cybersecurity.
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-5xl mx-auto">

          {/* Desktop timeline line */}
          <div
            className={`
              hidden md:block
              absolute left-1/2 top-0 bottom-0
              w-px
              bg-gradient-to-b
              from-blue-500/60
              via-white/10
              to-transparent
              -translate-x-1/2
              transition-all duration-1000
              origin-top
              ${
                animate
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0"
              }
            `}
          />

          <div className="space-y-10">

            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`
                  relative
                  grid grid-cols-1 md:grid-cols-2
                  gap-8
                  items-center
                  transition-all
                  duration-700
                  ease-out
                  ${
                    animate
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-16"
                  }
                `}
                style={{
                  transitionDelay: `${350 + index * 300}ms`,
                }}
              >

                {/* LEFT / RIGHT CONTENT */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "md:pr-14"
                      : "md:col-start-2 md:pl-14"
                  }`}
                >

                  <div
                    className="
                      group
                      relative
                      bg-[#0d1424]
                      border border-white/10
                      rounded-xl
                      p-6
                      hover:border-blue-500/40
                      hover:-translate-y-2
                      hover:shadow-2xl
                      transition-all duration-500
                    "
                  >

                    {/* Top line */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Duration */}
                    <div className="flex items-center justify-between mb-5">

                      <span className="font-mono text-xs text-blue-400 border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 rounded-md">
                        {experience.duration}
                      </span>

                      <span className="font-mono text-xs text-gray-600">
                        0{index + 1}
                      </span>

                    </div>

                    {/* Icon */}
                    <div className="w-11 h-11 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {experience.type === "education" ? (
                        <GraduationCap size={22} />
                      ) : (
                        <Briefcase size={22} />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {experience.title}
                    </h3>

                    {/* Organization */}
                    <h4 className="text-blue-400 font-medium mb-4">
                      {experience.organization}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-400 leading-7">
                      {experience.description}
                    </p>

                  </div>
                </div>

                {/* TIMELINE CENTER */}
                <div
                  className={`
                    hidden md:flex
                    absolute left-1/2
                    -translate-x-1/2
                    items-center justify-center
                    transition-all duration-700
                    ${
                      animate
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${500 + index * 300}ms`,
                  }}
                >
                  <div className="w-4 h-4 rounded-full bg-[#080d19] border-2 border-blue-500 shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-150" />
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Bottom indicator */}
        <div
          className={`
            flex justify-center mt-14
            transition-all duration-700
            ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
          style={{ transitionDelay: "1100ms" }}
        >
          <span className="font-mono text-xs text-gray-600">
            EDUCATION • EXPERIENCE • GROWTH
          </span>
        </div>

      </div>
    </section>
  );
};

export default Experience;