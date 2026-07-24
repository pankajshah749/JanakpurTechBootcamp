import React from "react";
import deepakImage from "/images/aisummit/deepak.png";
import bibekImage from "/images/aisummit/bibek.jpeg";
import mikeyImage from "/images/aisummit/mikey.png";
import amardeepImage from "/images/aisummit/Amardeep.png";
import raviImage from "/images/aisummit/ravikumar.png";
import bibkeThapaImage from "/images/aisummit/bibekthapa.png";
import kunalSahImage from "/images/aisummit/kunal.jpeg";
import satyendraImage from "/images/aisummit/satyendra.jpeg"

const speakers = [
  {
    name: "Deepak Sah",
    role: "Co-founder",
    organization: "Neelgai",
    image: deepakImage,
  },
  {
    name: "Bibek Sah",
    role: "CEO",
    organization: "Nexalaris",
    image: bibekImage,
  },
  {
    name: "Ravi Kumar",
    role: "Senior Program Officer",
    organization: "World Bank",
    image: raviImage,
  },
  {
    name: "Mikey Sharma",
    role: "Software Engineer",
    organization: "Neelgai ",
    image: mikeyImage,
  },
  {
    name: "Amardeep Soni",
    role: "Software Developer",
    organization: "Izon Tech Solutions",
    image: amardeepImage,
  },
  {
    name: "Bibek Thapa",
    role: "AI Engineer",
    organization: "IArnold IT Systems GmbH & Co. KG",
    image: bibkeThapaImage,
  },
    {
    name: "Kunal Sah",
    role: "Founder & CEO",
    organization: "Hireshore , TalentSathi",
    image: kunalSahImage,
  },
   {
    name: "Satyendra Sah",
    role: "Software Engineer",
    organization: "TCS",
    image: satyendraImage,
  },
];

export default function Speakers() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[5px] text-cyan-600 font-semibold">
            Featured Speakers
          </p>

          <h2 className="text-5xl font-bold mt-4">Learn From Experts</h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            AI Summit Janakpur will bring together researchers, educators,
            entrepreneurs, and technology leaders to share practical knowledge
            and real-world experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="fade-up rounded-3xl bg-white overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{speaker.name}</h3>

                <p className="mt-2 text-cyan-600 font-semibold">
                  {speaker.role}
                </p>

                <p className="text-gray-500 mt-2">{speaker.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
