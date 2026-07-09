import goalsData from "../../../constants/goalsData";
import GoalCard from "./GoalCard";
import StreakCard from "./StreakCard";
import AchievementCard from "./AchievementCard";
import SectionHeader from "../../ui/SectionHeader";

function GoalsDashboard() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <SectionHeader
  title="Goals & Progress"
  subtitle="Stay consistent and achieve your daily health goals."
/>
      </div>

      <div
        className="
          grid
          gap-6
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {goalsData.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
          />
        ))}
      </div>

      <div
        className="
          grid
          gap-6
          grid-cols-1
          xl:grid-cols-2
        "
      >
        <StreakCard />

        <AchievementCard />
      </div>
    </section>
  );
}

export default GoalsDashboard;