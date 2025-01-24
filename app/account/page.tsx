"use client";

import React, { useState, useEffect } from "react";
import { useDarkModeStore } from "../store/darkModeStore";
import Button from "../components/Button";
import Tnc from "../components/Tnc";
import { findUser, isEmailRegistered, registerUser } from "../utils/dummyUsers";
import Image from "next/image";

const LoginBannerSlider = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const bannerImages = [
    {
      src: "/login-banner.png",
      title: "Secure Login",
      description: "Protect your account with advanced security",
    },
    {
      src: "/login-banner-2.png",
      title: "Easy Access",
      description: "Seamless login experience",
    },
    {
      src: "/login-banner-3.png",
      title: "Smart Authentication",
      description: "Advanced verification methods",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <div
      className={`
        hidden md:flex w-1/2 items-center justify-center 
        ${isDarkMode ? "bg-gray-800" : "bg-blue-50"}
        h-full relative overflow-hidden
      `}
    >
      {bannerImages.map((image, index) => (
        <div key={image.src} className="absolute w-full h-full">
          <Image
            src={image.src}
            alt={`Login Banner ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`
              absolute w-full h-full transition-all duration-1000 ease-in-out
              ${
                index === currentImageIndex
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
              }
            `}
          />
          <div
            className={`
              absolute inset-0 bg-gradient-to-r from-black/20 to-transparent flex flex-col 
              justify-end items-start p-8 text-white transition-opacity duration-1000
              ${index === currentImageIndex ? "opacity-100" : "opacity-0"}
            `}
          >
            <h2
              className={`
              text-3xl font-bold mb-2 text-white
              transform transition-transform duration-1000 ease-in-out
            `}
            >
              {image.title}
            </h2>
            <p
              className={`
              text-lg max-w-md text-white text-opacity-90
            `}
            >
              {image.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex space-x-2 z-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${
                index === currentImageIndex
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300 hover:bg-blue-300"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [fullName, setFullName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const { isDarkMode } = useDarkModeStore();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = findUser(loginEmail, loginPassword);

    if (user) {
      alert(`Login successful! Welcome, ${user.fullName}`);
      // Here you would typically set authentication state or redirect
    } else {
      alert("Invalid email or password");
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (registerPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!agreedToTerms) {
      alert("Please agree to the Terms and Conditions");
      return;
    }

    // Check if email already exists
    if (isEmailRegistered(registerEmail)) {
      alert("Email already registered");
      return;
    }

    // Register new user
    registerUser({
      email: registerEmail,
      password: registerPassword,
      fullName: fullName,
    });

    alert(`Registration successful! Welcome, ${fullName}`);
    // Switch to login form after successful registration
    setIsLogin(true);
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
                    Create an Account
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
                    <div className="mb-4 flex items-center">
                      <input
                        type="checkbox"
                        id="agreedToTerms"
                        checked={agreedToTerms}
                        onChange={() => setAgreedToTerms(!agreedToTerms)}
                        className="mr-2"
                        required
                      />
                      <label htmlFor="agreedToTerms" className="text-sm">
                        I agree to the Terms and Conditions
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowTerms(true)}
                        className={`
                          ml-2 text-xs 
                          ${
                            isDarkMode
                              ? "text-blue-400 hover:text-blue-300"
                              : "text-blue-600 hover:text-blue-500"
                          }
                        `}
                      >
                        View
                      </button>
                    </div>
                    <Button type="submit" variant="primary" size="md" fullWidth>
                      Register
                    </Button>
                  </form>

                  {/* Modal TNC*/}
                  {showTerms && (
                    <Tnc
                      onClose={() => setShowTerms(false)}
                      onAccept={() => setAgreedToTerms(true)}
                    />
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Banner Slider Container - Right Side */}
          <LoginBannerSlider isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
