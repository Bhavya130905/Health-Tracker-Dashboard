import {
  Footprints,
  Droplets,
  Flame,
  Moon,
} from "lucide-react";

const goalsData = [
  {
    id: 1,
    title: "Daily Steps",
    current: 8342,
    target: 10000,
    unit: "steps",
    icon: Footprints,
    color: "emerald",
  },
  {
    id: 2,
    title: "Water Intake",
    current: 2.3,
    target: 3,
    unit: "L",
    icon: Droplets,
    color: "blue",
  },
  {
    id: 3,
    title: "Calories",
    current: 1850,
    target: 2200,
    unit: "kcal",
    icon: Flame,
    color: "orange",
  },
  {
    id: 4,
    title: "Sleep",
    current: 7.5,
    target: 8,
    unit: "hrs",
    icon: Moon,
    color: "indigo",
  },
];

export default goalsData;