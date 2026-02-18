import React from "react";
import { motion } from "motion/react";
import { FlipWords } from "./FlipWords";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];

  const variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      className="
        absolute inset-0 z-10
        flex justify-center md:justify-start
        items-center md:items-start
        pt-0 md:pt-24
        px-6 md:pl-16
        pointer-events-none
      "
    >
      <div
        className="
          text-center md:text-left
          max-w-xl
          md:ml-48
        "
      >
        {/* Desktop */}
        <div className="hidden md:flex flex-col items-start space-y-3">
          <motion.h1
            className="text-white text-2xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            Hi, I'm Deepanshi
          </motion.h1>

          <motion.p
            className="text-gray-200 text-2xl font-medium leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <FlipWords words={words} className="text-white font-black text-6xl" />
          </motion.div>

          <motion.p
            className="text-white text-4xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            Web Solutions
          </motion.p>
        </div>

        {/* Mobile */}
        <div className="flex flex-col items-center space-y-4 md:hidden">
          <motion.p
            className="text-white text-2xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            Hi, I'm Deepanshi
          </motion.p>

          <motion.p
            className="text-gray-200 text-3xl font-bold"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            Building
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <FlipWords words={words} className="text-white font-black text-4xl" />
          </motion.div>

          <motion.p
            className="text-white text-3xl font-bold"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
