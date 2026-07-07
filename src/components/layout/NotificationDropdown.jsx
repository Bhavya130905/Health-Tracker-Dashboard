import NotificationItem from "./NotificationItem.jsx";
import { useNotifications } from "../../context/NotificationContext.jsx";

function NotificationDropdown({
  open,
}) {
  const {
    notifications,
    markAllRead,
    clearNotifications,
  } = useNotifications();

  if (!open) return null;

  return (
    <div className="absolute right-0 top-16 z-50 w-96 rounded-2xl border bg-white shadow-xl">
      <div className="flex items-center justify-between border-b p-4">
        <h3 className="font-bold">
          Notifications
        </h3>

        <div className="space-x-2">
          <button
            onClick={markAllRead}
            className="text-xs text-blue-600"
          >
            Read All
          </button>

          <button
            onClick={
              clearNotifications
            }
            className="text-xs text-red-600"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="max-h-96 space-y-3 overflow-y-auto p-4">
        {notifications.length === 0 ? (
          <p className="text-center text-slate-500">
            No Notifications
          </p>
        ) : (
          notifications.map((item) => (
            <NotificationItem
              key={item.id}
              notification={item}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NotificationDropdown;