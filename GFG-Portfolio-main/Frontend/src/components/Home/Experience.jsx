import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: 'B.E. Computer Science & Engineering - Cyber Security',
      organization: 'Dayananda Sagar Academy of Technology and Management',
      duration: '2024 - 2027',
      description:
        'Currently pursuing my Bachelor of Engineering in Computer Science and Engineering with a specialization in Cyber Security.',
    },
    {
      type: 'education',
      title: 'Diploma in Cyber Physical Systems and Security',
      organization: 'Kudligi Polytechnic College',
      duration: '2021 - 2024',
      description:
        'Completed Diploma in Cyber Physical Systems and Security with a strong foundation in programming, networking, databases, and cybersecurity.',
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Experience
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My educational journey and technical background in computer
            science and cybersecurity.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-gray-700 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                }`}
              >

                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                    {experience.type === 'education' ? (
                      <GraduationCap
                        size={24}
                        className="text-white"
                      />
                    ) : (
                      <Briefcase
                        size={24}
                        className="text-white"
                      />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? 'md:mr-auto md:pr-8'
                      : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">

                    <span className="inline-block px-3 py-1 mb-3 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      {experience.duration}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {experience.title}
                    </h3>

                    <h4 className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {experience.organization}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {experience.description}
                    </p>

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

export default Experience;