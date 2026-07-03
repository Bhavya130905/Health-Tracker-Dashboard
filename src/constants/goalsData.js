import {
  Droplets,
  Footprints,
  Moon,
  Flame,
} from "lucide-react";

export const dailyGoals = [
  {
    id: 1,
    title: "Water Intake",
    current: 2.1,
    goal: 3,
    unit: "L",
    progress: 70,
    color: "bg-cyan-500",
    icon: Droplets,
  },
  {
    id: 2,
    title: "Steps",
    current: 6500,
    goal: 10000,
    unit: "",
    progress: 65,
    color: "bg-green-500",
    icon: Footprints,
  },
  {
    id: 3,
    title: "Sleep",
    current: 7,
    goal: 8,
    unit: "hrs",
    progress: 88,
    color: "bg-indigo-500",
    icon: Moon,
  },
  {
    id: 4,
    title: "Calories",
    current: 1950,
    goal: 2200,
    unit: "kcal",
    progress: 89,
    color: "bg-orange-500",
    icon: Flame,
  },
];