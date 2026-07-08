import Card from "../ui/Card.jsx";
import { recentActivities } from "../../constants/activityData.js";

function RecentActivity() {
  return (
    <Card>
      <h3 className="font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {recentActivities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-center gap-4">
              <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <Icon size={20} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{activity.title}</p>
                <p className="text-xs text-slate-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default RecentActivity;