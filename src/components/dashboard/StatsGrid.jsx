import StatCard from "./StatCard";
import { dashboardStats } from "../../constants/dashboardData.js";

function StatsGrid() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <StatCard
          key={stat.id}
          {...stat}
        />
      ))}
    </section>
  );
}

export default StatsGrid;