import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

import ChartCard from "./ChartCard";
import { sleepData } from "../../../constants/chartData";

function SleepChart() {
  return (
    <ChartCard title="Sleep Analysis">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sleepData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sleep"
              stroke="#6366f1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}

export default SleepChart;