import React from "react";
import { Link } from "react-router-dom";
import { GiMuscleUp } from "react-icons/gi";
const Navbar = () => {
  return (
    
    <nav className="bg-black text-white flex justify-center items-center py-6">
        
      <ul className="flex space-x-10 uppercase text-sm font-bold tracking-wider">
      <div className='flex gap-2'>
            <div className='my-1 text-xl'>

            <GiMuscleUp />
            </div>
      <h1 className="hover:text-gray-400 text-yellow-400">Best Life</h1>
        </div>
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/who-we-are" className="hover:text-gray-400">Who We Are</Link>
        </li>
        <li>
          <Link to="/meet-the-team" className="hover:text-gray-400">Meet The Team</Link>
        </li>
        <li>
          <Link to="/classes" className="hover:text-gray-400">Classes</Link>
        </li>
        <li>
          <Link to="/memberships" className="hover:text-gray-400">Memberships</Link>
        </li>
        {/* Contact Button */}
        <li>
          <Link to="/contact" className="bg-yellow-400 text-black px-4 py-2">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
