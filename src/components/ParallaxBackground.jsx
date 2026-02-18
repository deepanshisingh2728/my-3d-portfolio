import React from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import sky from "../assets/sky.jpg";
import planets from "../assets/planets.png";
import mountain1 from "../assets/mountain-1.png";
import mountain2 from "../assets/mountain-2.png";
import mountain3 from "../assets/mountain-3.png";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  // smooth scroll animation
  const smooth = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 100,
  });

  // parallax transforms
  const planetsX = useTransform(smooth, [0, 0.5], ["0%", "-20%"]);
  const mountain3Y = useTransform(smooth, [0, 0.5], ["0%", "60%"]);
  const mountain2Y = useTransform(smooth, [0, 0.5], ["0%", "40%"]);
  const mountain1Y = useTransform(smooth, [0, 0.5], ["0%", "20%"]);

  return (
    <section className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* SKY */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${sky})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* PLANETS */}
      <motion.div
        style={{ x: planetsX }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${planets})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
      </motion.div>

      {/* MOUNTAIN 3 (BACK) */}
      <motion.div
        style={{ y: mountain3Y }}
        className="absolute bottom-0 w-full h-[70vh]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${mountain3})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </motion.div>

      {/* MOUNTAIN 2 (MID) */}
      <motion.div
        style={{ y: mountain2Y }}
        className="absolute bottom-0 w-full h-[80vh]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${mountain2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </motion.div>

      {/* MOUNTAIN 1 (FRONT) */}
      <motion.div
        style={{ y: mountain1Y }}
        className="absolute bottom-0 w-full h-[90vh]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${mountain1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </motion.div>
    </section>
  );
};

export default ParallaxBackground;