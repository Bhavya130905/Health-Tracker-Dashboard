import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Card from "../ui/Card.jsx";
import { weeklyHealthData } from "../../constants/charts.js";

function WeeklyChart() {
  return (
    <Card>
      <h3 className="font-semibold mb-4">Weekly Progress</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weeklyHealthData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="weight" stroke="#3b82f6" strokeWidth={3} />
            <Line type="monotone" dataKey="water" stroke="#22d3ee" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default WeeklyChart;