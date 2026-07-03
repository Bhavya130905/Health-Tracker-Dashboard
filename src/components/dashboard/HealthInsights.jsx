import Card from "../ui/Card.jsx";
import { useHealth } from "../../context/HealthContext.jsx";
import { getHealthRecommendation } from "../../utils/recommendations.js";

function HealthInsights() {
  const {
    bmi,
    bmiCategory,
    bmr,
    calories,
    water,
    idealWeight,
  } = useHealth();

  const recommendation = getHealthRecommendation({
    bmi,
    water,
  });

  return (
    <Card>
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Health Insights
      </h2>

      <div className="space-y-5">

        <Insight
          label="BMI"
          value={bmi}
          extra={bmiCategory.label}
          color={bmiCategory.color}
        />

        <Insight
          label="BMR"
          value={`${bmr} kcal`}
        />

        <Insight
          label="Daily Calories"
          value={`${calories} kcal`}
        />

        <Insight
          label="Water Intake"
          value={`${water} L`}
        />

        <Insight
          label="Ideal Weight"
          value={`${idealWeight.min} - ${idealWeight.max} kg`}
        />

      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 p-5">
        <h3 className="font-semibold text-blue-700">
          💡 {recommendation.title}
        </h3>

        <p className="mt-2 text-sm text-slate-600">
          {recommendation.message}
        </p>
      </div>
    </Card>
  );
}

function Insight({
  label,
  value,
  extra,
  color = "text-slate-600",
}) {
  return (
    <div className="flex items-center justify-between border-b pb-3 last:border-none">
      <span className="font-medium text-slate-600">
        {label}
      </span>

      <div className="text-right">
        <div className="font-bold text-slate-800">
          {value}
        </div>

        {extra && (
          <div className={`text-sm ${color}`}>
            {extra}
          </div>
        )}
      </div>
    </div>
  );
}

export default HealthInsights;