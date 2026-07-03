import Card from "../ui/Card.jsx";
import { useHealth } from "../../context/HealthContext.jsx";

import { HeartPulse } from "lucide-react";

function HealthScore() {
  const { healthScore } = useHealth();
  const score = healthScore;

  return (
    <Card className="flex h-420 flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-slate-800">
          Health Score
        </h2>

        <p className="text-sm text-slate-500">
          Based on your latest activity
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="relative flex h-52 w-52 items-center justify-center rounded-full border-12px border-blue-600">
          <div className="text-center">
            <HeartPulse
              className="mx-auto text-red-500"
              size={34}
            />

            <h1 className="mt-3 text-5xl font-bold text-slate-800">
              {score}
            </h1>

            <p className="text-slate-500">
              Excellent
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-blue-50 p-4">
        <p className="text-sm text-slate-600">
          Keep maintaining your healthy habits.
          You're performing better than last week.
        </p>
      </div>
    </Card>
  );
}

export default HealthScore;