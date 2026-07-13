import React from "react";
import SummitHero from "./Summit/Home";
import Analytics from "./Summit/Analytics";
import About from "./Summit/About";
import WhyAttend from "./Summit/WhyAttend";
import Agenda from "./Summit/Agenda";
import Speakers from "./Summit/Speakers";

const AISummit = () => {
  return (
    <main className="bg-white text-gray-900">
      <SummitHero />
      <Analytics />
      <WhyAttend />
      <Agenda />
      <Speakers />
    </main>
  );
};

export default AISummit;
