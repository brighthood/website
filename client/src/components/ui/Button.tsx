import React from "react";

export default function Button({
  color,
  variant = "contained",
  size,
  children,
  disabled = false,
  onClick = () => {},
  className = "",
}) {
  const buttonStyles = {
    primary: "bg-primary text-white hover:bg-blue-600",
    secondary: "bg-secondary text-white hover:bg-gray-600",
    danger: "bg-danger text-white hover:bg-red-600",
    cta: "bg-gradient-to-tr from-primary to-purple-500 text-white py-2 px-4 ",
  }[color];

  const sizeStyles = {
    sm: "py-1 px-2 text-xs",
    md: "py-1 px-3 text-sm",
    lg: "py-2 px-5 text-md",
  }[size];

  const variantStyles = {
    contained: "bg-primary text-white hover:bg-blue-800",
    outlined: "border border-dark-borderColor text-dark-darkText ",
  }[variant];

  return (
    <button
      className={`${buttonStyles} ${sizeStyles} ${variantStyles} ${className} rounded-md shadow-md text-nowrap transition duration-200 hover:opacity-90 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 `}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}
