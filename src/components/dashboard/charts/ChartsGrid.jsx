import WeeklyStepsChart from "./WeeklyStepsChart";
import CaloriesChart from "./CaloriesChart";
import SleepChart from "./SleepChart";

import FadeInSection from "../../ui/FadeInSection";

function ChartsGrid() {
  return (
    <FadeInSection className="grid gap-6 xl:grid-cols-2">
      <WeeklyStepsChart />

      <CaloriesChart />

      <div className="xl:col-span-2">
        <SleepChart />
      </div>
    </FadeInSection>
  );
}

export default ChartsGrid;