"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for dark mode preference on component mount
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);

    // Apply dark mode class to html element
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;

    // Update state
    setIsDarkMode(newDarkModeState);

    // Persist in localStorage
    localStorage.setItem("darkMode", String(newDarkModeState));

    // Toggle dark class on html element
    if (newDarkModeState) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50 
      ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}
      shadow-md transition-colors duration-300
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className={`
                  text-2xl font-bold 
                  ${isDarkMode ? "text-blue-400" : "text-blue-600"}
                `}
              >
                TripleF CMS
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {[
                { href: "/dashboard", label: "Dashboard" },
                { href: "/projects", label: "Projects" },
                { href: "/analytics", label: "Analytics" },
                { href: "/settings", label: "Settings" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`
                    px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${
                      isDarkMode
                        ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                        : "text-gray-900 hover:bg-gray-200 hover:text-gray-900"
                    }
                  `}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle and Mobile Menu Button */}
          <div className="flex items-center">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`
                mr-4 px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${
                  isDarkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                }
              `}
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className={`
                  inline-flex items-center justify-center p-2 rounded-md 
                  ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-700"
                      : "text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  }
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500
                `}
              >
                {isOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`
            sm:hidden 
            ${isDarkMode ? "bg-gray-800" : "bg-white"}
          `}
        >
          <div className="pt-2 pb-3 space-y-1">
            {[
              { href: "/dashboard", label: "Dashboard" },
              { href: "/projects", label: "Projects" },
              { href: "/analytics", label: "Analytics" },
              { href: "/settings", label: "Settings" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`
                  block px-3 py-2 rounded-md text-base font-medium
                  ${
                    isDarkMode
                      ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                      : "text-gray-900 hover:bg-gray-200"
                  }
                `}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
