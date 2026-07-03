import Card from "../ui/Card.jsx";
import { TrendingUp } from "lucide-react";

function StatCard({
  title,
  value,
  unit,
  change,
  description,
  icon: Icon,
  color,
  bgColor,
}) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            {value}
            <span className="ml-1 text-lg text-slate-500">
              {unit}
            </span>
          </h2>
        </div>

        <div
          className={`h-14 w-14 rounded-2xl ${bgColor} flex items-center justify-center`}
        >
          <Icon
            className={color}
            size={28}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-green-600">
          <TrendingUp size={18} />

          <span className="text-sm font-medium">
            {change}
          </span>
        </div>

        <span className="text-sm text-slate-500">
          {description}
        </span>
      </div>
    </Card>
  );
}

export default StatCard;