import React from "react";

const instructors = [
  {
    name: "Nawaj Sarif",
    role: "Lead Instructor",
    image: "/images/nawaj.png",
    bio: "Nawaj Sarif is an Artificial Intelligence enthusiast and instructor with a strong background in Machine Learning, Deep Learning, and Data Science. With hands-on experience in developing AI-powered applications and conducting research in cutting-edge technologies, he is passionate about teaching and mentoring aspiring learners. At Janakpur AI Bootcamp 2025, Nawaj guides participants through real-world AI projects, helping them build the skills needed to succeed in the fast-evolving tech industry.",
  },
  {
    name: "Suruchi Shah",
    role: "Marketing Coordinator",
    image: "/images/suruchi.jpg",
    bio: "As the Marketing Coordinator for Neelgai, I manage comprehensive marketing strategies to promote our tech services and bootcamps. I work closely with prospective bootcamp applicants, helping them navigate the application process and sharing the bootcamp’s value. My goal is to ensure that our marketing efforts effectively communicate the benefits of joining our programs and to support students in their journey to learn and grow in the tech industry.",
  },
  {
    name: "Pankaj Sah",
    role: "In-person Coordinator",
    image: "/images/pankajImage.jpg",
    bio: "Pankaj Sah, the Coordinator for Janakpur Tech BootCamp, is responsible for organizing and managing the Janakpur AI Bootcamp 2025. With a background in project management and a passion for technology education, Pankaj ensures that the bootcamp runs smoothly and that participants have a valuable learning experience. He coordinates logistics, liaises with instructors, and supports students throughout the program.",
  },
  {
    name: "Sweta Shresta",
    role: "React Instructor",
    image: "/images/sweta.jpg",
    bio: "Sweta Shresta is a skilled React instructor with a deep understanding of front-end development and user interface design. With extensive experience in building dynamic web applications using React, she brings practical knowledge and real-world insights to her teaching. At Janakpur AI Bootcamp 2025, Sweta focuses on helping students master React fundamentals, component-based architecture, and best practices for creating responsive and engaging web applications.",
  },
  {
    name: "Prashanna Paudel",
    role: "Machine Learning Instructor ",
    image: "/images/prashanna.jpg",
    bio: "Prashanna Paudel is an experienced Machine Learning instructor with a strong background in data science and AI technologies. With hands-on experience in developing machine learning models and algorithms, he is passionate about sharing his knowledge with aspiring learners. At Janakpur AI Bootcamp 2025, Prashanna focuses on teaching core machine learning concepts, practical implementation techniques, and real-world applications to help students build a solid foundation in the field.",   
  },
  {
    name:"Shivam Kumar Gupta",
    role: "Deep Learning Instructor",
    image:"/images/shivam.png",
    bio: "Shivam Kumar Gupta is a dedicated Deep Learning instructor with expertise in neural networks, computer vision, and natural language processing. With a strong academic background and practical experience in developing deep learning models, he is committed to helping students grasp complex concepts and apply them effectively. At Janakpur AI Bootcamp 2025, Shivam focuses on teaching advanced deep learning techniques, model optimization, and real-world applications to equip students with the skills needed to excel in the AI field.",
  },
];

function Instructor() {
  return (
    <section className="bg-[#FFFCF7] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center md:text-left">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6  sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg transition"
            >

              {/* Profile Image */}
              <div className = "flex items-center gap-x-5">
              
           
      
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover flex-shrink-0"
              />
             

              {/* Text Info */}
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {instructor.name}
                </h3>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">
                  {instructor.role}
                </p>
                </div>
               
               
              </div>
              <div className = " mt-4 ">
                  <p className="text-gray-700 text-sm sm:text-base p-2">
                  {instructor.bio}
                </p>
              </div>
              
               
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instructor;
