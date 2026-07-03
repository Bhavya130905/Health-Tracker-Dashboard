import Card from "../ui/Card.jsx";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { weeklyHealthData } from "../../constants/charts.js";

function WeeklyChart() {
  return (
    <Card className="h-420">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Weekly Progress
        </h2>

        <p className="text-sm text-slate-500">
          Weight trend over the last 7 days
        </p>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={weeklyHealthData}>
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="weight"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default WeeklyChart;