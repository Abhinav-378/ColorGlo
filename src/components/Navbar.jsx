import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import ButtonNav from "./ButtonNav";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (event) => {
    event.stopPropagation(); // Prevent event from propagating to document
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside the navigation menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-lg text-white fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-3 md:px-1">
        {/* Logo */}
        <div className="flex items-center my-3">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Button for Mobile */}
        <Link to="/contact">
          <div className="lg:hidden">
            <ButtonNav />
          </div>
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-white text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>

        {/* Navigation Links and Button for Desktop */}
        <div
          ref={menuRef}
          className={`lg:flex items-center w-full lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* Navigation Links */}
          <ul className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded ${
                    isActive
                      ? "bg-gray-100 text-gray-800 font-medium"
                      : "text-white hover:bg-gray-600"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded ${
                    isActive
                      ? "bg-gray-100 text-gray-800 font-medium"
                      : "text-white hover:bg-gray-600"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li className="relative group">
              <button className="block text-white px-3 py-2 rounded hover:bg-gray-600 focus:outline-none">
                Services <i className="fa fa-caret-down"></i>
              </button>
              <ul className="absolute left-0 top-7 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <li>
                  <Link
                    to="/services/automotive"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={closeMenu}
                  >
                    Automotive
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/aviation"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={closeMenu}
                  >
                    Aviation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/boutique"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={closeMenu}
                  >
                    Boutique
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/corporate"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={closeMenu}
                  >
                    Corporate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/residential"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={closeMenu}
                  >
                    Residential
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 mb-3 md:mb-0 rounded ${
                    isActive
                      ? "bg-gray-100 text-gray-800 font-medium"
                      : "text-white hover:bg-gray-600"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Button for Desktop */}
        <Link to="/contact">
          <div className="hidden lg:block">
            <ButtonNav />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
