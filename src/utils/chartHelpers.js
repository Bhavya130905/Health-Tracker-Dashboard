export function getLast7Days(records) {
  return records
    .slice()
    .sort(
      (a, b) =>
        new Date(a.createdAt) -
        new Date(b.createdAt)
    )
    .slice(-7);
}

export function createWeightChart(records) {
  return getLast7Days(records).map((record) => ({
    date: new Date(record.date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    }),
    weight: record.weight,
  }));
}

export function createWaterChart(records) {
  return getLast7Days(records).map((record) => ({
    date: new Date(record.date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    }),
    water: record.water,
  }));
}

export function createSleepChart(records) {
  return getLast7Days(records).map((record) => ({
    date: new Date(record.date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    }),
    sleep: record.sleep,
  }));
}

export function createStepsChart(records) {
  return getLast7Days(records).map((record) => ({
    date: new Date(record.date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    }),
    steps: record.steps,
  }));
}