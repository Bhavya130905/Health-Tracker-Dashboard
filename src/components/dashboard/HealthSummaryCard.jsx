import { TrendingUp } from "lucide-react";

import AnimatedCounter from "../ui/AnimatedCounter";
import AnimatedCard from "../ui/AnimatedCard";

import {
  getIconColor,
  getProgressColor,
} from "../../utils/healthStatus";

function HealthSummaryCard({ item }) {
  const Icon = item.icon;

  return (
    <AnimatedCard>
      <div
        className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
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

          <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
            <Icon
              size={28}
              className={getIconColor(item.color)}
            />
          </div>
        </div>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            style={{
              width: `${item.progress}%`,
            }}
            className={`h-full rounded-full transition-all duration-1000 ${getProgressColor(
              item.color
            )}`}
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
      </div>
    </AnimatedCard>
  );
}

export default HealthSummaryCard;