import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// icons
import copyIcon from "../assets/copy.svg";
import copyDoneIcon from "../assets/copy-done.svg";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const email = "deepanshisingh2728@gmail.com"; 

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-4 py-3 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            key="copied"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <img src={copyDoneIcon} className="w-5 h-5" alt="copied" />
            Email Copied
          </motion.p>
        ) : (
          <motion.p
            key="copy"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <img src={copyIcon} className="w-5 h-5" alt="copy" />
            Copy Email
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
