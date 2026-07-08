export function getProgressColor(color) {
  const colors = {
    red: "bg-red-500",

    blue: "bg-blue-500",

    orange: "bg-orange-500",

    indigo: "bg-indigo-500",

    emerald: "bg-emerald-500",

    violet: "bg-violet-500",
  };

  return colors[color];
}

export function getIconColor(color) {
  const colors = {
    red: "text-red-500",

    blue: "text-blue-500",

    orange: "text-orange-500",

    indigo: "text-indigo-500",

    emerald: "text-emerald-500",

    violet: "text-violet-500",
  };

  return colors[color];
}