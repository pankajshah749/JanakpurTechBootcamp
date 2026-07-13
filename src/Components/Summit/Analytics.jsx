import React from "react";
const stats = [
  { label: "Speakers", value: "10+" },
  { label: "Attendees", value: "100+" },
  { label: "Sessions", value: "5+" },
];

const Analytics = () => {
  return (
    <div className="flex justify-center items-center mt-5  mb-10 gap-x-[100px]">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-blue-950 text-7xl font-bold px-5 py-3">
            {stat.value}
          </div>
          <div className="text-black text-xl font-semibold">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Analytics;
