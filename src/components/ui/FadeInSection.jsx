import { motion } from "framer-motion";

function FadeInSection({
  children,
  className = "",
}) {
  return (
    <motion.section
      className={className}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {children}
    </motion.section>
  );
}

export default FadeInSection;