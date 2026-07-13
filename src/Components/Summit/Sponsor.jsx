import { Handshake, Users, Megaphone, Briefcase, Star } from "lucide-react";
import React from "react";

const tiers = [
  {
    title: "Title Sponsor",
    price: "NPR 1,00,000",
    // color: "from-cyan-500 to-blue-600",
    benefits: [
      "Logo on stage banner & all event materials",
      "Speaking opportunity",
      "Panel discussion seat",
      "Dedicated social media promotion",
    ],
  },
  {
    title: "Supporting Sponsor",
    price: "NPR 50,000",
    // color: "from-purple-500 to-pink-600",
    benefits: [
      "Logo on banners & printed materials",
      "Social media promotion",
      "Recognition during the event",
    ],
  },
  {
    title: "Community Sponsor",
    price: "NPR 25,000",
    // color: "from-emerald-500 to-green-600",
    benefits: [
      "Logo on event materials",
      "Social media mention",
      "Community appreciation",
    ],
  },
  {
    title: "In-Kind Partner",
    price: "Venue / Food / Swag",
    // color: "from-orange-500 to-red-500",
    benefits: [
      "Recognition equivalent to contribution",
      "Brand exposure",
      "Partner appreciation",
    ],
  },
];

export default function Sponsor() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}

        <div className="text-center">

          <span className="border border-cyan-500 text-cyan-300 px-5 py-2 rounded-full uppercase tracking-[4px] text-sm">
            Sponsor the Summit
          </span>

          <h1 className="text-5xl font-bold mt-6">
            Partner With Janakpur AI Summit 2026
          </h1>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto text-lg leading-8">
            Join us in building the future of Artificial Intelligence in Madhesh.
            Your sponsorship directly supports students, innovators,
            entrepreneurs, and the growing technology community while giving
            your organization valuable brand exposure.
          </p>

        </div>

      y

        <div className="mt-20">

          <h2 className="text-3xl font-bold text-center">
            Sponsorship Packages
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

            {tiers.map((tier, index) => (

              <div
                key={index}
                className="rounded-3xl border border-slate-700 bg-slate-900 overflow-hidden hover:border-cyan-500 transition"
              >

                <div className={`bg-gradient-to-r ${tier.color} p-8`}>

                  <h3 className="text-2xl font-bold">
                    {tier.title}
                  </h3>

                  <p className="text-3xl font-extrabold mt-3">
                    {tier.price}
                  </p>

                </div>

                <div className="p-8">

                  <ul className="space-y-4">

                    {tier.benefits.map((item, i) => (

                      <li key={i} className="flex gap-3">

                        <Handshake
                          size={18}
                          className="text-cyan-400 mt-1 shrink-0"
                        />

                        <span className="text-slate-300">
                          {item}
                        </span>

                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Organizer */}

        <div className="mt-28 bg-slate-900 rounded-3xl border border-slate-700 p-12 text-center">

          <h2 className="text-3xl font-bold">
            Organized by Janakpur Tech Bootcamp
          </h2>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto leading-8">
            Janakpur Tech Bootcamp is an initiative of Neelgai, a US-based
            technology company with teams in Kathmandu and Janakpur. The team
            successfully organized Janakpur's first Tech Hackathon and first
            Tech Bootcamp, empowering dozens of aspiring technology
            professionals.
          </p>

        </div>

        {/* CTA */}

        <div className="mt-24 text-center">

          <h2 className="text-4xl font-bold">
            Become a Sponsor
          </h2>

          <p className="text-slate-300 mt-5 max-w-2xl mx-auto mb-10">
            Help build the future of Artificial Intelligence in Madhesh while
            showcasing your organization to the region's brightest minds.
          </p>


          <a href="mailto:anakpurtechbootcamp@gmail.com" className=" bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl text-lg font-semibold">
            <button className="cursor-pointer" >
            Contact Us
            </button>
          </a>

        </div>

      </div>
    </section>
  );
}