import {
  LayoutDashboard,
  BarChart3,
  History,
  Calculator,
  User,
  Settings,
  Info,
} from "lucide-react";

const sidebarNavigation = [
  {
    title: "MAIN",
    items: [
      {
        id: 1,
        label: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
      },
      {
        id: 2,
        label: "Analytics",
        path: "/analytics",
        icon: BarChart3,
        badge: "NEW",
      },
      {
        id: 3,
        label: "History",
        path: "/history",
        icon: History,
      },
    ],
  },

  {
    title: "HEALTH",
    items: [
      {
        id: 4,
        label: "Calculator",
        path: "/calculator",
        icon: Calculator,
      },
    ],
  },

  {
    title: "ACCOUNT",
    items: [
      {
        id: 5,
        label: "Profile",
        path: "/profile",
        icon: User,
      },
      {
        id: 6,
        label: "Settings",
        path: "/settings",
        icon: Settings,
      },
      {
        id: 7,
        label: "About",
        path: "/about",
        icon: Info,
      },
    ],
  },
];

export default sidebarNavigation;