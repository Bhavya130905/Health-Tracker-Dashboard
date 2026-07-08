import { useEffect, useState } from "react";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardGrid from "../components/dashboard/DashboardGrid";
import DashboardLoader from "../components/dashboard/DashboardLoader";

import MotionWrapper from "../components/ui/MotionWrapper";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <DashboardLoader />;
  }

  return (
    <MotionWrapper>
      <div className="space-y-8">
        <DashboardHeader />

        <DashboardGrid />
      </div>
    </MotionWrapper>
  );
}

export default Dashboard;