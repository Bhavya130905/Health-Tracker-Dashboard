import { Pencil, Trash2 } from "lucide-react";

function HealthHistoryRow({
  record,
  onEdit,
  onDelete,
}) {
  return (
    <tr className="border-b hover:bg-slate-50 transition-colors">
      <td className="py-4">{record.date}</td>

      <td>{record.weight} kg</td>

      <td>{record.water} L</td>

      <td>{record.sleep} hrs</td>

      <td>{record.calories}</td>

      <td>{record.steps}</td>

      <td>
        <div className="flex gap-3">
          <button onClick={() => onEdit(record)}>
            <Pencil
              size={18}
              className="text-blue-600"
            />
          </button>

          <button
            onClick={() => onDelete(record.id)}
          >
            <Trash2
              size={18}
              className="text-red-500"
            />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default HealthHistoryRow;