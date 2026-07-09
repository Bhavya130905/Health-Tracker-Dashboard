import { memo } from "react";
import { TrendingUp } from "lucide-react";

import AnimatedCounter from "../ui/AnimatedCounter";
import AnimatedCard from "../ui/AnimatedCard";
import FloatingIcon from "../ui/FloatingIcon";
import ProgressBar from "../ui/ProgressBar";

import {
  getIconColor,
  getProgressColor,
} from "../../utils/healthStatus";

function HealthSummaryCard({ item }) {
  const Icon = item.icon;

  return (
    <AnimatedCard>
      <article
        tabIndex={0}
        aria-label={item.title}
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
          transition-all
          duration-300
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">
              {item.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold dark:text-white">
              <AnimatedCounter value={item.value} />

              <span className="ml-2 text-base font-medium text-slate-500">
                {item.unit}
              </span>
            </h2>
          </div>

          <FloatingIcon>
            <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
              <Icon
                size={28}
                className={getIconColor(item.color)}
              />
            </div>
          </FloatingIcon>
        </div>

        <div className="mt-6">
          <ProgressBar
            progress={item.progress}
            color={getProgressColor(item.color)}
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-slate-500">
            Daily Progress
          </span>

          <span className="flex items-center gap-1 text-sm font-semibold text-emerald-600">
            <TrendingUp size={15} />
            {item.trend}
          </span>
        </div>
      </article>
    </AnimatedCard>
  );
}

export default memo(HealthSummaryCard);