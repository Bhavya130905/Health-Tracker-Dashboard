import WeightChart from "../components/analytics/WeightChart.jsx";
import WaterChart from "../components/analytics/WaterChart.jsx";
import SleepChart from "../components/analytics/SleepChart.jsx";
import StepsChart from "../components/analytics/StepsChart.jsx";
import WeeklySummary from "../components/analytics/WeeklySummary.jsx";

function Analytics() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Track your health trends using your recorded data.
        </p>
      </div>

      <WeeklySummary />

      <div className="grid lg:grid-cols-2 gap-6">
        <WeightChart />

        <WaterChart />

        <SleepChart />

        <StepsChart />
      </div>
    </div>
  );
}

export default Analytics;