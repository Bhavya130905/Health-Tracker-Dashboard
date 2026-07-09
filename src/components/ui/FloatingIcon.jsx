import { motion } from "framer-motion";

function FloatingIcon({
  children,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default FloatingIcon;