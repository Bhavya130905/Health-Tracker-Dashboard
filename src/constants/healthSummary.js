import {
  Heart,
  Droplets,
  Flame,
  Moon,
  Footprints,
  Weight,
} from "lucide-react";

const healthSummary = [
  {
    id: 1,
    title: "Heart Rate",
    value: 74,
    unit: "BPM",
    icon: Heart,
    color: "red",
    progress: 74,
    trend: "+2%",
  },

  {
    id: 2,
    title: "Water Intake",
    value: 2.3,
    unit: "L",
    icon: Droplets,
    color: "blue",
    progress: 77,
    trend: "+8%",
  },

  {
    id: 3,
    title: "Calories",
    value: 1850,
    unit: "kcal",
    icon: Flame,
    color: "orange",
    progress: 61,
    trend: "-4%",
  },

  {
    id: 4,
    title: "Sleep",
    value: 7.5,
    unit: "hrs",
    icon: Moon,
    color: "indigo",
    progress: 83,
    trend: "+6%",
  },

  {
    id: 5,
    title: "Steps",
    value: 8342,
    unit: "",
    icon: Footprints,
    color: "emerald",
    progress: 83,
    trend: "+11%",
  },

  {
    id: 6,
    title: "Weight",
    value: 70,
    unit: "kg",
    icon: Weight,
    color: "violet",
    progress: 68,
    trend: "-1%",
  },
];

export default healthSummary;