/* eslint-disable*/
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Liya Alemu",
    role: "High School Student, Addis Ababa",
    message:
      "This course completely changed my life. I never thought I could build websites and apps before joining. Now, I even started freelancing!",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Abdi Mohammed",
    role: "Student, Dire Dawa",
    message:
      "Learning in my own language made everything easier. The instructors were so supportive and the projects gave me real-world skills.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sara Tesfaye",
    role: "University Student, Bahir Dar",
    message:
      "The hands-on approach and practical examples helped me understand coding concepts better. I feel more confident in my skills now.",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Mulugeta Bekele",
    role: "Aspiring Developer, Hawassa",
    message:
      "I loved the community and the support I received throughout the course. It was a game-changer for my career aspirations.",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
  {
    name: "Hana Getachew",
    role: "Freelancer, Mekelle",
    message:
      "The course was well-structured and easy to follow. I’ve already landed my first client thanks to the skills I gained here.",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-white dark:bg-dark-background py-16 overflow-hidden "
      id="Testimonial"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        What Our Students Say
      </h2>
      <div className="w-full overflow-hidden relative">
        <div className="flex animate-marquee gap-6 w-max">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-sm bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200">{t.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
