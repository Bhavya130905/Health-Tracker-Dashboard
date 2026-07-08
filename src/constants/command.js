import {
  LayoutDashboard,
  BarChart3,
  History,
  Calculator,
  User,
  Settings,
} from "lucide-react";

const command = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    title: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    id: 3,
    title: "History",
    path: "/history",
    icon: History,
  },
  {
    id: 4,
    title: "Health Calculator",
    path: "/calculator",
    icon: Calculator,
  },
  {
    id: 5,
    title: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    id: 6,
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default command;