import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
          Janakpur Tech BootCamp
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-700 hover:font-bold transition">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-700 hover:font-bold transition"
          >
            About
          </Link>
          <Link
            to="/courses"
            className="hover:text-blue-700 hover:font-bold transition"
          >
            Courses
          </Link>
          <Link
            to="/SponsorUS"
            className="hover:text-blue-700 hover:font-bold transition"
          >
            Sponsor US
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 py-4 px-6 text-gray-700 font-medium">
            <Link
              to="/"
              className="hover:text-blue-700 hover:font-bold transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-700 hover:font-bold transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/courses"
              className="hover:text-blue-700 hover:font-bold transition"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/SponsorUS"
              className="hover:text-blue-700 hover:font-bold transition"
              onClick={() => setIsOpen(false)}
            >
              Sponsor US
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
