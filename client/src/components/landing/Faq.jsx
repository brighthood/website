import React, { useState } from "react";

const faqs = [
  {
    question: "Who is this program for?",
    answer:
      "This program is designed for high school students in Ethiopia who want to explore tech and programming, even if they have no prior experience.",
  },
  {
    question: "Do I need a laptop or internet?",
    answer:
      "While having a laptop is helpful, we provide solutions for shared access and guidance to learn effectively even with limited resources.",
  },
  {
    question: "What will I learn?",
    answer:
      "You'll learn the basics of frontend, backend, mobile, and full-stack development, along with real-world projects and career skills.",
  },
  {
    question: "Is the course taught in local languages?",
    answer:
      "Yes! We prioritize teaching in your mother tongue to make programming more understandable and accessible.",
  },
  {
    question: "Is there a cost to join?",
    answer:
      "We aim to keep the program  highly affordable. We also provide support materials, mentorship, and workshops.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer transition hover:shadow-lg"
            onClick={() => toggleFaq(index)}
          >
            <h3 className="text-lg font-semibold text-dark-darkText flex justify-between items-center">
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </h3>
            {openIndex === index && (
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
