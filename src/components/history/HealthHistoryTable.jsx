// Health-Tracker-Dashboard-main/src/components/history/HealthHistoryTable.jsx
import { useEffect, useMemo, useState } from "react";
import {
  Search,
  ArrowUpDown,
} from "lucide-react";

import Card from "../ui/Card.jsx";
import ConfirmModal from "../ui/ConfirmModal.jsx";
import EmptyHistory from "./EmptyHistory.jsx";
import { useHistory } from "../../context/HistoryContext.jsx";
import HealthHistoryRow from "../history/HealthHistoryRow.jsx";
import EditRecordModal from "../history/EditRecordModal.jsx";

const ITEMS_PER_PAGE = 5;

function HealthHistoryTable() {
  const { updateRecord } = useHistory();

  const [editingRecord, setEditingRecord] =
    useState(null);
  const { records, deleteRecord } = useHistory();

  const [search, setSearch] = useState("");
  const [sortNewest, setSortNewest] =
    useState(true);

  const [page, setPage] = useState(1);

  const [selectedId, setSelectedId] =
    useState(null);

  const filteredRecords = useMemo(() => {
    let data = [...records];

    if (search.trim()) {
      const query = search.toLowerCase();

      data = data.filter(
        (record) =>
          record.date
            ?.toLowerCase()
            .includes(query) ||
          record.notes
            ?.toLowerCase()
            .includes(query)
      );
    }

    data.sort((a, b) =>
      sortNewest
        ? new Date(b.createdAt) -
        new Date(a.createdAt)
        : new Date(a.createdAt) -
        new Date(b.createdAt)
    );

    return data;
  }, [records, search, sortNewest]);

  useEffect(() => {
    setPage(1);
  }, [search, sortNewest]);

  const totalPages = Math.ceil(
    filteredRecords.length / ITEMS_PER_PAGE
  );

  const paginated = filteredRecords.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  if (!records.length) {
    return (
      <Card>
        <EmptyHistory />
      </Card>
    );
  }

  return (
    <>
      <Card>
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-2xl font-bold">
            Health History
          </h2>

          <div className="flex gap-3">
            <div className="relative">
              <Search
                className="absolute left-3 top-3 text-slate-400"
                size={18}
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search..."
                className="rounded-xl border py-2 pl-10 pr-4"
              />
            </div>

            <button
              onClick={() =>
                setSortNewest(!sortNewest)
              }
              className="rounded-xl border p-2"
            >
              <ArrowUpDown size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b text-left text-sm font-medium text-slate-500">
              <tr>
                <th className="py-4 text-left">Date</th>
                <th className="py-4 text-left">Weight</th>
                <th className="py-4 text-left">Water</th>
                <th className="py-4 text-left">Sleep</th>
                <th className="py-4 text-left">Calories</th>
                <th className="py-4 text-left">Steps</th>
                <th className="py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((record) => (
                <HealthHistoryRow
                  key={record.id}
                  record={record}
                  onEdit={setEditingRecord}
                  onDelete={setSelectedId}
                />
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {Array.from(
              { length: totalPages },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`rounded-lg px-3 py-2 ${page === i + 1
                    ? "bg-blue-600 text-white"
                    : "border"
                    }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        )}
      </Card>

      <ConfirmModal
        isOpen={selectedId !== null}
        title="Delete Record"
        message="This action cannot be undone."
        onCancel={() => setSelectedId(null)}
        onConfirm={() => {
          deleteRecord(selectedId);
          setSelectedId(null);
        }}
      />

      <EditRecordModal
        isOpen={editingRecord !== null}
        record={editingRecord}
        onCancel={() => setEditingRecord(null)}
        onSave={(record) => {
          updateRecord(record);
          setEditingRecord(null);
        }}
      />
    </>
  );
}

export default HealthHistoryTable;