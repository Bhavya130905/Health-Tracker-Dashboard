export function getStatusColor(status) {
  switch (status) {
    case "Completed":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300";

    case "On Track":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300";

    case "Healthy":
      return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300";

    case "Updated":
      return "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300";

    default:
      return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
  }
}

export function getIconBackground(color) {
  const colors = {
    emerald: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40",
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/40",
    orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/40",
    indigo: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40",
    violet: "bg-violet-100 text-violet-600 dark:bg-violet-900/40",
    red: "bg-red-100 text-red-600 dark:bg-red-900/40",
  };

  return colors[color];
}