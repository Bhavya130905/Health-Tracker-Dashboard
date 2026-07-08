import { motion } from "framer-motion";

function ActionButton({ action }) {
  const Icon = action.icon;

  const handleClick = () => {
    console.log(`${action.title} clicked`);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        y: -4,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={handleClick}
      className="group flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${action.color}`}
      >
        <Icon size={24} />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-slate-800 dark:text-white">
          {action.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {action.description}
        </p>
      </div>
    </motion.button>
  );
}

export default ActionButton;