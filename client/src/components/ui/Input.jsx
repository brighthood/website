import React from "react";

export default function Input({ type, placeholder, register, name }) {
  return (
    <div className="relative w-full z-0 group ">
      <label
        htmlFor={name}
        className="relative  text-gray-500 group-focus-within:text-gray-300 text-xs"
      >
        {name}
      </label>
      <input
        name={name}
        {...register(name)}
        placeholder={placeholder}
        type={type}
        className=" block w-full text-xs mt-1 mb-2  sm:text-md appearance-none rounded-md border-2 border-gray-800 bg-dark-background px-1 py-2 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0 transition duration-200 ease-in-out"
      />
      {/* <div className="absolute -bottom-3  text-danger text-xs ">
        please provide a correct {name} format
      </div> */}
    </div>
  );
}
