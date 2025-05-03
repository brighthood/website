import React from "react";
import {
  FaTelegram,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background dark:bg-dark-background text-darkText dark:text-dark-darkText px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">BrightHood</h2>
          <p className="text-sm text-darkText dark:text-dark-darkText">
            Empowering Ethiopia’s youth with tech skills and real-world
            development experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-secondaryText dark:text-dark-secondaryText">
            <li>
              <a href="#home" className="hover:text-dark-tertiaryText">
                Home
              </a>
            </li>
            <li>
              <a href="#Why" className="hover:text-dark-tertiaryText">
                Why
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-dark-tertiaryText">
                Courses
              </a>
            </li>
            <li>
              <a href="#Testimonial" className="hover:text-dark-tertiaryText">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-secondaryText dark:text-dark-secondaryText">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-dark-tertiaryText"
            >
              <FaTelegram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-dark-tertiaryText"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-dark-tertiaryText"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-dark-tertiaryText"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-secondaryText dark:text-dark-secondaryText mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} BrightHood. All rights reserved.
      </div>
    </footer>
  );
}
