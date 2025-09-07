import React, { useState } from "react";
import Instructor from "./Instructor";
import FAQ from "./FAQ";
import LearnAI from "./LearnAI";
import Courses from "./Courses";

function Home() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-r from-blue-950 via-blue-300 to-blue-950 py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 leading-tight">
              Janakpur AI Bootcamp 2025
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-200">
              A{" "}
              <span className="font-semibold">3-month immersive program </span>
              focused on{" "}
              <span className="text-blue-600 font-bold">
                Artificial Intelligence
              </span>
              . Learn Machine Learning, Deep Learning, and AI tools from
              industry experts and build real-world projects to kickstart your
              career in AI.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://docs.google.com/forms/d/1Rv1qb9LUwVoFwsNQXfkmjm8Gr8bDgo9VtnbrFUicZuA/edit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:text-black text-gray-300 hover:bg-gray-100 transition"
              >
                {showDetails ? "Show Less" : "Learn More"}
              </button>
            </div>

            {/* Expanded Details */}
            {showDetails && (
              <div className="mt-6 bg-white shadow-md p-6 rounded-lg border border-gray-200 text-left">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  Bootcamp Highlights
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    📅 <strong>Duration:</strong> 3 months 
                  </li>
                  <li>
                    📍 <strong>Location:</strong> Janakchowk, Janakpur
                  </li>
                  <li>
                    💡 <strong>Focus:</strong> Machine Learning, Deep Learning,
                    AI Tools
                  </li>
                  <li>
                    🧑‍🏫 <strong>Mentors:</strong> Industry professionals from
                    top tech companies
                  </li>
                  <li>
                    🚀 <strong>Outcome:</strong> Hands-on projects + career
                    guidance
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Right: Image / Illustration */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/homeImage.webp"
              alt="AI Bootcamp Illustration"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section>
        <LearnAI />
        <Courses />
        <Instructor />
        <FAQ />
      </section>
    </section>
  );
}

export default Home;
