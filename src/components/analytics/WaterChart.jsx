import Card from "../ui/Card.jsx";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { createWaterChart } from "../../utils/chartHelpers.js";
import { useHistory } from "../../context/HistoryContext.jsx";

function WaterChart() {
  const { records } = useHistory();
  const data = createWaterChart(records);

  return (
    <Card>
      <h3 className="font-semibold mb-4">Water Intake</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="water" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default WaterChart;