import { ClipboardList } from "lucide-react";

function EmptyHistory() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <ClipboardList
        size={64}
        className="text-slate-300"
      />

      <h2 className="mt-6 text-2xl font-bold">
        No Records Yet
      </h2>

      <p className="mt-3 max-w-md text-slate-500">
        Start tracking your daily health to unlock
        personalized analytics and progress charts.
      </p>
    </div>
  );
}

export default EmptyHistory;