import { motion } from "motion/react";
import closeIcon from "../assets/close.svg";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl
        bg-gradient-to-b from-midnight to-navy border-white/10 p-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 rounded-sm p-2 bg-midnight hover:bg-gray-500"
        >
          <img src={closeIcon} className="w-6 h-6" alt="close" />
        </button>

        {/* Project Image */}
        <img
          src={image}
          alt={title}
          className="w-full rounded-2xl mb-4"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">{title}</h2>

        {/* Description */}
        <p className="text-gray-300 mb-3">{description}</p>

        {/* Sub Description */}
        <ul className="list-disc ml-5 text-gray-400 mb-4">
          {subDescription.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Logos + View Project */}
        <div className="flex items-center justify-between mt-6">
          
          {/* Logos */}
          <div className="flex gap-4 items-center">
            {tags.map((tag) => (
              <img
                key={tag.id}
                src={tag.path}
                alt={tag.name}
                className="w-10 h-10 object-contain"
              />
            ))}
          </div>

          {/* View Project */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white flex items-center gap-1 hover:underline"
          >
            View Project ↗
          </a>
        </div>

      </motion.div>
    </div>
  );
};

export default ProjectDetails;
