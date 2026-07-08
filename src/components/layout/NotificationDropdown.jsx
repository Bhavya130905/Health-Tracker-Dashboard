import { useEffect, useRef } from "react";
import { Bell } from "lucide-react";

import NotificationItem from "./NotificationItem.jsx";
import { useNotifications } from "../../context/NotificationContext.jsx";

function NotificationDropdown({
  open,
}) {
  const ref = useRef(null);

  const {
    notifications,
    markAllRead,
    clearNotifications,
  } = useNotifications();

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        ref.current?.blur();
      }
    }

    document.addEventListener(
      "keydown",
      handleEsc
    );

    return () =>
      document.removeEventListener(
        "keydown",
        handleEsc
      );
  }, []);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="
        absolute
        right-0
        top-16
        z-50
        w-[26rem]
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-xl

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-700">

        <div className="flex items-center gap-2">

          <Bell
            size={20}
            className="text-blue-600"
          />

          <h3 className="font-bold dark:text-white">
            Notifications
          </h3>

        </div>

        <div className="flex gap-2">

          <button
            onClick={markAllRead}
            className="
              rounded-lg
              px-3
              py-1
              text-xs
              font-medium
              text-blue-600
              hover:bg-blue-50
              dark:hover:bg-slate-800
            "
          >
            Read All
          </button>

          <button
            onClick={clearNotifications}
            className="
              rounded-lg
              px-3
              py-1
              text-xs
              font-medium
              text-red-600
              hover:bg-red-50
              dark:hover:bg-slate-800
            "
          >
            Clear
          </button>

        </div>

      </div>

      {/* Body */}

      <div className="max-h-[420px] overflow-y-auto p-4">

        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10">

            <Bell
              size={42}
              className="text-slate-400"
            />

            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              You're all caught up!
            </p>

          </div>
        ) : (
          <div className="space-y-3">

            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default NotificationDropdown;