import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Card from "../ui/Card.jsx";
import { useHistory } from "../../context/HistoryContext.jsx";
import { createWaterChart } from "../../utils/chartHelpers.js";

function WaterChart() {
  const { records } = useHistory();

  const data = createWaterChart(records);

  return (
    <Card>
      <h2 className="mb-5 text-xl font-bold">
        Water Intake
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <XAxis dataKey="date" />

          <Tooltip />

          <Line
            dataKey="water"
            strokeWidth={3}
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default WaterChart;