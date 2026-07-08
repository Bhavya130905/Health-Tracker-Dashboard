import {
  Award,
  Medal,
  Trophy,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "10K Steps",
  },
  {
    icon: Medal,
    title: "7 Day Streak",
  },
  {
    icon: Award,
    title: "Hydration Pro",
  },
];

function AchievementCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-5 text-xl font-semibold dark:text-white">
        Achievements
      </h2>

      <div className="space-y-4">
        {achievements.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-3"
            >
              <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
                <Icon size={20} />
              </div>

              <span className="font-medium dark:text-white">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AchievementCard;