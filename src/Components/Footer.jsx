import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"; // npm install lucide-react

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        {/* Left: Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white">AI Bootcamp</h2>
          <p className="mt-4 text-gray-400 text-sm">
            A 3-month immersive program in Janakpur to learn Artificial Intelligence, 
            Machine Learning, and Deep Learning with hands-on projects and expert mentors.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            
            <Link to = "/about">
            <div className="hover:text-blue-400">
            About
            </div>
            </Link>




            <li><a href="https://forms.gle/1LarQabBXYhyBXtCA" className="hover:text-blue-400">Apply</a></li>
            <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
          </ul>
        </div>

        {/* Right: Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm">📍  Janakchowk, Janakpur</p>
          <p className="text-gray-400 text-sm">📧 janakpurtechbootcamp@gmail.com</p>
          <p className="text-gray-400 text-sm">📞 +977-9804885027</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400"><Facebook /></a>
            <a href="#" className="hover:text-blue-400"><Twitter /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            <a href="mailto:info@aibootcamp.com" className="hover:text-blue-400"><Mail /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} AI Bootcamp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
