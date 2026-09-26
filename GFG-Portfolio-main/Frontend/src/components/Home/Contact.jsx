import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  Terminal,
} from "lucide-react";

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
        "https://giridhara-portfolio.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert(
          result.message ||
            result.error ||
            "Failed to send message."
        );
      }
    } catch (error) {
      console.error("Error:", error);

      alert(
        "Unable to connect to the server. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#080d19] text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute right-0 top-20 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full" />

        <div className="absolute left-0 bottom-0 w-80 h-80 bg-purple-600/10 blur-3xl rounded-full" />

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
        <div className="mb-14">

          <div className="flex items-center gap-3 mb-5">

            <span className="font-mono text-sm text-blue-400">
              06.
            </span>

            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
              Contact
            </span>

          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Get In{" "}
              <span className="text-blue-400">
                Touch
              </span>
            </h2>

            <p className="text-gray-400 leading-7 max-w-xl">
              Interested in connecting, discussing a project,
              or exploring internship opportunities?
              Feel free to reach out to me.
            </p>

          </div>

        </div>

        {/* CONTACT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT SIDE */}
          <div className="bg-[#0d1424] border border-white/10 rounded-xl p-7 md:p-8">

            <div className="flex items-center gap-3 mb-6">

              <Terminal
                size={20}
                className="text-blue-400"
              />

              <span className="font-mono text-xs text-gray-500">
                contact@giridhara
              </span>

            </div>

            <h3 className="text-2xl font-bold mb-4">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-7 mb-9">
              I am a Computer Science and Engineering student
              specializing in Cyber Security. I am passionate about
              software development, backend technologies,
              cybersecurity, and building secure and impactful
              solutions.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:mgiridhara770@gmail.com"
              className="group flex items-center gap-4 p-4 mb-3 border border-white/10 rounded-lg hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300"
            >

              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <Mail size={20} />
              </div>

              <div>

                <p className="font-mono text-xs text-gray-500 mb-1">
                  EMAIL
                </p>

                <p className="text-gray-300 group-hover:text-blue-400 transition-colors">
                  mgiridhara770@gmail.com
                </p>

              </div>

            </a>

            {/* LOCATION */}
            <div className="flex items-center gap-4 p-4 mb-8 border border-white/10 rounded-lg">

              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                <MapPin size={20} />
              </div>

              <div>

                <p className="font-mono text-xs text-gray-500 mb-1">
                  LOCATION
                </p>

                <p className="text-gray-300">
                  Bangalore, India
                </p>

              </div>

            </div>

            {/* SOCIAL LINKS */}
            <div>

              <p className="font-mono text-xs text-gray-500 uppercase tracking-[0.2em] mb-4">
                Find me online
              </p>

              <div className="flex gap-3">

                {/* GITHUB */}
                <a
                  href="https://github.com/MGiridhara"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                >
                  <Github size={20} />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/giridhara-77m0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-lg text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                >
                  <Linkedin size={20} />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="relative bg-[#0d1424] border border-white/10 rounded-xl p-7 md:p-8 overflow-hidden">

            {/* Top decoration */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

            <div className="flex items-center justify-between mb-7">

              <h3 className="text-xl font-bold">
                Send Me a Message
              </h3>

              <span className="font-mono text-xs text-blue-400">
                06.1
              </span>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <div>

                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs text-gray-500 uppercase tracking-wider mb-2"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-white/10 bg-[#080d19] text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label
                  htmlFor="contact-email"
                  className="block font-mono text-xs text-gray-500 uppercase tracking-wider mb-2"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="Email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-white/10 bg-[#080d19] text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                />

              </div>

              {/* SUBJECT */}
              <div>

                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs text-gray-500 uppercase tracking-wider mb-2"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-white/10 bg-[#080d19] text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs text-gray-500 uppercase tracking-wider mb-2"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="Message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-white/10 bg-[#080d19] text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"
                />

              </div>

              {/* SEND */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Send Message

                <Send
                  size={17}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

            </form>

            <p className="text-center font-mono text-[11px] text-gray-600 mt-5">
              Your message will be sent securely.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;