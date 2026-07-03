import {
  LayoutDashboard,
  Calculator,
  History,
  Settings,
  Info,
  User,
} from "lucide-react";

export const navigation = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    title: "Calculator",
    path: "/calculator",
    icon: Calculator,
  },
  {
    id: 3,
    title: "History",
    path: "/history",
    icon: History,
  },
  {
    id: 4,
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    id: 5,
    title: "About",
    path: "/about",
    icon: Info,
  },
  {
    id: 6,
    title: "Health Profile",
    path: "/profile",
    icon: User,
  }
];