import React from "react";

export default function SponsorUS() {
  return (
    <div className="bg-gray-50 text-gray-800 px-6 md:px-16 py-10">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">
        Sponsorship Proposal
      </h1>

      {/* Intro */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Janakpur Tech Bootcamp: AI Edition 2025
        </h2>
        <p className="leading-relaxed text-gray-700">
          We are proud to present the{" "}
          <span className="font-semibold">Janakpur Tech Bootcamp: AI Edition</span>, 
          a 3-month immersive training program designed to empower youth in Madhes 
          with practical Artificial Intelligence skills. This bootcamp builds upon the 
          success of last year’s Janakpur Tech Bootcamp. With the growing importance of AI 
          in the global economy, our mission is to decentralize technical knowledge, create 
          opportunities beyond Kathmandu, and equip aspiring students—especially women and 
          underrepresented groups—with career-ready AI expertise.
        </p>
      </section>

      {/* Vision & Goals */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Vision & Goals</h2>
        <p className="font-semibold">■ Vision:</p>
        <p className="mb-3">
          Build a strong, job-ready AI talent pool in Janakpur that contributes to global innovation.
        </p>
        <p className="font-semibold">■ Goals:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Deliver hands-on training in Generative AI, LangChain, and AI applications.</li>
          <li>Improve job readiness with projects, mentorship, and career guidance.</li>
          <li>Connect participants to global job markets and freelancing opportunities.</li>
        </ul>
      </section>

      {/* Curriculum */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Curriculum Highlights</h2>
        <p className="font-semibold mb-2">Track: AI for the Real World</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Generative AI & Prompt Engineering</li>
          <li>ChatGPT / LLM APIs</li>
          <li>Python, NumPy, Pandas</li>
          <li>Scikit-learn (Regression, Classification, Clustering)</li>
          <li>LangChain & Retrieval-Augmented Generation (RAG)</li>
          <li>Mini Projects & Capstones</li>
        </ul>
      </section>

      {/* Financial Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Financial Overview</h2>
        <div className="overflow-x-auto">
         <table className="w-full border border-gray-800 text-left border-collapse">
  <thead>
    <tr className="bg-blue-800 text-white">
      <th className="px-4 py-2 border-r border-gray-500">Item</th>
      <th className="px-4 py-2">Total Cost (NPR)</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b">
      <td className="px-4 py-2 border-r border-gray-500">Rent</td>
      <td className="px-4 py-2">120,000</td>
    </tr>
    <tr className="border-b">
      <td className="px-4 py-2 border-r border-gray-500">Instructors & Coordinator Salary</td>
      <td className="px-4 py-2">220,000</td>
    </tr>
    <tr className="border-b">
      <td className="px-4 py-2 border-r border-gray-500">Utilities</td>
      <td className="px-4 py-2">80,000</td>
    </tr>
    <tr className="border-b">
      <td className="px-4 py-2 border-r border-gray-500">Electronics (Projector, Speaker, Whiteboard)</td>
      <td className="px-4 py-2">60,000</td>
    </tr>
    <tr className="border-b">
      <td className="px-4 py-2 border-r border-gray-500">Office Supplies</td>
      <td className="px-4 py-2">100,000</td>
    </tr>
    <tr className="border-b">
      <td className="px-4 py-2 border-r border-gray-500">Miscellaneous</td>
      <td className="px-4 py-2">160,000</td>
    </tr>
    <tr className="font-bold bg-blue-800 text-white">
      <td className="px-4 py-2 border-r border-gray-500">Total Cost</td>
      <td className="px-4 py-2">740,000</td>
    </tr>
  </tbody>
</table>

        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Sponsorship Opportunities</h2>

        <div className="mb-6">
          <p className="font-semibold">■ Platinum Sponsor (NPR 500,000+)</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Title Sponsor recognition</li>
            <li>Logo on website, banners, flyers, certificates, and press releases</li>
            <li>Keynote speech opportunity</li>
            <li>Access to participant resumes & portfolios</li>
            <li>Option to host a workshop or seminar</li>
            <li>Media coverage mention in all press & interviews</li>
            <li>Special gifts: Mithila paintings + Janakpur Museum tickets</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-semibold">■ Gold Sponsor (NPR 300,000 – 499,999)</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Prominent logo on website & marketing materials</li>
            <li>Option to host a session/workshop</li>
            <li>Access to participant resumes for recruitment</li>
            <li>Media coverage in selected press</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">■ Silver Sponsor (NPR 100,000 – 299,999)</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Logo on website & promotional materials</li>
            <li>Networking opportunities with participants</li>
            <li>Mention in selected media content</li>
          </ul>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Why Partner With Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Direct Impact:</span> Support underrepresented youth in AI and create real career pathways.
          </li>
          <li>
            <span className="font-semibold">Brand Visibility:</span> Recognition across Janakpur, social media, and press.
          </li>
          <li>
            <span className="font-semibold">Talent Access:</span> First-hand access to trained AI talent for internships or hiring.
          </li>
          <li>
            <span className="font-semibold">Social Good:</span> Strengthen the tech ecosystem in Madhesh and promote inclusivity.
          </li>

            <h2 className="text-2xl font-semibold text-blue-700  mt-5 mb-2">Contact Us</h2>
            <ul className="list-disc list-inside space-y-2">

           <li>
            <span className="font-semibold">Contact:</span>  janakpurtechbootcamp@gmail.com
          </li>
           <li>
            <span className="font-semibold">Phone:</span> 9804885027
          </li>
          </ul>
        </ul>
      </section>
    </div>
  );
}
