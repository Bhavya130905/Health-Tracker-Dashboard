import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Card from "../ui/Card.jsx";
import { useHistory } from "../../context/HistoryContext.jsx";
import { createWeightChart } from "../../utils/chartHelpers.js";

function WeightChart() {
  const { records } = useHistory();

  const data = createWeightChart(records);

  return (
    <Card>
      <h2 className="mb-5 text-xl font-bold">
        Weight Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <XAxis dataKey="date" />

          <Tooltip />

          <Line
            dataKey="weight"
            strokeWidth={3}
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default WeightChart;