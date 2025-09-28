import React from "react";

const feedbacks = {
  web: [
    {
      name: "Anjali Gupta",
      role: "Web Development Student",
      feedback:
        "The web development course was hands-on and practical. I built real projects and now feel confident as a developer.",
      image: "/images/anjali.png",
    },
    {
      name: "Milan Sah",
      role: "Web Development Student",
      feedback:
        "Instructors made React and modern web tooling easy to understand. My portfolio improved drastically.",
      image: "/images/milian.png",
    },
    {
      name: "Satyam Sah",
      role: "Web Development Student",
      feedback:
        "The bootcamp transformed my coding skills. From zero to building full-stack apps with React and Python!",
      image: "/images/satyam.png",
    },
    {
      name: "Rahul Gupta",
      role: "Web Development Student",
      feedback:
        "The course was well-structured and the projects were relevant. Best coding bootcamp I've attended.",
      image: "/images/rahul.jpg",
    },
    {
      name: "Sanjana Yadav",
      role: "Web Development Student",
      feedback:
        "I loved the community and support from mentors. The curriculum was up-to-date with industry trends.",
      image: "/images/sanjana.jpg",
    },
  ],
  data: [
    {
      name: "Mikey Sharma",
      role: "Data Science Student",
      feedback:
        "The Data Science course gave me practical ML skills and real-world project experience — truly career-changing!",
      image: "/images/mikey.png",
    },
    {
      name: "Divya Nayak",
      role: "Data Science Student",
      feedback:
        "Loved the focus on hands-on datasets and model building. I can confidently build and explain ML models now.",
      image: "/images/Divya.jpg",
    },
    {
      name: "Shyam Yadav",
      role: "Data Science Student",
      feedback:
        "The bootcamp made complex topics like machine learning and data analysis approachable and fun.",
      image: "/images/shyam.png",
    },
    {
      name: "Anjali Mishra",
      role: "Data Science Student",
      feedback:
        "Best decision ever! The mentors were supportive and the curriculum was up-to-date with industry needs.",
      image: "/images/anjalimishra.jpg",
    },
  ],
};

function FeedbackCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-72 sm:w-80 min-w-[16rem] mx-2 flex-shrink-0">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border border-gray-200"
      />
      <h4 className="font-semibold text-center text-gray-900">{item.name}</h4>
      <p className="text-xs sm:text-sm text-center text-gray-500 mb-2">
        {item.role}
      </p>
      <p className="text-gray-700 italic text-center text-wrap text-sm leading-snug">
        “{item.feedback}”
      </p>
    </div>
  );
}

export default function Feedback() {
  const webItems = [...feedbacks.web, ...feedbacks.web];
  const dataItems = [...feedbacks.data, ...feedbacks.data];

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <style>{`
        .marquee {
          display: inline-flex;
          white-space: nowrap;
        }
        .marquee-track {
          overflow: hidden;
          width: 100%;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .marquee-left {
          animation: marquee-left 20s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 22s linear infinite;
        }
        .marquee-track:hover .marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6  border-b-2 border-gray-200 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          What Our Students Say
        </h2>

        {/* Web Development */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
            Web Development
          </h3>
          <div className="marquee-track">
            <div className="marquee marquee-left">
              {webItems.map((item, idx) => (
                <FeedbackCard key={`web-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Data Science */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
            Data Science
          </h3>
          <div className="marquee-track">
            <div className="marquee marquee-left">
              {dataItems.map((item, idx) => (
                <FeedbackCard key={`data-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
