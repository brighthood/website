import React from "react";

export default function Hero() {
  return (
    <section className="h-[88dvh] flex flex-col justify-center items-center text-center px-6 bg-background text-darkText">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Unlock your potential. Learn to code, build your dream, and create the
          life you’ve always imagined.
        </h1>
        <p className="text-lg md:text-xl text-secondaryText mb-8">
          The future is yours — it starts now.
        </p>
        <button
          className="bg-gradient-to-tr from-primary to-purple-500 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-accent transition duration-300
                     animate-bounce"
        >
          Get Started Now
        </button>
      </div>
    </section>
  );
}
