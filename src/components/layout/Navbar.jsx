import { useEffect, useRef, useState } from "react";
import {
  Bell,
  ChevronDown,
  Menu,
  Moon,
  Search,
  Sun,
} from "lucide-react";
import CommandPalette from "./CommandPalette.jsx";
import useCommandPalette from "../../hooks/useCommandPalette.js";

import { useTheme } from "../../context/ThemeContext.jsx";
import { useSidebar } from "../../context/SidebarContext.jsx";
import { useNotifications } from "../../context/NotificationContext.jsx";

import Breadcrumb from "./Breadcrumb.jsx";
import NotificationDropdown from "./NotificationDropdown.jsx";
import ProfileDropdown from "./ProfileDropdown.jsx";
import Avatar from "./Avatar.jsx";

import currentUser from "../../constants/user.js";

function Navbar() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const { toggleSidebar } = useSidebar();
  const { unreadCount } = useNotifications();
  const { open, setOpen } = useCommandPalette();
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const {
    openMobileSidebar,
  } = useSidebar();
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (

    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/90 lg:h-20 lg:px-6">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <button
          onClick={openMobileSidebar}
          className="rounded-xl p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={22} />
        </button>

        <div className="hidden md:block">
          <Breadcrumb />
        </div>
      </div>

      {/* Search */}
      <div className="hidden flex-1 max-w-md mx-6 lg:block">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            placeholder="Search... (Ctrl + K)"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm focus:border-blue-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:focus:bg-slate-900"
          />
          <CommandPalette
            open={open}
            onClose={() => setOpen(false)}
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-xl p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Toggle Theme"
        >
          {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="relative rounded-xl p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                {unreadCount}
              </span>
            )}
          </button>
          <NotificationDropdown open={notificationOpen} />
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 rounded-xl p-1 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Avatar />
            <div className="hidden text-left text-sm lg:block">
              <p className="font-semibold dark:text-white">{currentUser.name}</p>
              <p className="text-xs text-slate-500">Health Tracker</p>
            </div>
            <ChevronDown size={18} />
          </button>
          <ProfileDropdown open={profileOpen} onClose={() => setProfileOpen(false)} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;