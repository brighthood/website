/* eslint-disable*/
import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";


export default function ReasonCard({ reason }) {

  return (
    <motion.li
      className="bg-surface dark:bg-dark-surface rounded-lg shadow-lg p-6 flex flex-col items-center border border-transparent hover:border-primary transition duration-300 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      key={reason.id}
    >
      <LazyLoadImage
        src={reason.image}
        alt={reason.title}
        // effect="blur"
        className="rounded-md mb-4"
      />
      <h3 className="text-xl text-darkText dark:text-dark-darkText font-bold mb-2">
        {reason.title}
      </h3>
      <p className="text-md text-secondaryText  dark:text-dark-secondaryText">
        {reason.description}
      </p>
    </motion.li>
  );
}
