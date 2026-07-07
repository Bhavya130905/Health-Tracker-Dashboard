import Card from "../ui/Card.jsx";
import { useHistory } from "../../context/HistoryContext.jsx";

function WeeklySummary() {
  const { records } = useHistory();

  if (!records.length) return null;

  const avg = (field) =>
    (
      records.reduce(
        (sum, r) => sum + Number(r[field]),
        0
      ) / records.length
    ).toFixed(1);

  const cards = [
    {
      title: "Avg Weight",
      value: avg("weight") + " kg",
    },
    {
      title: "Avg Water",
      value: avg("water") + " L",
    },
    {
      title: "Avg Sleep",
      value: avg("sleep") + " hrs",
    },
    {
      title: "Avg Steps",
      value: avg("steps"),
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <p className="text-slate-500">
            {card.title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {card.value}
          </h2>
        </Card>
      ))}
    </div>
  );
}

export default WeeklySummary;