// Health-Tracker-Dashboard-main/src/components/dashboard/WelcomeBanner.jsx
import { useHealth } from "../../context/HealthContext.jsx";
import Button from "../ui/Button.jsx";

function WelcomeBanner() {
  const { healthScore, profile } = useHealth();

  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  const hour = new Date().getHours();
  let greeting = "Good morning";
  if (hour >= 12 && hour < 17) greeting = "Good afternoon";
  if (hour >= 17) greeting = "Good evening";

  return (
    <section className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-8 text-white relative overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        <div className="flex-1">
          <p className="text-sm text-blue-100">{today}</p>

          <h1 className="mt-2 text-4xl font-bold">
            {greeting}, {profile.name} 👋
          </h1>

          <p className="mt-3 max-w-xl text-blue-100">
            Welcome back to VitalSync. Keep building healthy habits every day.
          </p>
        </div>

        <div className="flex flex-col items-end gap-4 min-w-[180px]">
          <div className="rounded-2xl bg-white/20 px-6 py-3 backdrop-blur text-right">
            <p className="text-sm text-blue-100">Health Score</p>
            <h2 className="text-4xl font-bold">
              {healthScore}
              <span className="text-xl">/100</span>
            </h2>
          </div>

          {/* Fixed button - always visible */}
          <Button 
            className=" text-blue-600 hover:bg-slate-100 shadow-lg font-semibold px-6
                       dark:bg-white dark:text-blue-700 dark:hover:bg-slate-100"
          >
            Complete Health Check
          </Button>
        </div>
      </div>
    </section>
  );
}

export default WelcomeBanner;