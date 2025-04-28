import React, { useState } from "react";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Button from "./ui/Button";
import { MdOutlineWbSunny, MdModeNight } from "react-icons/md";
import useDarkMode from "../hooks/useDarkMode";

export default function NavBar() {
  const [showMobile, setShowMobile] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const navLinks = ["Home", "Why", "Courses", "Testimonial", "About"];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 text-darkText dark:text-dark-darkText bg-background dark:bg-dark-background shadow-lg dark:shadow-dark-shadowHeavy dark:shadow-md  transition-colors duration-300">
      {/* Upper Banner */}
      <div className="w-full bg-info dark:bg-dark-info  text-center text-xs sm:text-sm py-2 px-4 shadow-md dark:bg-dark.primary">
        🔥 <span className="font-semibold"> 50% ቅናሽ - የተገደበ ጊዜ ብቻ! </span> አሁን
        ይመዝገቡ እና ከማንኛውም ኮርስ ግማሽ ያግኙ። ቅናሹ በ{" "}
        <span className="underline">24 ሰዓታት </span>ውስጥ ያበቃል !🚀
      </div>

      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto px-3 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex items-center gap-6 font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-primary dark:hover:text-dark-primary cursor-pointer transition"
            >
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}

          {/* Theme Toggle */}
          <div onClick={toggleDarkMode} className="size-5 cursor-pointer">
            {isDarkMode ? (
              <MdOutlineWbSunny className="text-xl font-bold" />
            ) : (
              <MdModeNight className="text-xl font-bold" />
            )}
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-2">
            <Button variant="outlined" size="md">
              Log in
            </Button>
            <Button variant="contained" color="cta" size="md">
              Join Now
            </Button>
          </div>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div
          className="sm:hidden text-3xl cursor-pointer flex gap-1 items-center justify-center z-50"
          onClick={() => setShowMobile(!showMobile)}
        >
          {/* Theme Toggle */}
          <div onClick={toggleDarkMode} className="size-5 cursor-pointer">
            {isDarkMode ? (
              <MdOutlineWbSunny className="text-xl font-bold" />
            ) : (
              <MdModeNight className="text-xl font-bold" />
            )}
          </div>
          {showMobile ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {showMobile && (
        <div className="sm:hidden absolute top-16 left-0 w-full h-screen bg-white dark:bg-dark-background flex flex-col items-center justify-center gap-8 transition-all duration-300">
          {navLinks.map((link) => (
            <li
              key={link}
              className="text-xl font-semibold text-darkText dark:text-dark-darkText hover:text-primary dark:hover:text-dark-primary cursor-pointer list-none"
            >
              {link}
            </li>
          ))}
          <div className="flex flex-col gap-4">
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
