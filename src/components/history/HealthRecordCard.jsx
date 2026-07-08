import { useState } from "react";
import Card from "../ui/Card.jsx";

function HealthRecordCard({ record, onEdit, onDelete }) {
  if (!record) return null;

  return (
    <Card className="p-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-medium">{record.date}</p>
          <p className="text-sm text-slate-500">{record.notes || "No notes"}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => onEdit(record)} className="text-blue-600">Edit</button>
          <button onClick={() => onDelete(record.id)} className="text-red-500">Delete</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
        <div>Weight: <span className="font-medium">{record.weight} kg</span></div>
        <div>Water: <span className="font-medium">{record.water} L</span></div>
        <div>Sleep: <span className="font-medium">{record.sleep} hrs</span></div>
        <div>Calories: <span className="font-medium">{record.calories}</span></div>
        <div>Steps: <span className="font-medium">{record.steps}</span></div>
      </div>
    </Card>
  );
}

export default HealthRecordCard;