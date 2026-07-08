import { motion } from "framer-motion";

import {
  getStatusColor,
  getIconBackground,
} from "../../../utils/formatRelativeTime";

function ActivityItem({ activity }) {
  const Icon = activity.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative flex gap-4 pb-8 last:pb-0"
    >
      <div className="absolute left-6 top-12 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>

      <div
        className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${getIconBackground(
          activity.color
        )}`}
      >
        <Icon size={22} />
      </div>

      <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white">
              {activity.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {activity.description}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
              activity.status
            )}`}
          >
            {activity.status}
          </span>
        </div>

        <p className="mt-3 text-sm text-slate-400">
          {activity.time}
        </p>
      </div>
    </motion.div>
  );
}

export default ActivityItem;