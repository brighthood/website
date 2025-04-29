import React from "react";
import {
  FaLaptopCode,
  FaMoneyBillWave,
  FaUsers,
  FaLanguage,
} from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

const benefits = [
  {
    icon: <FaLaptopCode size={30} />,
    title: "Learn In-Demand Skills",
    description:
      "Master programming languages and tools used in the real-world tech industry.",
  },
  {
    icon: <FaMoneyBillWave size={30} />,
    title: "Monetize Your Skills",
    description:
      "Gain the skills needed to freelance, build apps, or start a career early.",
  },
  {
    icon: <FaLanguage size={30} />,
    title: "Learn in Your Language",
    description:
      "We teach in your native tongue for easier understanding and accessibility.",
  },
  {
    icon: <FaUsers size={30} />,
    title: "Join a Tech Community",
    description:
      "Be part of a strong, supportive tech community that grows with you.",
  },
  {
    icon: <MdWorkOutline size={30} />,
    title: "Portfolio Projects",
    description:
      "Build real-world projects you can showcase to employers or clients.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join Us?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Empower your future with practical skills, mentorship, and a strong
          support system.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-primary mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
