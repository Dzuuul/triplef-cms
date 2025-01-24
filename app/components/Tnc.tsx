"use client";

import React, { useState } from "react";
import { useDarkModeStore } from "../store/darkModeStore";

interface TermsAndConditionsProps {
  onAccept: () => void;
  onClose: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  onAccept,
  onClose,
}) => {
  const { isDarkMode } = useDarkModeStore();
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    setIsScrolledToBottom(
      Math.abs(scrollHeight - scrollTop - clientHeight) < 1
    );
  };

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center 
        bg-black bg-opacity-50 p-4
        ${isDarkMode ? "text-white" : "text-gray-800"}
      `}
    >
      <div
        className={`
          w-full max-w-2xl rounded-lg shadow-xl 
          ${isDarkMode ? "bg-gray-800" : "bg-white"}
        `}
      >
        <div
          className={`
            p-6 border-b 
            ${isDarkMode ? "border-gray-700" : "border-gray-200"}
          `}
        >
          <h2 className="text-2xl font-bold">Terms & Conditions</h2>
        </div>

        <div
          className={`
            p-6 max-h-96 overflow-y-auto
            ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}
          `}
          onScroll={handleScroll}
        >
          <h3 className="text-lg font-semibold mb-4">Welcome to TripleF CMS</h3>

          <section className="mb-4">
            <h4 className="font-medium mb-2">1. User Agreement</h4>
            <p className="text-sm">
              By creating an account, you agree to abide by our terms and
              conditions. This includes maintaining the confidentiality of your
              account and using our platform responsibly.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="font-medium mb-2">2. Data Privacy</h4>
            <p className="text-sm">
              We respect your privacy and are committed to protecting your
              personal information. Our data handling practices comply with
              international privacy standards.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="font-medium mb-2">3. User Responsibilities</h4>
            <p className="text-sm">
              Users are responsible for the content they create and share.
              Prohibited actions include sharing offensive, illegal, or
              copyrighted material without proper authorization.
            </p>
          </section>

          <section>
            <h4 className="font-medium mb-2">4. Service Modifications</h4>
            <p className="text-sm">
              We reserve the right to modify our services, pricing, and terms of
              service at any time. Continued use of our platform constitutes
              acceptance of these changes.
            </p>
          </section>
        </div>

        <div
          className={`
            p-6 flex justify-between items-center 
            border-t 
            ${isDarkMode ? "border-gray-700" : "border-gray-200"}
          `}
        >
          <button
            onClick={onClose}
            className={`
              px-4 py-2 rounded 
              ${
                isDarkMode
                  ? "hover:bg-gray-700 bg-gray-800"
                  : "hover:bg-gray-100 bg-white border"
              }
            `}
          >
            Cancel
          </button>
          <button
            onClick={onAccept}
            disabled={!isScrolledToBottom}
            className={`
              px-4 py-2 rounded 
              ${
                isScrolledToBottom
                  ? isDarkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                  : "opacity-50 cursor-not-allowed"
              }
            `}
          >
            {isScrolledToBottom ? "I Accept" : "Scroll to Accept"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
