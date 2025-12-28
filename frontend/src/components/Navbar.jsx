import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-7 text-white">
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a></li>
          <li><a href="#About" className="cursor-pointer hover:text-gray-400">About</a></li>
          <li><a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a></li>
          <li><a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a></li>
        </ul>

        {/* Sign Up / Logout Button */}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="hidden md:block bg-white text-gray-900 px-8 py-2 rounded-full hover:bg-gray-200 font-medium">
            Logout
          </button>
        ) : (
          <Link to="/signup">
            <button className="hidden md:block bg-white text-gray-900 px-8 py-2 rounded-full hover:bg-gray-200 font-medium">
              Sign Up
            </button>
          </Link>
        )}

        {/* Mobile Menu Button */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu Icon"
          role="button"
        />
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${showMobileMenu ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="Close Icon"
            role="button"
          />
        </div>

        {/* Mobile Navigation */}
        <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
          <li onClick={() => setShowMobileMenu(false)}>
            <a href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a>
          </li>
          <li onClick={() => setShowMobileMenu(false)}>
            <a href="#About" className="px-4 py-2 rounded-full inline-block">About</a>
          </li>
          <li onClick={() => setShowMobileMenu(false)}>
            <a href="#Projects" className="px-4 py-2 rounded-full inline-block">Projects</a>
          </li>
          <li onClick={() => setShowMobileMenu(false)}>
            <a href="#Testimonials" className="px-4 py-2 rounded-full inline-block">Testimonials</a>
          </li>

          {/* Sign Up / Logout Button */}
          {isLoggedIn ? (
            <li onClick={() => { setShowMobileMenu(false); handleLogout(); }}>
              <button className="px-4 py-2 rounded-full inline-block bg-gray-900 text-white hover:bg-gray-800">Logout</button>
            </li>
          ) : (
            <>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link to="/login" className="px-4 py-2 rounded-full inline-block text-gray-900 hover:bg-gray-100">Login</Link>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link to="/signup" className="px-4 py-2 rounded-full inline-block bg-gray-900 text-white hover:bg-gray-800">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
