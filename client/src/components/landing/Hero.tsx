import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="grid items-center gap-8 bg-muted-2 lg:grid-cols-2">
          <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
            <p>New Release</p>
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
              Welcome to Our Website
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button>
                Primary
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline">Secondary</Button>
            </div>
          </div>
          <img
            src="https://shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder hero"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
















// import React from "react";
// import hero from "./../../assets/coding.mp4";
// import Button from "../ui/button";

// export default function Hero() {
//   return (
//     <section
//       className="relative h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-dark-background dark:bg-dark-surface bg-blend-multiply transition-all duration-300"
//       id="Home"
//     >
//       {/* Video Background */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src={hero} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       {/* <div className="absolute inset-0 bg-background dark:bg-dark-background bg-opacity-50 z-10"></div> */}
//       {/* Hero Content */}
//       {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient bg-[length:400%_400%] opacity-70 -z-10"></div> */}
//       <div className="relative max-w-4xl z-20">
//         <h1 className="text-2xl md:text-4xl text-dark-darkText dark:text-dark-darkText font-black leading-tight mb-4">
//           Unlock your potential. Learn to code, build your dreams, and create
//           the life you've always imagined.
//         </h1>
//         <p className="text-lg md:text-xl text-dark-secondaryText dark:text-dark-secondaryText mb-8">
//           The future is yours - it starts now
//         </p>
//         <Button color="cta" size="lg" className=" text-lg">
//           Get Started
//         </Button>
//       </div>
//     </section>
//   );
// }
