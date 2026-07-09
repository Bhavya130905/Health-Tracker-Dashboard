import {
  calculateProgress,
} from "../../../utils/goalHelpers";

import GoalProgressRing from "./GoalProgressRing";
import { useMemo } from "react";

import CelebrationBadge from "../../ui/CelebrationBadge";
import AnimatedCard from "../../ui/AnimatedCard";

function GoalCard({ goal }) {
  const Icon = goal.icon;

  const progress = useMemo(
  () => calculateProgress(goal.current, goal.target),
  [goal.current, goal.target]
);

const completed = progress >= 100;

  return (
    <AnimatedCard>
  <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
    <CelebrationBadge show={completed} />

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