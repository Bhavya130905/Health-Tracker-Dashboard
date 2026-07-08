import { useState } from "react";
import {
  Sun,
  Moon,
  Monitor,
  Check,
  Trash2,
  RefreshCcw,
  Bell,
  BellOff,
} from "lucide-react";

import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import ConfirmModal from "../components/ui/ConfirmModal.jsx";

import { useTheme } from "../context/ThemeContext.jsx";
import { useHealth } from "../context/HealthContext.jsx";
import { useHistory } from "../context/HistoryContext.jsx";
import { useNotifications } from "../context/NotificationContext.jsx";
import { APP_INFO } from "../constants/app.js";

const themeOptions = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

function Settings() {
  const { theme, setTheme } = useTheme();
  const { resetProfile } = useHealth();
  const { records, clearAllHistory } = useHistory();
  const { notifications, markAllRead, clearNotifications } = useNotifications();

  const [confirmAction, setConfirmAction] = useState(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const confirmCopy = {
    resetProfile: {
      title: "Reset Profile",
      message:
        "This will reset your personal details and goals back to the default values. This action cannot be undone.",
    },
    clearHistory: {
      title: "Clear All History",
      message: `This will permanently delete all ${records.length} logged health record${
        records.length === 1 ? "" : "s"
      }. This action cannot be undone.`,
    },
  };

  function handleConfirm() {
    if (confirmAction === "resetProfile") resetProfile();
    if (confirmAction === "clearHistory") clearAllHistory();
    setConfirmAction(null);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          Settings
        </h1>
        <p className="mt-2 text-slate-500">
          Manage your appearance, notifications, and data.
        </p>
      </div>

      {/* Appearance */}
      <Card>
        <h2 className="mb-5 text-xl font-semibold text-slate-800 dark:text-white">
          Appearance
        </h2>

        <div className="grid gap-3 sm:grid-cols-3">
          {themeOptions.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => setTheme(value)}
              className={`flex items-center justify-between rounded-2xl border p-4 transition ${
                theme === value
                  ? "border-blue-500 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20"
                  : "border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              }`}
            >
              <span className="flex items-center gap-3 font-medium text-slate-700 dark:text-slate-200">
                <Icon size={18} />
                {label}
              </span>

              {theme === value && (
                <Check size={18} className="text-blue-600" />
              )}
            </button>
          ))}
        </div>
      </Card>

      {/* Notifications */}
      <Card>
        <h2 className="mb-5 text-xl font-semibold text-slate-800 dark:text-white">
          Notifications
        </h2>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-500">
            You have {unreadCount} unread notification{unreadCount === 1 ? "" : "s"}.
          </p>

          <div className="flex gap-3">
            <Button variant="secondary" onClick={markAllRead}>
              <Bell size={16} className="mr-2" />
              Mark All Read
            </Button>

            <Button variant="ghost" onClick={clearNotifications}>
              <BellOff size={16} className="mr-2" />
              Clear All
            </Button>
          </div>
        </div>
      </Card>

      {/* Data Management */}
      <Card>
        <h2 className="mb-5 text-xl font-semibold text-slate-800 dark:text-white">
          Data Management
        </h2>

        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-200">
                Reset Profile
              </p>
              <p className="text-sm text-slate-500">
                Restore your personal details and goals to their defaults.
              </p>
            </div>

            <Button
              variant="secondary"
              onClick={() => setConfirmAction("resetProfile")}
            >
              <RefreshCcw size={16} className="mr-2" />
              Reset
            </Button>
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-200">
                Clear All History
              </p>
              <p className="text-sm text-slate-500">
                Permanently delete all {records.length} logged health record
                {records.length === 1 ? "" : "s"}.
              </p>
            </div>

            <Button
              variant="danger"
              onClick={() => setConfirmAction("clearHistory")}
              disabled={!records.length}
            >
              <Trash2 size={16} className="mr-2" />
              Clear
            </Button>
          </div>
        </div>
      </Card>

      {/* About */}
      <Card>
        <h2 className="mb-3 text-xl font-semibold text-slate-800 dark:text-white">
          About
        </h2>
        <p className="text-sm text-slate-500">
          {APP_INFO.name} v{APP_INFO.version} • {APP_INFO.plan}
        </p>
      </Card>

      <ConfirmModal
        isOpen={confirmAction !== null}
        title={confirmAction ? confirmCopy[confirmAction].title : ""}
        message={confirmAction ? confirmCopy[confirmAction].message : ""}
        onCancel={() => setConfirmAction(null)}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

export default Settings;
