import React from "react";
import {
  GraduationCap,
  Users,
  Brain,
  Briefcase,
  Rocket,
  Globe,
  ArrowRight,
} from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Learn from Experts",
    desc: "Hear directly from AI researchers, educators, and industry leaders sharing real-world insights and future trends.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Brain,
    title: "Explore AI",
    desc: "Discover how Artificial Intelligence is transforming education, healthcare, agriculture, governance, and business.",
    color: "from-violet-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "Build Your Network",
    desc: "Meet students, professionals, startups, researchers, and technology communities from across Nepal.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    desc: "Learn about AI careers, internships, entrepreneurship, and future opportunities in the global technology industry.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Rocket,
    title: "Live Demonstrations",
    desc: "Experience AI tools, generative AI, coding assistants, robotics, and real-world applications in action.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Globe,
    title: "Join the Community",
    desc: "Become part of Janakpur's growing AI ecosystem and continue learning long after the summit.",
    color: "from-sky-500 to-cyan-500",
  },
];

export default function WhyAttend() {
  const [activeCard, setActiveCard] = React.useState(null);
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16">
    

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
       

        <div className="text-center">
          <span className="inline-flex rounded-full border border-cyan-500 bg-cyan-500/10 px-6 py-2 text-sm uppercase tracking-[4px] text-cyan-300">
            Why Attend AI Summit
          </span>

          <h2 className="mt-8 text-5xl md:text-4xl font-black text-white">
            More Than a Conference
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-8 max-w-3xl mx-auto">
            AI Summit Janakpur is designed to inspire, educate, and connect
            future innovators through expert talks, practical learning,
            networking opportunities, and community collaboration.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-6 mt-20 md:grid-cols-2 xl:grid-cols-3 items-start">
          {features.map((item, index) => {
            const Icon = item.icon;

            const expanded = activeCard === index;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:border-cyan-400"
              >
                <button
                  // onClick={() => setActiveCard(expanded ? null : index)}
                  className="w-full text-left p-7"
                >
                  {/* Top */}

                  <div className="flex justify-between items-center">
                    <div
                      className={`h-16 w-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color}`}
                    >
                      <Icon size={30} className="text-white" />
                    </div>

                  
                  </div>

                  {/* Title */}

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* Small Preview */}

                  <p className="mt-3 text-slate-400 ">
                    {item.desc}
                  </p>

             
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-[40px] border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-12 text-center backdrop-blur">
          <h3 className="text-4xl font-bold text-white">
            Ready to Shape the Future with AI?
          </h3>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            Join students, educators, innovators, and technology leaders for a
            transformative day of learning, networking, and inspiration.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a href="https://luma.com/kav3l6sb">
            <button  className="rounded-xl bg-cyan-500 px-8 py-4 cursor-pointer text-lg font-semibold text-white transition hover:bg-cyan-600">
              Register Now
            </button>
            </a>

            {/* <button className="rounded-xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10">
              View Agenda
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
