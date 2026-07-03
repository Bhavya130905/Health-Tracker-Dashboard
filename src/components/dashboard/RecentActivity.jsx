import Card from "../ui/Card.jsx";
import { recentActivities } from "../../constants/activityData.js";

function RecentActivity() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-bold text-slate-800">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {recentActivities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-center gap-4"
            >
              <div className="rounded-xl bg-slate-100 p-3">
                <Icon
                  size={20}
                  className="text-blue-600"
                />
              </div>

              <div>
                <p className="font-medium text-slate-800">
                  {activity.title}
                </p>

                <p className="text-sm text-slate-500">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default RecentActivity;