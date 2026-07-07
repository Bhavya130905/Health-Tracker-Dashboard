import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Card from "../ui/Card.jsx";
import { useHistory } from "../../context/HistoryContext.jsx";
import { createSleepChart } from "../../utils/chartHelpers.js";

function SleepChart() {
  const { records } = useHistory();

  const data = createSleepChart(records);

  return (
    <Card>
      <h2 className="mb-5 text-xl font-bold">
        Sleep Duration
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <XAxis dataKey="date" />

          <Tooltip />

          <Line
            dataKey="sleep"
            strokeWidth={3}
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default SleepChart;