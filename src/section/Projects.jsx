import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  // Mouse follow preview image
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 15, stiffness: 120 });
  const springY = useSpring(y, { damping: 15, stiffness: 120 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Projects</h2>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project
          key={project.id}
          {...project}
          setPreview={setPreview}   // 👈 IMPORTANT
        />
      ))}

      {/* Floating Preview Image */}
      {preview && (
       <motion.img
       src={preview}
       className="fixed top-0 left-0 z-50 max-w-[320px] max-h-[220px] object-contain rounded-lg shadow-2xl pointer-events-none bg-black"
       style={{ x: springX, y: springY }}
/>

      )}
    </section>
  );
};

export default Projects;
