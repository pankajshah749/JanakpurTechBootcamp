import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What are the pre-requisites to join the bootcamp?",
    answer:
      "No strict pre-requisites! Basic knowledge of programming or interest in technology is helpful, but we start from fundamentals and guide you step by step.",
  },
  {
    id: 2,
    question: "Where exactly are you located?", 
    answer: 
      "This Bootcamp is led by Janakpur Tech Bootcamp Team. The bootcamp will take place at Janak Chowk, Janakpurdham — on the 2nd floor of the former N.K Shopping Mall building. You’ll also find our banner displayed at the location for easy identification.",

  },
  {
    id: 3,
    question: "How much does it cost to attend?",
    answer:
      "Applying is Free. However if your application is accepted, there is an entry fee of NRs 8000 to join the bootcamp. We do offer few scholarships if NRs 8000 is a financial burden for you. Reach out at janakpurtechbootcamp@gmail.com.",
  },
  {
    id: 4,
    question: "What do I need to know?",
    answer:
      "You need curiosity, dedication, and willingness to learn. Basic programming skills (Python/JavaScript) are useful but not mandatory.",
  },
  {
    id: 5,
    question: "Am I qualified to apply?",
    answer:
      "Anyone with interest in Artificial Intelligence, students, professionals, or entrepreneurs, can apply regardless of background.",
  },
  {
    id: 6,
    question: "How do I sign up?",
    answer:
      "Click the 'Apply Now' button on the homepage, fill out the registration form, and our team will contact you with next steps.",
  },
  {
    id: 7,
    question: "why this Bootcamp in Janakpur?",
    answer:"Janakpur has a potential for a huge tech talent hub and thats why are setting one of our office there. With remote work, we envision a future where tech folks can work for companies all around the world (remotely from Janakpur).There are several low-income marginalized communities (including but not limited to Musahars, Dalits) nearby Janakpur and we think the access to high pay tech jobs will make a positive impact."
  },
];

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#324866] text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">FAQ</h2>
        <p className="text-lg text-gray-200 mb-10">
          Simple answers to popular questions
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-lg overflow-hidden border ${
                openId === faq.id ? "border-blue-400" : "border-gray-700"
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className={`w-full flex justify-between items-center px-6 py-4 text-left font-semibold ${
                  openId === faq.id
                    ? " text-white"
                    : " text-gray-200 hover:bg-blue-700"
                }`}
              >
                <span>
                  {faq.id}. {faq.question}
                </span>
                <span className="text-xl">
                  {openId === faq.id ? "−" : "+"}
                </span>
              </button>
              {openId === faq.id && (
                <div className="bg-blue-900 px-6 py-4 text-gray-200 text-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
