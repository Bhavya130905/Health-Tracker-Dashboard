import Button from "../ui/Buttons.jsx";
import { useHealth } from "../../context/HealthContext.jsx";

function WelcomeBanner() {
  const { profile, healthScore } = useHealth();
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="rounded-3xl bg-linear-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-blue-100">{today}</p>

          <h1 className="mt-2 text-4xl font-bold">
            {greeting}, {profile.name} 👋
          </h1>

          <p className="mt-3 max-w-xl text-blue-100">
            Welcome back to VitalSync. Keep building healthy habits every day.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 lg:items-end">
          <div className="rounded-2xl bg-white/20 px-6 py-3 backdrop-blur">
            <p className="text-sm text-blue-100">
              Health Score
            </p>

            <h2 className="text-4xl font-bold">
              {healthScore}
              <span className="text-xl">/100</span>
            </h2>
          </div>

          <Button className="bg-white text-blue-600 hover:bg-slate-100">
            Complete Health Check
          </Button>
        </div>
      </div>
    </section>
  );
}

export default WelcomeBanner;