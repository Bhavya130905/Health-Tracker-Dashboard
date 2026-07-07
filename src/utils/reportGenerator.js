export function generateReportData({
  profile,
  healthScore,
  bmi,
  bmiCategory,
  bmr,
  calories,
  water,
  records,
}) {
  const average = (field) => {
    if (!records.length) return 0;

    return (
      records.reduce(
        (sum, item) => sum + Number(item[field] || 0),
        0
      ) / records.length
    ).toFixed(1);
  };

  return {
    profile,

    generatedAt: new Date().toLocaleString(),

    metrics: {
      bmi,
      bmiCategory: bmiCategory.label,
      bmr,
      calories,
      water,
      healthScore,
    },

    summary: {
      averageWeight: average("weight"),
      averageWater: average("water"),
      averageSleep: average("sleep"),
      averageSteps: average("steps"),
    },

    recentRecords: records.slice(0, 10),
  };
}