import { useState } from "react";
import React from "react";
import {
  ChevronDown,
  ChevronUp,
  Clock3,
  Users,
  Brain,
  Mic,
  Coffee,
  Sparkles,
  Award,
} from "lucide-react";

const schedule = [
  {
    // time: "08:30 AM",
    title: "Registration & Welcome",
    type: "Networking",
    icon: Users,
    color: "bg-cyan-500",
    description:
      "Complete registration, collect summit materials, meet fellow participants, and explore sponsor booths before the opening ceremony.",
  },
  {
    // time: "09:30 AM",
    title: "Opening Ceremony",
    type: "Opening",
    icon: Sparkles,
    color: "bg-blue-600",
    description:
      "Welcome speech, summit vision, introduction of guests, and overview of the day's learning experience.",
  },
  {
    // time: "10:00 AM",
    title: "The Future of Artificial Intelligence",
    type: "Keynote",
    icon: Brain,
    color: "bg-violet-600",
    description:
      "Discover how Artificial Intelligence is transforming industries, education, healthcare, business, and society across the globe.",
  },
  {
    // time: "11:00 AM",
    title: "Panel Discussion",
    type: "Discussion",
    icon: Mic,
    color: "bg-emerald-500",
    description:
      "A panel of AI researchers, educators, and industry leaders discuss real-world applications, future trends, and opportunities in Artificial Intelligence.",
  },
  {
    // time: "12:00 PM",
    title: "Live AI Demonstration",
    type: "Workshop",
    icon: Mic,
    color: "bg-orange-500",
    description:
      "Experience live demonstrations of ChatGPT, image generation, AI assistants, coding tools, and productivity applications.",
  },
  {
    // time: "01:00 PM",
    title: "Lunch & Networking",
    type: "Networking",
    icon: Coffee,
    color: "bg-amber-600",
    description:
      "Connect with speakers, mentors, students, startups, and technology professionals while enjoying lunch.",
  },
  {
    // time: "02:00 PM",
    title: "Understanding AI",
    type: "Session",
    icon: Users,
    color: "bg-pink-600",
    description:
      "An introductory session covering Artificial Intelligence, Machine Learning, Deep Learning, LangChain, and their real-world applications.",
  },
  {
    // time: "03:00 PM",
    title: "Career Opportunities in AI",
    type: "Career",
    icon: Brain,
    color: "bg-indigo-600",
    description:
      "Explore AI careers, required skills, internships, startup opportunities, and future learning pathways.",
  },
  {
    // time: "04:30 PM",

    title: "Closing Ceremony",
    type: "Closing",
    icon: Award,
    color: "bg-red-500",
    description:
      "Certificate distribution, appreciation to speakers and sponsors, and launch of the AI community initiative.",
  },
];

export default function Agenda() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gradient-to-b from-slate-950 -mt-20 via-slate-900 to-black py-20 text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 mt-5">
          <span className="rounded-full border border-cyan-500 px-4 py-2 text-cyan-300 text-xs uppercase tracking-[3px]">
            Event Schedule
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Summit Agenda
          </h2>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base">
            A carefully designed one-day learning experience featuring keynote
            sessions, live demonstrations, networking opportunities, and
            hands-on discussions with AI experts.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-slate-700 hidden md:block"></div>

          <div className="space-y-4">
            {schedule.map((item, index) => {
              const Icon = item.icon;
              const open = active === index;

              return (
                <div
                  key={index}
                  className={`relative rounded-2xl transition-all duration-300 ${
                    open
                      ? "bg-slate-800 border border-cyan-500 shadow-lg"
                      : "bg-slate-900 border border-slate-700 hover:border-slate-500"
                  }`}
                >
                  <button
                    onClick={() => setActive(open ? -1 : index)}
                    className="w-full text-left p-5 md:p-6"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div
                        className={`hidden md:flex h-11 w-11 rounded-xl ${item.color} items-center justify-center shrink-0`}
                      >
                        <Icon size={20} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="flex items-center gap-2 text-cyan-300 text-sm font-medium">
                            <Clock3 size={15} />
                            {item.time}
                          </span>

                          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                            {item.type}
                          </span>
                        </div>

                        <h3 className="text-lg md:text-xl font-semibold mt-2">
                          {item.title}
                        </h3>
                      </div>

                      {open ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>

                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        open ? "max-h-80 mt-4" : "max-h-0"
                      }`}
                    >
                      <div className="border-t border-slate-700 pt-4">
                        <p className="text-slate-300 leading-6 text-sm md:text-base">
                          {item.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="rounded-full bg-cyan-500/20 text-cyan-300 px-3 py-1 text-xs">
                            Interactive
                          </span>

                          <span className="rounded-full bg-blue-500/20 text-blue-300 px-3 py-1 text-xs">
                            Learning
                          </span>

                          <span className="rounded-full bg-violet-500/20 text-violet-300 px-3 py-1 text-xs">
                            AI Summit
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}