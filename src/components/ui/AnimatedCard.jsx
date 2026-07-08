import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

function AnimatedCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      variants={variants}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.2,
        },
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedCard;