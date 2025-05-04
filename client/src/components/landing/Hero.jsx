import React from "react";
import hero from "./../../assets/coding.mp4";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-dark-background dark:bg-dark-surface bg-blend-multiply transition-all duration-300"
      id="Home"
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-background dark:bg-dark-background bg-opacity-50 z-10"></div> */}
      {/* Hero Content */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient bg-[length:400%_400%] opacity-70 -z-10"></div> */}
      <div className="relative max-w-4xl z-20">
        <h1 className="text-2xl md:text-4xl text-dark-darkText dark:text-dark-darkText font-black leading-tight mb-4">
          Unlock your potential. Learn to code, build your dreams, and create
          the life you've always imagined.
        </h1>
        <p className="text-lg md:text-xl text-dark-secondaryText dark:text-dark-secondaryText mb-8">
          The future is yours - it starts now
        </p>
        <Button color="cta" size="lg" className=" text-lg">
          Get Started
        </Button>
      </div>
    </section>
  );
}
