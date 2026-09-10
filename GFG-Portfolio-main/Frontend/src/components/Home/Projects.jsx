import { Github, ExternalLink, ChevronRight } from 'lucide-react';

const FeaturedProjects = () => {
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
        "Multi-threading"
      ],
      github: "#",
      live: "#",
      category: "Cybersecurity"
    },

  
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Projects
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore some of my projects in cybersecurity, software
            development, and web application development.
          </p>
        </div>

        {/* PROJECT FILTER */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium">
            All
          </button>

          <button className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white rounded-full text-sm font-medium transition-colors">
            Cybersecurity
          </button>

          <button className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white rounded-full text-sm font-medium transition-colors">
            Web App
          </button>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">

                  <span className="text-white text-sm bg-blue-600/90 px-2 py-1 rounded-md">
                    {project.category}
                  </span>

                  <div className="flex gap-2">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github
                        size={16}
                        className="text-white"
                      />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600/50 p-2 rounded-full hover:bg-blue-600/80 transition-colors"
                      aria-label="Live Project"
                    >
                      <ExternalLink
                        size={16}
                        className="text-white"
                      />
                    </a>

                  </div>
                </div>
              </div>

              {/* PROJECT CONTENT */}
              <div className="p-5">

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-1 mb-4">

                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                {/* VIEW DETAILS */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project
                  <ChevronRight
                    size={16}
                    className="ml-1"
                  />
                </a>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;