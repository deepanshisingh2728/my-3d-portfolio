import { motion } from "framer-motion";

const Card = ({ style, text, image, containerRef }) => {
  if (image && !text) {
    return (
      <motion.img
        src={image}
        className="absolute w-14 cursor-grab select-none"
        style={style}
        whileHover={{ scale: 1.05 }}
        drag
        dragConstraints={containerRef}
        dragElastic={0.15}
        draggable={false}
      />
    );
  }

  return (
    <motion.div
      className="absolute px-4 py-2 text-sm text-center text-white rounded-full 
                 bg-neutral-800 ring-1 ring-neutral-700 cursor-grab select-none
                 w-[11rem]"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.15}
    >
      {text}
    </motion.div>
  );
};

export default Card;
