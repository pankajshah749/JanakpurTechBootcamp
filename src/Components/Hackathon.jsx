import React from "react";

const Hackathon = () => {
  return (
    <section
      id="hackathon"
      className="py-16 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            🚀 First-Ever Hackathon in Janakpur
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            A historic milestone for Janakpur’s tech community — our very first 
            Hackathon brought together passionate innovators, developers, and 
            problem-solvers. Over an exciting weekend, participants collaborated 
            to tackle real-world challenges, showcase creativity, and build 
            impactful tech solutions that inspire the future.
          </p>
          <p className="mt-3 text-md text-gray-400 max-w-2xl mx-auto">
            This was more than just coding — it was about teamwork, innovation, 
            and proving that Janakpur is ready to shine as a hub for technology 🚀.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <img
            src="/hackathon/hackathon1.jpg"
            alt="Hackathon 1"
            className="w-full h-60 rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/hackathon/hackathon2.jpg"
            alt="Hackathon 2"
            className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/hackathon/hackathon3.jpg"
            alt="Hackathon 3"
            className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/hackathon/hackathon4.jpg"
            alt="Hackathon 4"
            className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/hackathon/hackathon5.jpg"
            alt="Hackathon 5"
            className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/hackathon/hackathon6.jpg"
            alt="Hackathon 6"
            className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/hackathon/hackathon7.jpg"
            alt="Hackathon 7"
            className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/hackathon/hackathon9.jpg"
            alt="Hackathon 8"
            className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
        </div>

        {/* Closing line / CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg font-medium">
            🔥 This is just the beginning. Stay tuned for our next Hackathon — 
            even bigger, even better!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
