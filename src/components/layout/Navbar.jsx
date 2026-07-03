import {
  Bell,
  Menu,
  Moon,
  Search,
  Sun,
  UserCircle,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import { useSidebar } from "../../context/SidebarContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu size={22} />
        </button>

        <div className="relative hidden md:block">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-80 rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <button
          className="rounded-xl p-3 transition hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>

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