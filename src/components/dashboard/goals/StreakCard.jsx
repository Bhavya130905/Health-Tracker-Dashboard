import { Flame } from "lucide-react";

function StreakCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white shadow-lg">
      <div className="flex items-center gap-4">
        <Flame size={36} />

        <div>
          <h2 className="text-3xl font-bold">
            12 Days
          </h2>

          <p className="text-orange-100">
            Current Streak
          </p>
        </div>
      </div>
    </div>
  );
}

export default StreakCard;