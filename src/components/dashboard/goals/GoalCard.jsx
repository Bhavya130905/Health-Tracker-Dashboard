import {
  calculateProgress,
} from "../../../utils/goalHelpers";

import GoalProgressRing from "./GoalProgressRing";
import AnimatedCard from "../../ui/AnimatedCard";

function GoalCard({ goal }) {
  const Icon = goal.icon;

  const progress = calculateProgress(
    goal.current,
    goal.target
  );

  return (
    <AnimatedCard>
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <Icon
            size={30}
            className="text-emerald-500"
          />

          <h3 className="mt-3 font-semibold dark:text-white">
            {goal.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {goal.current} / {goal.target} {goal.unit}
          </p>
        </div>

        <GoalProgressRing
          value={progress}
          color={goal.color}
        />
      </div>
    </div>
    </AnimatedCard>
  );
}

export default GoalCard;