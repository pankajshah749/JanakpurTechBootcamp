import React from "react";
import { MapPin, Heart, Sparkles } from "lucide-react";

const sponsors = [
  {
    id: 1,
    name: "Deepak Adhikari",
    location: "North Carolina",
    image: null,
  },
  {
    id: 2,
    name: "Subash Sah",
    location: "New York",
    image: null,
  },
];

const company = {
  name: "SecurityPal",
  location: "Kathmandu, Nepal",
  logo: "images/aisummit/securitypal.png",
};

export default function Sponsors() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28 px-6">
      {/* Background Gradients */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex rounded-full bg-cyan-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-cyan-300">
            Sponsor Spotlight
          </span>
          <h2 className="mt-8 text-4xl md:text-5xl font-black text-white">
            Personal Sponsors & Company Support
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-300 leading-7 max-w-3xl mx-auto">
            Celebrating the personal supporters who make this AI Summit
            possible, followed by our company partner.
          </p>
        </div>

        {/* Personal Sponsors */}
        <div className="grid gap-6 lg:grid-cols-2 mb-10 ">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.id}
              className="sponsor-float rounded-4xl  p-5 border-2"
              style={{ animationDelay: `${index * 120}ms` }}
            >
           

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {sponsor.name}
                </h3>
                {/* <p className="text-cyan-300 font-semibold mb-4">
                  Personal Sponsor
                </p> */}
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-slate-300 text-sm">
                  <MapPin size={18} className="text-cyan-300" />
                  {sponsor.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logo */}
        <div className="mx-auto max-w-md rounded-4xl p-8 sponsor-float delay-200">
          <div className="flex flex-col items-center gap-5 text-center">
            {company.logo ? (
              <img
                src={company.logo}
                alt={company.name}
                className="mx-auto h-36 w-4xl logo-pulse"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-lg text-3xl text-white">
                {company.name[0]}
              </div>
            )}

            <div>
              <h3 className="text-2xl font-bold text-white">{company.name}</h3>
              <p className="mt-1 text-cyan-300 text-sm flex items-center justify-center gap-1">
                <MapPin size={16} />
                {company.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
