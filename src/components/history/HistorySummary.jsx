import Card from "../ui/Card.jsx";
import { useHistory } from "../../context/HistoryContext.jsx";

function HistorySummary() {
  const { records } = useHistory();

  if (!records.length) return null;

  const average = (key) =>
    (
      records.reduce((sum, r) => sum + Number(r[key] || 0), 0) /
      records.length
    ).toFixed(1);

  const stats = [
    {
      title: "Average Weight",
      value: `${average("weight")} kg`,
    },
    {
      title: "Average Water",
      value: `${average("water")} L`,
    },
    {
      title: "Average Sleep",
      value: `${average("sleep")} hrs`,
    },
    {
      title: "Total Records",
      value: records.length,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <p className="text-sm text-slate-500">
            {stat.title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {stat.value}
          </h2>
        </Card>
      ))}
    </div>
  );
}

export default HistorySummary;