import { Award } from "lucide-react";
import { motion } from "framer-motion";

function CelebrationBadge({
  show,
}) {
  if (!show) return null;

  return (
    <motion.div
      initial={{
        scale: 0,
        rotate: -30,
      }}
      animate={{
        scale: 1,
        rotate: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="absolute -right-3 -top-3 rounded-full bg-yellow-400 p-2 text-white shadow-lg"
    >
      <Award size={18} />
    </motion.div>
  );
}

export default CelebrationBadge;