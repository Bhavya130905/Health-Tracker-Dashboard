import Card from "../ui/Card.jsx";
import { dailyGoals } from "../../constants/goalsData.js";

function GoalsCard() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-bold text-slate-800">
        Today's Goals
      </h2>

      <div className="space-y-5">
        {dailyGoals.map((goal) => {
          const Icon = goal.icon;

          return (
            <div key={goal.id}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-slate-600" />

                  <span className="font-medium">
                    {goal.title}
                  </span>
                </div>

                <span className="text-sm text-slate-500">
                  {goal.current} / {goal.goal} {goal.unit}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className={`${goal.color} h-full rounded-full transition-all duration-700`}
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default GoalsCard;