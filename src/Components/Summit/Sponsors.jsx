import React from "react";
import { MapPin, Heart } from "lucide-react";

const sponsors = [
  {
    id: 1,
    name: "Deepak Adhikari",
    location: "North Carolina",
    // icon: "👨‍💼",
  },
  {
    id: 2,
    name: "Subash Sah",
    location: "New York",
    // icon: "👩‍💼",
  },
];

export default function Sponsors() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28 px-6">
      {/* Background Gradients */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex rounded-full border border-cyan-500 bg-cyan-500/10 px-6 py-2 text-sm uppercase tracking-[4px] text-cyan-300">
            Our Supporters
          </span>
          <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">
            Special Thanks to Our Sponsors
          </h2>
          <p className="mt-6 text-lg text-slate-300 leading-8 max-w-3xl mx-auto">
            We are grateful to these individuals for their generous support and
            belief in the AI Summit
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-3xl mx-auto">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:border-cyan-400 p-10 flex-1"
            >
              {/* Icon */}
              {/* <div className="flex items-center justify-center h-24 w-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-8 mx-auto">
                <span className="text-5xl">{sponsor.icon}</span>
              </div> */}

              {/* Name */}
              <h3 className="text-2xl font-bold text-white text-center mb-3">
                {sponsor.name}
              </h3>

              {/* Location */}
              <div className="flex items-center justify-center gap-2 text-slate-300 mb-6">
                <MapPin size={18} className="text-cyan-400 shrink-0" />
                <span>{sponsor.location}</span>
              </div>

              {/* Heart Badge */}
              <div className="flex items-center justify-center gap-2 text-cyan-300">
                <Heart size={18} className="fill-cyan-400" />
                <span className="text-sm font-semibold">
                  Supporting AI Education
                </span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 rounded-3xl transition duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
