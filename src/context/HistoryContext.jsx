import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  loadHistory,
  saveHistory,
} from "../services/historyStorage.js";

const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [records, setRecords] = useState(() => loadHistory());

  useEffect(() => {
    saveHistory(records);
  }, [records]);

  function addRecord(record) {
    const newRecord = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...record,
    };

    setRecords((prev) => [newRecord, ...prev]);
  }

  function deleteRecord(id) {
    setRecords((prev) =>
      prev.filter((record) => record.id !== id)
    );
  }

  function clearAllHistory() {
    setRecords([]);
  }

  return (
    <HistoryContext.Provider
      value={{
        records,
        addRecord,
        deleteRecord,
        clearAllHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  const context = useContext(HistoryContext);

  if (!context) {
    throw new Error(
      "useHistory must be used inside HistoryProvider"
    );
  }

  return context;
}