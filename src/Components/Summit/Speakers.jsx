import React from "react";

const speakers = [
  {
    name: "Deepak Sah",
    role: "Co-founder",
    organization: "Neelgai",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  },
  {
    name: "Bibek Sah",
    role: "Entrepreneur",
    organization: "Nexalaris",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
  },
  {
    name: "Coming Soon",
    role: "Industry Expert",
    organization: "Innovation Partner",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
  },
  {
    name: "Coming Soon",
    role: "AI Engineer",
    organization: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
  },
];

export default function Speakers() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
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