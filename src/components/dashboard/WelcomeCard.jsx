import currentUser from "../../constants/user";

function WelcomeCard() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-white shadow-xl">
      <p className="text-sm opacity-80">
        {today}
      </p>

      <h1 className="mt-3 text-4xl font-bold">
        {greeting}, {currentUser.name.split(" ")[0]} 👋
      </h1>

      <p className="mt-4 max-w-xl text-emerald-100">
        Welcome back to VitalSync.
        Track your health, achieve your goals,
        and stay consistent every day.
      </p>
    </div>
  );
}

export default WelcomeCard;