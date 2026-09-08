import React from "react";
import deepakImage from "/images/aisummit/deepak.png";
import anjaliImage from "/images/aisummit/Anjali.jpeg";
import pankajImage from "/images/aisummit/pankajImage.jpg";
import sanjanaImage from "/images/aisummit/sanjana.jpg";

const Teams = [
  {
    name: "Anjali Gupta",
    role: "Lead Organizer & Tech Lead",
    // organization: "Neelgai - USA",
    image: anjaliImage,
  },
  {
    name: "Pankaj Sah",
    role: "Logistics & Operations Lead",
    image: pankajImage,
  },
  {
    name: "Sanjana yadav",
    role: "Marketing & Outreach Lead",
    organization: "",
    image: sanjanaImage,
  },
];

export default function Organizers() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-cyan-600 font-semibold">
            Organizing Committee
          </p>

          <h2 className="text-5xl font-bold mt-4">Meet the team</h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            A passionate team committed to planning, coordinating, and
            delivering an impactful AI Summit that inspires learning,
            innovation, and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Teams.map((team, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white overflow-hidden shadow-lg hover:-translate-y-2 transition"
            >
              <img
                src={team.image}
                alt={team.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{team.name}</h3>

                <p className="mt-2 text-cyan-600 font-semibold">{team.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
