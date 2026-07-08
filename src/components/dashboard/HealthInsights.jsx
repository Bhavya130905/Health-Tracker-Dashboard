import Card from "../ui/Card.jsx";
import { useHealth } from "../../context/HealthContext.jsx";
import { getHealthRecommendation } from "../../utils/recommendations.js";

function HealthInsights() {
  const { bmi, water } = useHealth();
  const recommendation = getHealthRecommendation({ bmi, water });

  return (
    <Card>
      <h3 className="font-semibold mb-3">Health Insights</h3>
      <div className={`p-5 rounded-2xl border-l-4 ${recommendation.type === "success" ? "border-green-500 bg-green-50" : "border-amber-500 bg-amber-50"}`}>
        <p className="font-medium">{recommendation.title}</p>
        <p className="mt-2 text-slate-600">{recommendation.message}</p>
      </div>
    </Card>
  );
}

export default HealthInsights;