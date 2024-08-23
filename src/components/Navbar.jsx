import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import ButtonNav from './ButtonNav';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-lg text-white fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center my-3">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button
            className="text-white text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`lg:flex items-center w-full lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
            <li>
              <NavLink
                to="/"
                exact
                className="block text-white px-3 py-2 rounded hover:bg-gray-600"
                activeClassName="bg-gray-100 text-gray-800 font-medium"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block text-white px-3 py-2 rounded hover:bg-gray-600"
                activeClassName="bg-gray-100 text-gray-800 font-medium"
              >
                About
              </NavLink>
            </li>
            <li className="relative group">
              <button
                className="block text-white px-3 py-2 rounded hover:bg-gray-600 focus:outline-none"
              >
                Services <i className="fa fa-caret-down"></i>
              </button>
              <ul className="absolute left-0 top-7 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <li><Link to="/services/automotive" className="block px-4 py-2 hover:bg-gray-200">Automotive</Link></li>
                <li><Link to="/services/aviation" className="block px-4 py-2 hover:bg-gray-200">Aviation</Link></li>
                <li><Link to="/services/boutique" className="block px-4 py-2 hover:bg-gray-200">Boutique</Link></li>
                <li><Link to="/services/corporate" className="block px-4 py-2 hover:bg-gray-200">Corporate</Link></li>
                <li><Link to="/services/residential" className="block px-4 py-2 hover:bg-gray-200">Residential</Link></li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block text-white px-3 py-2 rounded hover:bg-gray-600"
                activeClassName="bg-gray-100 text-gray-800 font-medium"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Button */}
        <div className={`${isOpen ? "mb-5" : "mb-0"}`}>
          <Link to="/contact">
            <ButtonNav />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
