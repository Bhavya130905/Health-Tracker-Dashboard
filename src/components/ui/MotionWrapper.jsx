import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

function MotionWrapper({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default MotionWrapper;