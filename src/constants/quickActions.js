import {
  Droplets,
  Utensils,
  Dumbbell,
  Weight,
  Moon,
  Brain,
} from "lucide-react";

const quickActions = [
  {
    id: 1,
    title: "Add Water",
    description: "Log today's water intake",
    icon: Droplets,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Log Meal",
    description: "Record calories",
    icon: Utensils,
    color: "bg-orange-500",
  },
  {
    id: 3,
    title: "Workout",
    description: "Save today's workout",
    icon: Dumbbell,
    color: "bg-emerald-500",
  },
  {
    id: 4,
    title: "Update Weight",
    description: "Track body weight",
    icon: Weight,
    color: "bg-violet-500",
  },
  {
    id: 5,
    title: "Log Sleep",
    description: "Record sleep hours",
    icon: Moon,
    color: "bg-indigo-500",
  },
  {
    id: 6,
    title: "AI Health",
    description: "Coming Soon",
    icon: Brain,
    color: "bg-pink-500",
  },
];

export default quickActions;