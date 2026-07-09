import { motion } from "framer-motion";

function ProgressBar({
  progress,
  color,
}) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: `${progress}%`,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  );
}

export default ProgressBar;