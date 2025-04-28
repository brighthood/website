import React from "react";

export default function Button({
  color,
  variant = "contained",
  size,
  children,
  disabled = false,
  onClick = () => {},
}) {
  const buttonStyles = {
    primary: "bg-primary text-white hover:bg-blue-600",
    secondary: "bg-secondary text-white hover:bg-gray-600",
    danger: "bg-danger text-white hover:bg-red-600",
    cta:"bg-gradient-to-tr from-primary to-purple-500 text-white py-2 px-4"
  }[color];
  const sizeStyles = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4 text-md",
    lg: "py-3 px-6 text-lg",
  }[size];
  const variantStyles = {
    contained: "bg-primary text-white hover:bg-blue-600",
    outlined: "border-2 border-primary text-primary hover:bg-blue-100",
  }[variant];

  return (
    <button
      className={`${buttonStyles} ${sizeStyles} ${variantStyles} rounded-md shadow-md text-nowrap transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 `}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}
