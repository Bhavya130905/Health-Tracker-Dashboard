import { useEffect, useRef } from "react";
import {
  CircleHelp,
  LogOut,
  Moon,
  Settings,
  Sun,
  User,
  Monitor,
  Check,
} from "lucide-react";

import currentUser from "../../constants/user.js";
import DropdownItem from "./DropdownItem.jsx";
import Avatar from "./Avatar.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";

function ProfileDropdown({ open, onClose }) {
  const ref = useRef(null);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }

    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!open) return null;

  const ThemeButton = ({ icon: Icon, label, value }) => (
    <button
      onClick={() => setTheme(value)}
      className={`
        flex w-full items-center justify-between
        rounded-xl px-4 py-3
        transition
        hover:bg-slate-100
        dark:hover:bg-slate-800
      `}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} />
        <span>{label}</span>
      </div>

      {theme === value && (
        <Check
          size={18}
          className="text-blue-600"
        />
      )}
    </button>
  );

  return (
    <div
      ref={ref}
      className="
        absolute
        right-0
        top-16
        z-50
        w-72
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-xl
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* User */}

      <div className="flex items-center gap-3 border-b border-slate-200 p-5 dark:border-slate-700">

        <Avatar />

        <div>

          <h3 className="font-semibold dark:text-white">
            {currentUser.name}
          </h3>

          <p className="text-sm text-slate-500">
            {currentUser.email}
          </p>

        </div>

      </div>

      {/* Menu */}

      <div className="p-2">

        <DropdownItem
          icon={User}
          label="My Profile"
        />

        <DropdownItem
          icon={Settings}
          label="Settings"
        />

        <div className="my-2 border-t border-slate-200 dark:border-slate-700" />

        <ThemeButton
          icon={Sun}
          label="Light Theme"
          value="light"
        />

        <ThemeButton
          icon={Moon}
          label="Dark Theme"
          value="dark"
        />

        <ThemeButton
          icon={Monitor}
          label="System Theme"
          value="system"
        />

        <div className="my-2 border-t border-slate-200 dark:border-slate-700" />

        <DropdownItem
          icon={CircleHelp}
          label="Help & Support"
        />

        <DropdownItem
          icon={LogOut}
          label="Logout"
          danger
        />

      </div>

    </div>
  );
}

export default ProfileDropdown;