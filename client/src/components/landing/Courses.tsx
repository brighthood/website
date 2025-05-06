import React from "react";
import CourseCard from "../CourseCard";

const courses = [
  {
    title: "Frontend Development",
    description:
      "Master the art of building stunning, interactive user interfaces. Learn to create pixel-perfect websites and dynamic web applications that users love.",
    joinNowText: "Join the Frontend Web dev",
    frameworks: ["React", "javaScript", "CSS", "Html"],
  },
  {
    title: "Backend Development",
    description:
      "Become the architect behind the scenes. Learn how to build secure, scalable, and powerful server-side applications that power the world's digital experiences.",
    joinNowText: "Become a Backend Master",
    frameworks: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Fullstack Development",
    description:
      "Learn everything from A to Z — from stunning frontends to powerful backends. Become the all-rounder developer every company is searching for.",
    joinNowText: "Start Your Fullstack Journey",
    frameworks: ["MongoDB", "Express", "React", "Node"],
  },
  {
    title: "Mobile App Development",
    description:
      "Create apps that live in billions of pockets. Learn how to build fast, beautiful, and cross-platform mobile applications with ease.",
    joinNowText: "Become a Mobile Developer",
    frameworks: ["React Native", "Flutter", "Firebase", "Swift Basics"],
  },
];

export default function Courses() {
  return (
    <div id="Courses">
      <h2 className="text-2xl sm:text-4xl font-bold text-center sm:mb-8 text-darkText dark:text-dark-darkText">
        Course List
      </h2>

      <div className="max-w-7xl mx-auto px-4 py-8 bg-background dark:bg-dark-background rounded-lg">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
