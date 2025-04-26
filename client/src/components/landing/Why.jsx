import React from "react";
import { motion } from "framer-motion";
import feature from "./../../assets/images/feature.jpg";
import Dreams from "./../../assets/images/dream.jpg";
import creativity from "./../../assets/images/creativity.jpg";
import Freedom from "./../../assets/images/freedom.jpg";
import technology from "./../../assets/images/technology.jpg";
const reasons = [
  {
    id: 1,
    title: "Transform Your Future",
    description:
      "Learning to code opens doors you never imagined. This course is your first step toward a career, freedom, and a life full of opportunities.",
    image: feature,
  },
  {
    id: 2,
    title: "Build Your Dreams",
    description:
      "Turn your passion into reality. Whether it's launching a startup, creating an app, or freelancing, coding empowers you to build what you believe in.",
    image: Dreams,
  },
  {
    id: 3,
    title: "Freedom & Flexibility",
    description:
      "Coding skills give you the freedom to work remotely, earn from anywhere, and live life on your terms. No more 9-to-5 limits.",
    image: Freedom,
  },
  {
    id: 4,
    title: "Stay Ahead of the Future",
    description:
      "Technology is the future. By learning to code now, you're investing in skills that will always be in demand, no matter how the world changes.",
    image: technology,
  },
  {
    id: 5,
    title: "Unlock Limitless Creativity",
    description:
      "Coding isn't just technical—it's a creative superpower. Build websites, apps, and experiences that touch lives and make an impact.",
    image: creativity,
  },
  {
    id: 6,
    title: "Unlock Limitless Creativity",
    description:
      "Coding isn't just technical—it's a creative superpower. Build websites, apps, and experiences that touch lives and make an impact.",
    image: creativity,
  },
];

export default function Why() {
  return (
    <div
      className="max-w-4xl mx-auto px-4 py-8 bg-background dark:bg-dark-background rounded-lg shadow-lg"
      id="Why"
    >
      <h2 className="text-2xl  sm:text-4xl font-bold text-center mb-8">
        Why You Need This Course?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="bg-white dark:bg-dark-background shadow-lg rounded-lg p-6"
          >
            <motion.li
              className="bg-white dark:bg-dark-surface rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={reason.image}
                alt={reason.title}
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {reason.description}
              </p>
            </motion.li>
          </div>
        ))}
      </div>
    </div>
  );
}
