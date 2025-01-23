// app/not-found.tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useDarkModeStore } from "./store/darkModeStore";

export default function NotFound() {
  const { isDarkMode } = useDarkModeStore();

  useEffect(() => {
    // Ensure dark mode is applied
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`
      flex flex-col items-center justify-center 
      min-h-screen 
      ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}
      p-4 sm:p-6 md:p-8
    `}
    >
      <div className="text-center max-w-xl mx-auto space-y-6">
        <div
          className="
            text-[10rem] sm:text-[12rem] md:text-[15rem] 
            font-bold 
            opacity-10 
            absolute 
            top-1/2 
            left-1/2 
            transform 
            -translate-x-1/2 
            -translate-y-1/2
            select-none
            pointer-events-none
          "
        >
          404
        </div>

        <h1
          className="
          text-4xl sm:text-5xl md:text-6xl 
          font-extrabold 
          tracking-tight 
          relative 
          z-10
          mb-4
          bg-clip-text 
          text-transparent 
          bg-gradient-to-r 
          from-blue-600 
          to-purple-600 
          dark:from-blue-400 
          dark:to-purple-400
        "
        >
          Page Not Found
        </h1>

        <p
          className={`
          text-base sm:text-lg md:text-xl 
          mb-6 
          ${isDarkMode ? "text-gray-300" : "text-gray-600"}
        `}
        >
          Oops! The page you're looking for seems to have wandered off into the
          digital wilderness.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className={`
              inline-flex items-center justify-center 
              px-6 py-3 
              rounded-full 
              text-sm sm:text-base 
              font-semibold 
              transition-all 
              duration-300 
              ${
                isDarkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }
              hover:shadow-lg
              hover:scale-105
            `}
          >
            Return Home
          </Link>

          <Link
            href="/dashboard"
            className={`
              inline-flex items-center justify-center 
              px-6 py-3 
              rounded-full 
              text-sm sm:text-base 
              font-semibold 
              transition-all 
              duration-300 
              ${
                isDarkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }
              hover:shadow-md
              hover:scale-105
            `}
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
