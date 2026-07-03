export function getHealthRecommendation({
  bmi,
  water,
}) {
  if (bmi < 18.5) {
    return {
      type: "warning",
      title: "Underweight",
      message:
        "Increase your calorie intake with nutritious foods and include strength training.",
    };
  }

  if (bmi >= 25) {
    return {
      type: "warning",
      title: "Overweight",
      message:
        "Aim for a calorie deficit and include 30–45 minutes of physical activity daily.",
    };
  }

  if (water < 2) {
    return {
      type: "info",
      title: "Hydration",
      message:
        "Increase your daily water intake to improve hydration and overall health.",
    };
  }

  return {
    type: "success",
    title: "Excellent",
    message:
      "Your health metrics look good. Continue maintaining your healthy lifestyle.",
  };
}