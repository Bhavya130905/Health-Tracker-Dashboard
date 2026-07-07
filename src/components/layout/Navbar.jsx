import {
  Bell,
  Menu,
  Moon,
  Search,
  Sun,
  UserCircle,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext.jsx";
import { useSidebar } from "../../context/SidebarContext.jsx";
import Breadcrumb from "./Breadcrumb.jsx";
import { useState } from "react";
import NotificationDropdown from "./NotificationDropdown.jsx";
import { useNotifications } from "../../context/NotificationContext.jsx";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { toggleSidebar } = useSidebar();
  const [openNotifications, setOpenNotifications] = useState(false);

  const { unreadCount } = useNotifications();

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md">
      {/* Left Section */}
      <div className="flex items-center gap-5">
        <button
          onClick={toggleSidebar}
          className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu size={22} />
        </button>

        <div className="hidden md:block">
          <Breadcrumb />
        </div>
      </div>

      <div className="relative hidden lg:block">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search... (Ctrl + K)"
          className="w-80 rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <button
          className="rounded-xl p-3 transition hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>
        <div className="relative">
          <button
            onClick={() =>
              setOpenNotifications((prev) => !prev)
            }
            className="relative rounded-xl p-3 transition hover:bg-slate-100"
            aria-label="Notifications"
          >
            <Bell size={20} />

            {unreadCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {unreadCount}
              </span>
            )}
          </button>

          <NotificationDropdown
            open={openNotifications}
          />
        </div>

        <button
          onClick={toggleTheme}
          className="rounded-xl p-3 transition hover:bg-slate-100"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon size={20} />
          ) : (
            <Sun size={20} />
          )}
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2">
          <UserCircle
            size={36}
            className="text-blue-600"
          />

          <div className="hidden sm:block">
            <h3 className="text-sm font-semibold text-slate-800">
              Bhavya
            </h3>

            <p className="text-xs text-slate-500">
              Welcome Back 👋
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;