import Card from "../ui/Card.jsx";
import { useHistory } from "../../context/HistoryContext.jsx";

function WeeklySummary() {
  const { records } = useHistory();

  if (records.length === 0) {
    return (
      <Card>
        <p className="text-slate-500">No data yet. Log some records to see summary.</p>
      </Card>
    );
  }

  const totalWeight = records.reduce((sum, r) => sum + Number(r.weight || 0), 0);
  const avgWeight = (totalWeight / records.length).toFixed(1);

  return (
    <Card>
      <h3 className="font-semibold mb-4">Weekly Summary</h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-slate-500">Average Weight</p>
          <p className="text-4xl font-bold text-blue-600">{avgWeight} kg</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">Total Records</p>
          <p className="text-4xl font-bold">{records.length}</p>
        </div>
      </div>
    </Card>
  );
}

export default WeeklySummary;