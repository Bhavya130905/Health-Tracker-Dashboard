import { useEffect, useRef, useState } from "react";
import {
  Bell,
  ChevronDown,
  Menu,
  Moon,
  Search,
  Sun,
} from "lucide-react";

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

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setNotificationOpen(false);
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        h-20
        items-center
        justify-between
        border-b
        border-slate-200
        bg-white/80
        px-6
        backdrop-blur-xl
        transition-colors

        dark:border-slate-700
        dark:bg-slate-900/80
      "
    >
      {/* Left */}

      <div className="flex items-center gap-5">

        <button
          onClick={toggleSidebar}
          className="
            rounded-xl
            p-2
            transition

            hover:bg-slate-100
            dark:hover:bg-slate-800

            lg:hidden
          "
        >
          <Menu size={22} />
        </button>

        <div className="hidden md:block">
          <Breadcrumb />
        </div>

      </div>

      {/* Search */}

      <div className="relative hidden lg:block">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          placeholder="Search... (Ctrl + K)"
          className="
            w-80
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            py-3
            pl-11
            pr-4
            transition

            focus:border-blue-500
            focus:bg-white
            focus:outline-none

            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            dark:placeholder:text-slate-400
            dark:focus:bg-slate-900
          "
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-2">

        {/* Theme */}

        <button
          onClick={toggleTheme}
          className="
            rounded-xl
            p-3
            transition

            hover:bg-slate-100
            dark:hover:bg-slate-800
          "
          aria-label="Toggle Theme"
        >
          {resolvedTheme === "dark" ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>

        {/* Notifications */}

        <div
          className="relative"
          ref={notificationRef}
        >
          <button
            onClick={() =>
              setNotificationOpen((prev) => !prev)
            }
            className="
              relative
              rounded-xl
              p-3
              transition

              hover:bg-slate-100
              dark:hover:bg-slate-800
            "
          >
            <Bell size={20} />

            {unreadCount > 0 && (
              <span
                className="
                  absolute
                  -right-1
                  -top-1
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-red-500
                  text-xs
                  font-semibold
                  text-white
                "
              >
                {unreadCount}
              </span>
            )}
          </button>

          <NotificationDropdown
            open={notificationOpen}
          />

        </div>

        {/* Profile */}

        <div className="relative">

          <button
            onClick={() =>
              setProfileOpen((prev) => !prev)
            }
            className="
              flex
              items-center
              gap-3
              rounded-xl
              p-2
              transition

              hover:bg-slate-100
              dark:hover:bg-slate-800
            "
          >

            <Avatar />

            <div className="hidden text-left lg:block">

              <p className="font-semibold dark:text-white">
                {currentUser.name}
              </p>

              <p className="text-xs text-slate-500">
                Health Tracker
              </p>

            </div>

            <ChevronDown size={18} />

          </button>

          <ProfileDropdown
            open={profileOpen}
            onClose={() => setProfileOpen(false)}
          />

        </div>

      </div>

    </header>
  );
}

export default Navbar;