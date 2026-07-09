import WeeklyStepsChart from "./WeeklyStepsChart";
import CaloriesChart from "./CaloriesChart";
import SleepChart from "./SleepChart";

import FadeInSection from "../../ui/FadeInSection";

function ChartsGrid() {
  return (
    <FadeInSection
      className="
        grid
        gap-6
        grid-cols-1
        xl:grid-cols-2
      "
    >
      <div className="h-full">
        <WeeklyStepsChart />
      </div>

      <div className="h-full">
        <CaloriesChart />
      </div>

      <div className="xl:col-span-2">
        <SleepChart />
      </div>
    </FadeInSection>
  );
}

export default ChartsGrid;