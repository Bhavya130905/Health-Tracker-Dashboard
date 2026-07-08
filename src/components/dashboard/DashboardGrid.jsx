import HealthSummaryGrid from "./HealthSummaryGrid";
import ChartsGrid from "./charts/ChartsGrid";
import ActivityTimeline from "./activity/ActivityTimeline";
import GoalsDashboard from "./goals/GoalsDashboard";
import QuickActions from "./quickActions/QuickActions";

function DashboardGrid() {
  return (
    <div className="space-y-8">
      <HealthSummaryGrid />

      <ChartsGrid />

      <ActivityTimeline />

      <GoalsDashboard />

      <QuickActions />
    </div>
  );
}

export default DashboardGrid;