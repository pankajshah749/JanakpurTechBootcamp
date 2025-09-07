import React from "react";

function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image / Illustration */}
        <div className="flex justify-center">
          <img
            src="/images/AboutPageImage.jpg" 
            alt="AI Technology Illustration"
            className="w-[500px] h-[500px] rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About the Bootcamp
          </h2>

          <p className="text-lg text-gray-600 mb-4">
            The <span className="font-semibold">Janakpur AI Bootcamp 2025</span>{" "}
            is a <strong>3-month immersive program</strong> designed for{" "}
            <span className="font-semibold">students, developers, and tech enthusiasts</span>{" "}
            who want to master{" "}
            <span className="text-blue-600 font-semibold">
              Artificial Intelligence
            </span>{" "}
            with hands-on learning and mentorship.
          </p>

          <p className="text-lg text-gray-600 mb-6">
            Our mission is to make{" "}
            <strong>world-class AI education accessible</strong> right here in
            Janakpur. Through practical projects, expert mentorship, and
            real-world applications, you’ll gain the confidence and skills to
            thrive in the global AI industry.
          </p>

          {/* Key Highlights */}
          <ul className="space-y-3 text-gray-700 mb-6">
            <li>🚀 <strong>Master AI, Machine Learning & Deep Learning</strong></li>
            <li>👨‍🏫 <strong>Learn directly from industry experts</strong> with personalized guidance</li>
            <li>💻 <strong>Work on real-world AI projects</strong> like chatbots, vision systems, and predictive models</li>
            <li>🎓 <strong>Build a strong portfolio</strong> that makes you career-ready</li>
          </ul>

          {/* Vision */}
          <p className="text-lg text-gray-600">
            This bootcamp is part of our vision to make{" "}
            <span className="font-semibold text-blue-600">
              Janakpur a hub for AI talent in Nepal
            </span>
            . By empowering the next generation of innovators, we aim to connect
            local talent with global opportunities in the field of Artificial
            Intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
