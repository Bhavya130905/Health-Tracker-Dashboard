import {
  Footprints,
  Droplets,
  Moon,
  Dumbbell,
  Weight,
  Flame,
} from "lucide-react";

const activityData = [
  {
    id: 1,
    title: "Morning Walk Completed",
    description: "8,342 steps recorded",
    time: "2 hours ago",
    status: "Completed",
    color: "emerald",
    icon: Footprints,
  },

  {
    id: 2,
    title: "Water Goal Updated",
    description: "2.3 Litres consumed",
    time: "3 hours ago",
    status: "On Track",
    color: "blue",
    icon: Droplets,
  },

  {
    id: 3,
    title: "Workout Logged",
    description: "Chest & Triceps • 58 mins",
    time: "Yesterday",
    status: "Completed",
    color: "orange",
    icon: Dumbbell,
  },

  {
    id: 4,
    title: "Sleep Recorded",
    description: "7.5 Hours",
    time: "Yesterday",
    status: "Healthy",
    color: "indigo",
    icon: Moon,
  },

  {
    id: 5,
    title: "Weight Updated",
    description: "70 kg",
    time: "2 days ago",
    status: "Updated",
    color: "violet",
    icon: Weight,
  },

  {
    id: 6,
    title: "Calories Logged",
    description: "1850 kcal",
    time: "2 days ago",
    status: "Completed",
    color: "red",
    icon: Flame,
  },
];

export default activityData;