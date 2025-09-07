import React from "react";

const LearnAI = () => {
  return (
    <section id="learn" className="bg-gray-50 py-20 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          What You Will Learn
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          During the <span className="font-semibold">3-month bootcamp</span>, 
          you’ll gain hands-on experience in cutting-edge{" "}
          <span className="text-blue-600 font-semibold">AI technologies</span>.  
          From fundamentals to advanced projects, we’ll guide you every step of the way.
        </p>

        {/* Learning Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
              alt="Machine Learning"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Generative AI </h3>
            <p className="mt-2 text-gray-600">
              Generative AI is a cutting-edge field of Artificial Intelligence that creates new content like text, images, music, and code.
              It empowers machines to go beyond analysis and generate creative, human-like outputs.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/10372/10372180.png"
              alt="Deep Learning"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">LangChain</h3>
            <p className="mt-2 text-gray-600">
              Dive into neural networks, computer vision, and natural 
              LangChain is a powerful framework that helps developers build applications powered by large language models (LLMs).
              It connects AI models with external data and tools, making chatbots and intelligent apps more dynamic and useful.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712130.png"
              alt="AI Tools"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">AI Tools & Projects</h3>
            <p className="mt-2 text-gray-600">
               AI Tools & Projects give you hands-on experience with real-world applications of Artificial Intelligence.
               From building chatbots and image recognition systems to predictive models, you’ll gain practical skills for your career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnAI;
