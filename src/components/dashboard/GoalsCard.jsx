import Card from "../ui/Card.jsx";
import { dailyGoals } from "../../constants/goalsData.js";

function GoalsCard() {
  return (
    <Card>
      <h3 className="font-semibold mb-5">Daily Goals</h3>
      <div className="space-y-5">
        {dailyGoals.map((goal) => {
          const Icon = goal.icon;
          return (
            <div key={goal.id} className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl ${goal.color.replace("bg-", "bg-") + " text-white"}`}>
                <Icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{goal.title}</span>
                  <span className="text-slate-500">
                    {goal.current} / {goal.goal} {goal.unit}
                  </span>
                </div>
                <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${goal.color}`}
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default GoalsCard;