"use client";

import React, { useState } from "react";

const LoginRegisterPage = () => {
  const [mode, setMode] = useState("dark");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`
        min-h-screen flex items-center justify-center 
        ${
          mode === "dark"
            ? "bg-gray-900 text-white dark:bg-gray-900"
            : "bg-white text-gray-800"
        }
      `}
    >
      <div className="container mx-auto flex">
        {/* Form Container - Left Side */}
        <div className="w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6">Create Your Account!</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full px-4 py-2 rounded-md ${
                    mode === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2 rounded-md ${
                    mode === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-2 rounded-md ${
                    mode === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block font-medium mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full px-4 py-2 rounded-md ${
                    mode === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className={`mr-2 ${
                      mode === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  />
                  I agree to the Terms & Conditions
                </label>
              </div>
              <button
                type="submit"
                disabled={!agreedToTerms}
                className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                  mode === "dark"
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                Create Account
              </button>
            </form>
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={toggleMode}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  mode === "dark"
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
              >
                {mode === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"}
              </button>
            </div>
          </div>
        </div>

        {/* Banner Image Container - Right Side */}
        <div className="w-1/2 flex items-center justify-center bg-blue-50">
          <img
            src="/login-banner.png"
            alt="Login Banner"
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
