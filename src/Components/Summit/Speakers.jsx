import React from "react";
import deepakImage from "/images/aisummit/deepak.png"
import bibekImage from "/images/aisummit/bibek.jpeg"
import mikeyImage from "/images/aisummit/mikey.png"
import amardeepImage from "/images/aisummit/Amardeep.png"



const speakers = [
  {
    name: "Deepak Sah",
    role: "Co-founder",
    organization: "Neelgai - USA",
    image: deepakImage,
     
  },
  {
    name: "Bibek Sah",
    role: "CEO",
    organization: "Nexalaris - Janakpur",
    image:
      bibekImage,
  },
   {
    name: "Mikey Sharma",
    role: "Software Engineer",
    organization: "Neelgai",
    image:
      mikeyImage,
  },
  {
    name: "Amardeep Soni",
    role: "Software Developer",
    organization: "Izon Tech Solutions - USA",
    image:
      amardeepImage,
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

          <h2 className="text-5xl font-bold mt-4">
            Learn From Experts
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            AI Summit Janakpur will bring together researchers,
            educators, entrepreneurs, and technology leaders
            to share practical knowledge and real-world experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white overflow-hidden shadow-lg hover:-translate-y-2 transition"
            >

              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {speaker.name}
                </h3>

                <p className="mt-2 text-cyan-600 font-semibold">
                  {speaker.role}
                </p>

                <p className="text-gray-500 mt-2">
                  {speaker.organization}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}