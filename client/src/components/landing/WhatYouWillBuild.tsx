import React from "react";

const categories = [
  {
    title: "Frontend Development",
    description:
      "Learn to build modern, responsive user interfaces using HTML, CSS, JavaScript, and React. By the end, you'll be able to design landing pages, blogs, and portfolios.",
    videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
  },
  {
    title: "Backend Development",
    description:
      "Master Node.js, Express, and databases like MongoDB and PostgreSQL to create APIs, authentication systems, and data-driven platforms.",
    videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE",
  },
  {
    title: "Mobile App Development",
    description:
      "Create beautiful mobile apps using Flutter and Firebase. You'll build real-world apps like a to-do list, camera/gallery app, and an e-commerce mobile platform.",
    videoUrl: "https://www.youtube.com/embed/x0uinJvhNxI",
  },
  {
    title: "Full-Stack Projects",
    description:
      "Combine frontend and backend to build powerful full-stack projects like a social media clone, blog platform, or even a mini SaaS product.",
    videoUrl: "https://www.youtube.com/embed/ZxKM3DCV2kE",
  },
];

export default function WhatYouWillBuild() {
  return (
    <section className="bg-background dark:bg-dark-background  sm:py-14 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className=" text-xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-12">
          What You'll Build With Us
        </h2>

        <div className="flex flex-col gap-16">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-surface dark:bg-dark-surface rounded-xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center text-left"
            >
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {cat.title}
                </h3>
                <p className="text-secondaryText dark:text-dark-secondaryText text-md">
                  {cat.description}
                </p>
              </div>
              <div className="md:w-1/2 aspect-video">
                <iframe
                  src={cat.videoUrl}
                  title={cat.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
