import React, { useState } from "react";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Button from "./ui/Button";

export default function NavBar() {
  const [showMobile, setShowMobile] = useState(false);

  const navLinks = ["Home", "Why", "Courses", "Price", "Testimonial", "About"];

  return (
    <nav className="w-full shadow-md fixed top-0 left-0  z-50">
      {/* uper navbar */}
      <div className="w-full bg-primary text-white text-center text-sm py-2 px-4 shadow-md">
        🔥 <span className="font-semibold">50% OFF — Limited Time Only!</span>{" "}
        Enroll now and get half off any course. Offer ends in🚀
        <span className="underline">24 hours</span>!
      </div>

      {/* Container */}
      <div className="max-w-7xl bg-slate-100 mx-auto px-3 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center gap-6 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-blue-600 cursor-pointer transition"
            >
              {/* <NavLink>{link}</NavLink> */}
              {link}
            </li>
          ))}
          <div className="flex gap-2 flex-nowrap">
            <Button variant="outlined" size="md">
              Log in
            </Button>
            <Button variant="contained" color="primary" size="md">
              Get Started
            </Button>
          </div>
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="sm:hidden text-3xl cursor-pointer z-50"
          onClick={() => setShowMobile(!showMobile)}
        >
          {showMobile ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobile && (
        <div className="sm:hidden absolute top-16 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 transition-all duration-300">
          {navLinks.map((link) => (
            <li
              key={link}
              className="text-xl font-semibold text-gray-700 hover:text-blue-600 cursor-pointer list-none"
            >
              {link}
            </li>
          ))}
          <div className="flex  gap-4">
            <Button variant="outlined" size="sm">
              Log in
            </Button>
            <Button variant="contained" color="primary" size="md">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
