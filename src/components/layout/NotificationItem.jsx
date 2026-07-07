import { formatTime } from "../../utils/formatTime.js";

function NotificationItem({
  notification,
}) {
  const colors = {
    success:
      "border-l-4 border-green-500",
    warning:
      "border-l-4 border-yellow-500",
    danger:
      "border-l-4 border-red-500",
    info:
      "border-l-4 border-blue-500",
  };

  return (
    <div
      className={`rounded-xl bg-slate-50 p-4 ${
        colors[notification.type]
      }`}
    >
      <div className="flex justify-between">
        <h4 className="font-semibold">
          {notification.title}
        </h4>

        <span className="text-xs text-slate-400">
          {formatTime(
            notification.createdAt
          )}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-500">
        {notification.message}
      </p>
    </div>
  );
}

export default NotificationItem;