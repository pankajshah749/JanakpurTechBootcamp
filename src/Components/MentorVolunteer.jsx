import React from "react";

export default function MentorVolunteer() {
  return (
    <section className="bg-gray-50 pb-12">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Want to mentor at Janakpur Tech Bootcamp: AI Edition 2025?
        </h2>
        <p className="text-gray-700 mb-6">
          Fill out this short volunteer form and share your knowledge with aspiring learners.
        </p>
        <a
          href="https://forms.gle/5MiKBvumJkJtHHF3A"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition"
        >
          Fill Volunteer Form
        </a>
      </div>
    </section>
  );
}
