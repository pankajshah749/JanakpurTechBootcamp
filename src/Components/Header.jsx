import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
       
        <div className="text-3xl font-bold text-blue-900">Janakpur Tech BootCamp</div>
        
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">





          <Link to = "/">
          <div className="hover:text-blue-700 hover:font-bold transition duration-200">
          Home
            </div>
          </Link>




          <Link to = "/about">
          <div className="hover:text-blue-700 hover:font-bold transition duration-200">
          About
            </div>
          </Link>


          <Link to = "/courses">
          <div className="hover:text-blue-700 hover:font-bold transition duration-200">
          Courses
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
