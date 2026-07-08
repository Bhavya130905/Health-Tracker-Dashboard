import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

import ChartCard from "./ChartCard";
import { caloriesData } from "../../../constants/chartData";

function CaloriesChart() {
  return (
    <ChartCard title="Calories">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={caloriesData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="consumed"
              fill="#3b82f6"
              radius={[5, 5, 0, 0]}
            />

            <Bar
              dataKey="burned"
              fill="#f97316"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}

export default CaloriesChart;