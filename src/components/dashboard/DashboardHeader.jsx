import PageHeader from "../ui/PageHeader";

function DashboardHeader() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <PageHeader
      title={`${greeting}, Bhavya 👋`}
      subtitle="Track your health, goals, and wellness insights in one place."
    />
  );
}

export default DashboardHeader;