// app/components/Button.tsx
"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { useDarkModeStore } from "../store/darkModeStore";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
type BorderRadius = "none" | "sm" | "md" | "lg" | "full";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  fullWidth?: boolean;
  borderRadius?: BorderRadius;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  icon,
  fullWidth = false,
  borderRadius = "md",
}) => {
  const { isDarkMode } = useDarkModeStore();

  // Border radius styles
  const borderRadiusStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  // Base styles
  const baseStyles = `
    inline-flex items-center justify-center 
    ${borderRadiusStyles[borderRadius]}
    font-semibold 
    transition-all 
    duration-300 
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2
    ${
      disabled
        ? "opacity-50 cursor-not-allowed"
        : "hover:shadow-md hover:scale-[1.02]"
    }
    ${fullWidth ? "w-full" : "w-auto"}
  `;

  // Variant styles
  const variantStyles = {
    primary: isDarkMode
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
      : "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",

    secondary: isDarkMode
      ? "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
      : "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400",

    outline: isDarkMode
      ? "border border-gray-600 text-gray-300 hover:bg-gray-700 focus:ring-gray-500"
      : "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400",

    ghost: isDarkMode
      ? "text-gray-300 hover:bg-gray-700 focus:ring-gray-500"
      : "text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Combine styles
  const combinedStyles = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${className}
  `;

  // Render logic
  const buttonContent = (
    <div className="flex items-center gap-2">
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles} aria-disabled={disabled}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
