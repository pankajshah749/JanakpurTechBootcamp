import React from "react";
// import pankajImage from "src/assets/images/pankajImage.jpg"; // Ensure the path is correct
const instructors = [
    {
        name: "Nawaj sarif",
        role: "Lead Instructor",
        image: "/images/nawaj.png", 
        bio: "Nawaj Sarif is an Artificial Intelligence enthusiast and instructor with a strong background in Machine Learning, Deep Learning, and Data Science. With hands-on experience in developing AI-powered applications and conducting research in cutting-edge technologies, he is passionate about teaching and mentoring aspiring learners. At Janakpur AI Bootcamp 2025, Nawaj guides participants through real-world AI projects, helping them build the skills needed to succeed in the fast-evolving tech industry."
    },
    {
    name: "Suruchi Shah",
    role: "Marketing Coordinator",
    image: "/images/suruchi.jpg", // Replace with real image
    bio: "As the Marketing Coordinator for Neelgai, I manage comprehensive marketing strategies to promote our tech services and bootcamps. I work closely with prospective bootcamp applicants, helping them navigate the application process and sharing the bootcamp’s value. My goal is to ensure that our marketing efforts effectively communicate the benefits of joining our programs and to support students in their journey to learn and grow in the tech industry."
  },
  {
    name: "Pankaj Sah",
    role: "Bootcamp Coordinator",
    image: "/images/pankajImage.jpg", 
    bio: "Pankaj sah, the Bootcamp Coordinator for Neelgai, is responsible for organizing and managing the Janakpur AI Bootcamp 2025. With a background in project management and a passion for technology education, Pankaj ensures that the bootcamp runs smoothly and that participants have a valuable learning experience. He coordinates logistics, liaises with instructors, and supports students throughout the program."
  },
  {
    name: "Sweta Shresta ",
    role: "React Instructor",
    image: "/images/swetashresta.jpg", 
    bio: "Sweta Shresta is a skilled React instructor with a deep understanding of front-end development and user interface design. With extensive experience in building dynamic web applications using React, she brings practical knowledge and real-world insights to her teaching. At Janakpur AI Bootcamp 2025, Sweta focuses on helping students master React fundamentals, component-based architecture, and best practices for creating responsive and engaging web applications."
  },
  
];

function Instructor() {
  return (
    <section className="bg-[#FFFCF7] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Meet Our Team</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-6 hover:shadow-lg transition"
            >
              {/* Profile Image */}
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              
              {/* Text Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-900">{instructor.name}</h3>
                <p className="text-gray-600 mb-3">{instructor.role}</p>
                <p className="text-gray-700">{instructor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instructor;
