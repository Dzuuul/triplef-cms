"use client";

import React, { useState } from "react";
import { useDarkModeStore } from "../store/darkModeStore";
import Button from "../components/Button";

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [fullName, setFullName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", loginEmail);
  };

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle registration logic here
    if (registerPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration attempt:", fullName, registerEmail);
  };

  return (
    <div
      className={`
        min-h-screen flex flex-col md:flex-row items-center justify-center 
        ${
          isDarkMode
            ? "bg-gray-900 text-white dark:bg-gray-900"
            : "bg-white text-gray-800"
        }
      `}
    >
      <div className="container mx-auto px-4 py-8 md:py-0 h-screen">
        <div className="flex flex-col md:flex-row shadow-lg rounded-xl overflow-hidden h-full">
          {/* Form Container - Left Side */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex items-center justify-center h-full">
            <div className="w-full max-w-md">
              {/* Toggle between Login and Register */}
              <div className="flex mb-6">
                <Button
                  variant={isLogin ? "primary" : "outline"}
                  size="md"
                  fullWidth
                  onClick={() => setIsLogin(true)}
                  className="mr-2"
                >
                  Login
                </Button>
                <Button
                  variant={!isLogin ? "primary" : "outline"}
                  size="md"
                  fullWidth
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </Button>
              </div>

              {/* Login Form */}
              {isLogin ? (
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-6">
                    Welcome Back!
                  </h1>
                  <form onSubmit={handleLoginSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="loginEmail"
                        className="block font-medium mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="loginEmail"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className={`
                          w-full px-3 py-2 md:px-4 md:py-2 rounded-md text-sm md:text-base
                          ${
                            isDarkMode
                              ? "bg-gray-800 text-white"
                              : "bg-gray-200 text-gray-800"
                          }
                        `}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="loginPassword"
                        className="block font-medium mb-1"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="loginPassword"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className={`
                          w-full px-3 py-2 md:px-4 md:py-2 rounded-md text-sm md:text-base
                          ${
                            isDarkMode
                              ? "bg-gray-800 text-white"
                              : "bg-gray-200 text-gray-800"
                          }
                        `}
                        required
                      />
                      <div className="text-right mt-2">
                        <a
                          href="#"
                          className={`
                            text-xs md:text-sm 
                            ${
                              isDarkMode
                                ? "text-blue-400 hover:text-blue-300"
                                : "text-blue-600 hover:text-blue-500"
                            }
                          `}
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <Button type="submit" variant="primary" size="md" fullWidth>
                      Login
                    </Button>
                  </form>
                </div>
              ) : (
                // Register Form
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-6">
                    Create Your Account!
                  </h1>
                  <form onSubmit={handleRegisterSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="fullName"
                        className="block font-medium mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`
                          w-full px-3 py-2 md:px-4 md:py-2 rounded-md text-sm md:text-base
                          ${
                            isDarkMode
                              ? "bg-gray-800 text-white"
                              : "bg-gray-200 text-gray-800"
                          }
                        `}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="registerEmail"
                        className="block font-medium mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="registerEmail"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        className={`
                          w-full px-3 py-2 md:px-4 md:py-2 rounded-md text-sm md:text-base
                          ${
                            isDarkMode
                              ? "bg-gray-800 text-white"
                              : "bg-gray-200 text-gray-800"
                          }
                        `}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="registerPassword"
                        className="block font-medium mb-1"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="registerPassword"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        className={`
                          w-full px-3 py-2 md:px-4 md:py-2 rounded-md text-sm md:text-base
                          ${
                            isDarkMode
                              ? "bg-gray-800 text-white"
                              : "bg-gray-200 text-gray-800"
                          }
                        `}
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
                        className={`
                          w-full px-3 py-2 md:px-4 md:py-2 rounded-md text-sm md:text-base
                          ${
                            isDarkMode
                              ? "bg-gray-800 text-white"
                              : "bg-gray-200 text-gray-800"
                          }
                        `}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="flex items-center text-sm md:text-base">
                        <input
                          type="checkbox"
                          checked={agreedToTerms}
                          onChange={(e) => setAgreedToTerms(e.target.checked)}
                          className={`mr-2 ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        />
                        I agree to the Terms & Conditions
                      </label>
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      fullWidth
                      disabled={!agreedToTerms}
                    >
                      Create Account
                    </Button>
                  </form>
                </div>
              )}

              <div className="mt-4 text-center">
                <Button variant="secondary" size="md" onClick={toggleDarkMode}>
                  {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </Button>
              </div>
            </div>
          </div>

          {/* Banner Image Container - Right Side */}
          <div
            className={`
              hidden md:flex w-1/2 items-center justify-center 
              ${isDarkMode ? "bg-gray-800" : "bg-blue-50"}
              h-full
            `}
          >
            <img
              src="/login-banner.png"
              alt="Login Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
