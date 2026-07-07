import HealthRecordForm from "../components/history/HealthRecordForm.jsx";
import HealthHistoryTable from "../components/history/HealthHistoryTable.jsx";
import HistorySummary from "../components/history/HistorySummary.jsx";

function History() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Health History
        </h1>

        <p className="text-slate-500 mt-2">
          Log your daily health records and monitor your progress over time.
        </p>
      </div>

      <HealthRecordForm />

      <HistorySummary />

      <HealthHistoryTable />
    </div>
  );
}

export default History;