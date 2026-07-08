import Card from "../ui/Card.jsx";
import { dashboardStats } from "../../constants/dashboardData.js";

function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {dashboardStats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.id} className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl ${stat.bgColor}`}>
              <Icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm text-slate-500">{stat.title}</p>
              <p className="text-3xl font-bold">{stat.value}{stat.unit}</p>
              <p className="text-xs text-green-600">{stat.change}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default StatsGrid;