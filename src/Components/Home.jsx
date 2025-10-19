// import React, { useState, useEffect } from "react";
import Instructor from "./Instructor";
import FAQ from "./FAQ";
import LearnAI from "./LearnAI";
import Courses from "./Courses";
import { Link } from "react-router-dom";
import Feedback from "./Feedback";
import Hackathon from "./Hackathon";
import React, { useState, useEffect } from "react";
import MentorVolunteer from "./MentorVolunteer";

function FlippingImageCard() {
  const images = [
    "/images/first.jpg",
    "/images/second.jpg",
    "/images/third.jpg",
    "/images/fourth.jpg",
    "/images/fifth.jpg",
    "/images/sixth.jpg",
    "/images/seven.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextIndex = (index + 1) % images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(true);
      setTimeout(() => {
        setIndex(nextIndex);
        setFlipped(false);
      }, 300); // Flip duration
    }, 2000); // Flip every 3s

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="w-100 h-120 perspective">
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden">
          <img
            src={images[index]}
            alt={`Bootcamp ${index + 1}`}
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}


function Home() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-r from-blue-950 via-blue-300 to-blue-950 py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 leading-tight">
              Janakpur Tech Bootcamp : AI Edition 2025
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-200">
              A{" "}
              <span className="font-semibold">3-month immersive program </span>
              focused on{" "}
              <span className="text-blue-900 font-bold">
                Artificial Intelligence
              </span>
              . Learn Machine Learning, Deep Learning, and AI tools from
              industry experts and build real-world projects to kickstart your
              career in AI.
            </p>

            {/* CTA Buttons */}
            <div className="block">
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://forms.gle/dRNJb6fAemTWpJeB8"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                 Apply Now
                </a>
                  <div className="">
                <Link to="/SponsorUS">
                  <button className=" px-24 py-3 border border-gray-300 bg-blue-800 rounded-lg hover:text-black text-gray-300 hover:bg-gray-100 transition">
                    Sponsor Us
                  </button>
                </Link>
              </div>
              </div>
             
            </div>

            {/* Expanded Details */}
            <div className="bg-white p-6 rounded-lg shadow-lg mt-8 pt-3  text-left pl-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  Bootcamp Highlights
                </h2>
                <ul className="list-none pl-5 text-gray-700 space-y-2">
                  <li>📅 <strong>Duration:</strong> 3 months <span className="font-semibold">(29 oct - 29 jan)</span></li>
                  <li>📍 <strong>Location:</strong> Janakchowk, Janakpur</li>
                  <li>💡 <strong>Focus:</strong> Generative AI, Deep Learning, AI Tools</li>
                  <li>🧑‍🏫 <strong>Mentors:</strong> Industry professionals from top tech companies</li>
                  <li>🚀 <strong>Outcome:</strong> Hands-on projects + career guidance</li>
                </ul>
             </div>   
           
          </div>

          {/* Right: Flipping Image Card */}
          <div className="flex justify-center md:justify-end">
            <FlippingImageCard />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section>
        
        <LearnAI />
        <Courses />
        <Instructor />
        <Feedback />
         <MentorVolunteer />
        <Hackathon />
        <FAQ />
      </section>
    </section>
  );
}

export default Home;