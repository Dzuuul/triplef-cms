"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDarkModeStore } from "../store/darkModeStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  useEffect(() => {
    // Apply dark mode class on initial load
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`
                text-2xl font-bold tracking-tight
                ${isDarkMode ? "text-blue-400" : "text-blue-600"}
              `}
            >
              TripleF CMS
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {[
              { href: "/dashboard", label: "Dashboard" },
              { href: "/content", label: "Content" },
              { href: "/users", label: "Users" },
              { href: "/settings", label: "Settings" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`
                  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${
                    isDarkMode
                      ? "hover:bg-gray-700 hover:text-white"
                      : "hover:bg-gray-100 hover:text-gray-900"
                  }
                  ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-black"
                  }
                `}
              >
                {label}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`
                p-2 rounded-full transition-colors duration-300
                ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }
              `}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className={`
                inline-flex items-center justify-center p-2 rounded-md
                ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-700"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-200"
                }
              `}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { href: "/dashboard", label: "Dashboard" },
                { href: "/content", label: "Content" },
                { href: "/users", label: "Users" },
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
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`
                  w-full text-left px-3 py-2 rounded-md text-base font-medium
                  ${
                    isDarkMode
                      ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }
                `}
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
