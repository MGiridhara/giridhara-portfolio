import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send
} from 'lucide-react';

const Contact = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.Name.value,
      email: form.Email.value,
      subject: form.Subject.value,
      message: form.Message.value,
    };

    try {
      const response = await fetch(
        'https://giridhara-portfolio.onrender.com/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert('Message sent successfully!');

        form.reset();
      } else {
        alert(
          result.message ||
          result.error ||
          'Failed to send message.'
        );
      }

    } catch (error) {
      console.error('Error:', error);

      alert(
        'Unable to connect to the server. Please try again.'
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Touch
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interested in connecting, discussing a project,
            or exploring internship opportunities?
            Feel free to reach out to me.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I am a Computer Science and Engineering student
              specializing in Cyber Security. I am passionate about
              software development, backend technologies,
              cybersecurity, and building secure and impactful
              solutions.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:mgiridhara770@gmail.com"
              className="flex items-center gap-4 mb-6 group"
            >

              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Mail
                  size={22}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>

              <div>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>

                <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600">
                  mgiridhara770@gmail.com
                </p>

              </div>

            </a>

            {/* PHONE */}
            <a
              href="tel:+919380548782"
              className="flex items-center gap-4 mb-6 group"
            >

              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Phone
                  size={22}
                  className="text-green-600 dark:text-green-400"
                />
              </div>

              <div>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Phone
                </p>

                <p className="font-medium text-gray-900 dark:text-white group-hover:text-green-600">
                  +91 9380548782
                </p>

              </div>

            </a>

            {/* LOCATION */}
            <div className="flex items-center gap-4 mb-8">

              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <MapPin
                  size={22}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>

              <div>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Location
                </p>

                <p className="font-medium text-gray-900 dark:text-white">
                  Bangalore, India
                </p>

              </div>

            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4">

              {/* GITHUB */}
              <a
                href="https://github.com/MGiridhara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github
                  size={22}
                  className="text-gray-700 dark:text-gray-200"
                />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/giridhara-77m0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={22}
                  className="text-gray-700 dark:text-gray-200"
                />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md">

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>

            {/* CONTACT FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <div>

                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="Email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              {/* SUBJECT */}
              <div>

                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  name="Message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

              </div>

              {/* SEND BUTTON */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;