import React from "react";

const Courses = () => {
  return (
    <div className="p-6 bg-[#fdfaf5] min-h-screen flex justify-center ">
      <div className="w-full max-w-3xl border rounded-lg shadow bg-white">
        {/* Title */}
        <h2 className="text-xl font-bold text-center py-4 border-b">
          Generative AI Bootcamp
        </h2>

        {/* Course Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left w-1/4">Weeks</th>
              <th className="border p-3 text-left">Course Module</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">Weeks 1–2</td>
              <td className="border p-3">Python Basics</td>
            </tr>
            <tr>
              <td className="border p-3">Weeks 3–4</td>
              <td className="border p-3">Advanced Python + Git</td>
            </tr>
            <tr>
              <td className="border p-3">Weeks 5–6</td>
              <td className="border p-3">AI / ML / DL / NLP Concepts</td>
            </tr>
            <tr>
              <td className="border p-3">Weeks 7–8</td>
              <td className="border p-3">Generative AI + Prompt Engineering</td>
            </tr>
            <tr>
              <td className="border p-3">Weeks 9–10</td>
              <td className="border p-3">LangChain + Streamlit</td>
            </tr>
            <tr>
              <td className="border p-3">Week 11</td>
              <td className="border p-3">RAG & Vector Databases</td>
            </tr>
            <tr>
              <td className="border p-3">Week 12</td>
              <td className="border p-3">Capstone Project</td>
            </tr>
          </tbody>
        </table>

        {/* Special Sessions */}
        <div className="p-4 text-sm">
          <p className="font-semibold text-center mb-2">
            * Special Sessions Include :
          </p>
          <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
            <ul className="list-disc list-inside">
              <li>Jupyter & Colab Workflow</li>
              <li>GitHub Collaboration</li>
              <li>Prompt Engineering Lab</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>LangChain Hands-on</li>
              <li>Vector Databases Workshop</li>
              <li>Capstone Mentorship</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
