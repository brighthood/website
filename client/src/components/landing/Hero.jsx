import React from "react";
import hero from "./../../assets/coding.mp4";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-background dark:bg-dark-surface transition-all duration-300"
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
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      {/* Hero Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient bg-[length:400%_400%] opacity-70 -z-10"></div>
      <div className="relative max-w-4xl z-20">
        <h1 className="text-3xl md:text-5xl text-dark-darkText dark:text-dark-darkText font-extrabold leading-tight mb-4">
          አቅምዎን ይክፈቱ። ኮድ ማድረግን ይማሩ፣ ህልምዎን ይገንቡ እና ሁልጊዜ ያሰቡትን ህይወት ይፍጠሩ።
        </h1>
        <p className="text-lg md:text-xl text-dark-secondaryText dark:text-dark-secondaryText mb-8">
          የወደፊቱ የእርስዎ ነው - አሁን ይጀምራል።
        </p>
        <button className="bg-gradient-to-tr from-primary to-purple-500 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-accent transition duration-300 ">
          አሁን ይቀላቀሉ
        </button>
      </div>
    </section>
  );
}
