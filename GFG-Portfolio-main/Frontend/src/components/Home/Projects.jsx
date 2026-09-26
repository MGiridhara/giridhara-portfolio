import { useEffect, useState } from "react";
import {
  Github,
  ChevronRight,
  FolderGit2,
  Shield,
} from "lucide-react";

const FeaturedProjects = () => {
  const [filter, setFilter] = useState("All");
  const [animate, setAnimate] = useState(false);

  const projects = [
    {
      id: 1,
      title: "KeyLogger – Keyboard Activity Monitoring Tool",
      description:
        "A Python-based cybersecurity research project that captures keyboard activity in a controlled environment using Windows API, keyboard hooks, file handling, and multi-threading.",
      image: "/Images/Keylogger.jpg",
      tags: [
        "Python",
        "Windows API",
        "Keyboard Hooks",
        "File I/O",
        "Multi-threading",
      ],
      github: "https://github.com/MGiridhara/Keylogger",
      live: "#",
      category: "Cybersecurity",
    },

    {
      id: 2,
      title: "DarkComet Analyzer",
      description:
        "A Python-based cybersecurity analysis tool for examining DarkComet-related activity, detecting suspicious indicators, monitoring behavior, and supporting malware analysis in a controlled environment.",
      image: "/Images/DarkComet.jpg",
      tags: [
        "Python",
        "Malware Analysis",
        "Threat Detection",
        "Cybersecurity",
        "Security Monitoring",
      ],
      github: "https://github.com/MGiridhara/DarkComet_Analyzer",
      live: "#",
      category: "Cybersecurity",
    },
  ];

  const filters = ["All", "Cybersecurity", "Web App"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const section = document.getElementById("projects");

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
      id="projects"
      className="relative py-24 bg-[#080d19] text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-20 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full" />

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
          className={`mb-12 transition-all duration-700 ease-out ${
            animate
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-sm text-blue-400">
              03.
            </span>

            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
              Selected Work
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Featured{" "}
                <span className="text-blue-400">
                  Projects
                </span>
              </h2>
            </div>

            <p className="text-gray-400 leading-7 max-w-xl">
              Explore some of my projects in cybersecurity, software
              development, and web application development.
            </p>
          </div>
        </div>

        {/* FILTERS */}
        <div
          className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 ease-out ${
            animate
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {filters.map((item, index) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`
                px-4 py-2
                rounded-md
                font-mono text-xs
                border
                transition-all duration-300
                hover:-translate-y-0.5
                ${
                  filter === item
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-white/[0.03] border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40"
                }
              `}
              style={{
                transitionDelay: `${250 + index * 80}ms`,
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* PROJECTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`
                group
                rounded-xl
                overflow-hidden
                bg-[#0d1424]
                border border-white/10
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
                transitionDelay: `${450 + index * 220}ms`,
              }}
            >

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden bg-[#111827]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    object-center
                    opacity-80
                    group-hover:opacity-100
                    group-hover:scale-105
                    transition-all duration-700
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent" />

                {/* Number */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-xs text-blue-400 bg-[#080d19]/80 border border-white/10 px-3 py-1.5 rounded-md">
                    0{index + 1}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-2 font-mono text-xs text-gray-200 bg-[#080d19]/80 border border-white/10 px-3 py-1.5 rounded-md">
                    <Shield size={13} className="text-blue-400" />
                    {project.category}
                  </span>
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* Project icon + GitHub */}
                <div className="flex items-center justify-between mb-5">

                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <FolderGit2 size={23} />
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub - ${project.title}`}
                    className="
                      p-2.5
                      rounded-md
                      border border-white/10
                      text-gray-400
                      hover:text-white
                      hover:border-blue-500/50
                      hover:bg-blue-500/10
                      hover:-translate-y-1
                      transition-all
                    "
                  >
                    <Github size={18} />
                  </a>

                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-7 mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="
                        px-2.5 py-1
                        rounded
                        bg-white/[0.04]
                        border border-white/10
                        text-gray-400
                        font-mono text-[11px]
                        hover:border-blue-500/40
                        hover:text-blue-300
                        transition-all duration-300
                      "
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                {/* View Project */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-blue-400
                    hover:text-blue-300
                    font-medium
                    text-sm
                    transition-colors
                  "
                >
                  View Project

                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>

              </div>
            </article>
          ))}

        </div>

        {/* Bottom line */}
        <div
          className={`
            flex items-center justify-center gap-4 mt-16
            transition-all duration-700
            ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
          style={{ transitionDelay: "950ms" }}
        >
          <span className="h-px w-20 bg-white/10" />

          <span className="font-mono text-xs text-gray-600">
            MORE PROJECTS COMING SOON
          </span>

          <span className="h-px w-20 bg-white/10" />
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;