export function calculateProgress(current, target) {
  return Math.min(
    Math.round((current / target) * 100),
    100
  );
}

export function getProgressColor(color) {
  const colors = {
    emerald: "#10B981",
    blue: "#3B82F6",
    orange: "#F97316",
    indigo: "#6366F1",
  };

  return colors[color];
}