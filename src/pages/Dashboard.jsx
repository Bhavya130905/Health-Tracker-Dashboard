import WelcomeBanner from "../components/dashboard/WelcomeBanner.jsx";
import StatsGrid from "../components/dashboard/StatsGrid.jsx";
import WeeklyChart from "../components/dashboard/WeeklyChart.jsx";
import HealthScore from "../components/dashboard/HealthScore.jsx";
import GoalsCard from "../components/dashboard/GoalsCard.jsx";
import RecentActivity from "../components/dashboard/RecentActivity.jsx";
import QuickActions from "../components/dashboard/QuickActions.jsx";
import HealthInsights from "../components/dashboard/HealthInsights.jsx";
import ReportButton from "../components/report/ReportButton.jsx";

function Dashboard() {
  return (
    <div className="space-y-8">
      <WelcomeBanner />

      <StatsGrid />

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <WeeklyChart />
        </div>

        <HealthScore />
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GoalsCard />
        <RecentActivity />
      </section>

      <QuickActions />

      <section>
        <HealthInsights />
      </section>

      <div className="flex justify-end">
        <ReportButton />
      </div>
    </div>
  );
}

export default Dashboard;
