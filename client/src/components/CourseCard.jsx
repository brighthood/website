import React from "react";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white dark:bg-dark-background rounded-2xl shadow-lg my-3 p-6 flex flex-col gap-4 border border-transparent hover:border-primary transition duration-300">
      <h2 className="text-2xl font-bold text-primary dark:text-white">
        {course.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{course.description}</p>

      <div>
        <h3 className="text-lg font-semibold text-darkText dark:text-white mb-2">
          Frameworks & Tools:
        </h3>
        <ul className="list-disc list-inside space-y-1">
          {course.frameworks.map((framework, index) => (
            <li
              key={index}
              className="text-secondaryText dark:text-dark-secondaryText"
            >
              {framework}
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-auto bg-gradient-to-tr from-primary to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition">
        {course.joinNowText}
      </button>
    </div>
  );
}
