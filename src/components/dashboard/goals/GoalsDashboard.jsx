import goalsData from "../../../constants/goalsData";

import GoalCard from "./GoalCard";
import StreakCard from "./StreakCard";
import AchievementCard from "./AchievementCard";

function GoalsDashboard() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold dark:text-white">
        Goals & Progress
      </h2>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {goalsData.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
          />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <StreakCard />

        <AchievementCard />
      </div>
    </section>
  );
}

export default GoalsDashboard;