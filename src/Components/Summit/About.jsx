import React from "react";
import {
  Brain,
  Users,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI Keynotes",
    desc: "Learn from AI researchers, engineers, and innovators shaping tomorrow.",
  },
  {
    icon: GraduationCap,
    title: "Practical Learning",
    desc: "Real-world AI demonstrations, use cases, and hands-on insights.",
  },
  {
    icon: Users,
    title: "Networking",
    desc: "Connect with students, educators, startups, and industry leaders.",
  },
  {
    icon: Sparkles,
    title: "Responsible AI",
    desc: "Explore ethics, governance, digital inclusion, and future opportunities.",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-cyan-50 py-28">

      {/* Background Blur */}

      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-400/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full border border-cyan-500 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-cyan-700">

              About AI Summit Janakpur

            </span>

            <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-slate-900">

              Building the Future of
              <span className="block text-cyan-600">
                AI Education in Nepal
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              AI Summit Janakpur 2026 is a flagship educational conference
              organized by JanakpurTech Bootcamp to empower students,
              educators, innovators, entrepreneurs, and professionals with
              practical AI knowledge, meaningful connections, and opportunities
              to shape Nepal's digital future.

            </p>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-12">

              <div>

                <h3 className="text-4xl font-black text-cyan-600">

                  500+

                </h3>

                <p className="mt-2 text-gray-600">

                  Participants

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-cyan-600">

                  15+

                </h3>

                <p className="mt-2 text-gray-600">

                  Speakers

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-cyan-600">

                  8+

                </h3>

                <p className="mt-2 text-gray-600">

                  Sessions

                </p>

              </div>

            </div>

            <button className="mt-12 flex items-center gap-3 rounded-xl bg-cyan-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-700">

              Learn More

              <ArrowRight size={20} />

            </button>

          </div>

          {/* Right */}

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200"
              alt=""
              className="rounded-[40px] shadow-2xl"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-10 -left-10 rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-2xl border">

              <p className="text-sm uppercase tracking-[3px] text-cyan-600">

                Our Mission

              </p>

              <h3 className="mt-3 text-2xl font-bold">

                Democratizing AI Education

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                Making Artificial Intelligence education accessible,
                practical, and inclusive for every student across
                Janakpur and the Madhesh region.

              </p>

            </div>

          </div>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-28">

          {highlights.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group rounded-3xl bg-white p-8 shadow-lg border hover:-translate-y-3 hover:shadow-2xl transition duration-300"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">

                  <Icon size={32} className="text-white" />

                </div>

                <h3 className="mt-8 text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  {item.desc}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}