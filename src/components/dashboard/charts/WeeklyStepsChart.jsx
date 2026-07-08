import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartCard from "./ChartCard";
import { weeklyStepsData } from "../../../constants/chartData";

function WeeklyStepsChart() {
  return (
    <ChartCard title="Weekly Steps">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={weeklyStepsData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="steps"
              stroke="#10b981"
              fill="#10b98133"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}

export default WeeklyStepsChart;