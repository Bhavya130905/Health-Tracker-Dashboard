import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Card from "../ui/Card.jsx";
import { useHistory } from "../../context/HistoryContext.jsx";
import { createStepsChart } from "../../utils/chartHelpers.js";

function StepsChart() {
  const { records } = useHistory();

  const data = createStepsChart(records);

  return (
    <Card>
      <h2 className="mb-5 text-xl font-bold">
        Steps Taken
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <XAxis dataKey="date" />

          <Tooltip />

          <Line
            dataKey="steps"
            strokeWidth={3}
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default StepsChart;