import {
  HeartPulse,
  Scale,
  Droplets,
  Flame,
} from "lucide-react";

import StatCard from "./StatCard.jsx";
import { useHealth } from "../../context/HealthContext.jsx";

function StatsGrid() {
  const {
    profile,
    healthScore,
    water,
    calories,
  } = useHealth();

  const stats = [
    {
      id: 1,
      title: "Health Score",
      value: healthScore,
      unit: "/100",
      change: "Live",
      description: "Calculated",
      icon: HeartPulse,
      color: "text-red-500",
      bgColor: "bg-red-100",
    },
    {
      id: 2,
      title: "Weight",
      value: profile.weight,
      unit: "kg",
      change: "Current",
      description: "Body Weight",
      icon: Scale,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      id: 3,
      title: "Water",
      value: water,
      unit: "L",
      change: "Daily",
      description: "Recommended",
      icon: Droplets,
      color: "text-cyan-500",
      bgColor: "bg-cyan-100",
    },
    {
      id: 4,
      title: "Calories",
      value: calories,
      unit: "kcal",
      change: "Daily",
      description: "Maintenance",
      icon: Flame,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </section>
  );
}

export default StatsGrid;