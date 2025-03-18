import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiMuscleUp } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <GiMuscleUp className="text-xl" />
          <h1 className="text-yellow-400 font-bold text-lg">Best Life</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10 uppercase text-sm font-bold tracking-wider">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/who-we-are" className="hover:text-gray-400">Who We Are</Link></li>
          <li><Link to="/meet-the-team" className="hover:text-gray-400">Meet The Team</Link></li>
          <li><Link to="/classes" className="hover:text-gray-400">Classes</Link></li>
          <li><Link to="/memberships" className="hover:text-gray-400">Memberships</Link></li>
          <li>
            <Link to="/contact" className="bg-yellow-400 text-black px-4 py-2">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col space-y-4 mt-4 text-center uppercase text-sm font-bold">
          <li><Link to="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/who-we-are" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Who We Are</Link></li>
          <li><Link to="/meet-the-team" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Meet The Team</Link></li>
          <li><Link to="/classes" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Classes</Link></li>
          <li><Link to="/memberships" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Memberships</Link></li>
          <li>
            <Link
              to="/contact"
              className="bg-yellow-400 text-black px-4 py-2 inline-block"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
