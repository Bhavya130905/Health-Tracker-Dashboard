const STORAGE_KEY = "vitalsync-history";

// Get all records
export function loadHistory() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading history:", error);
    return [];
  }
}

// Save all records
export function saveHistory(records) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(records)
    );
  } catch (error) {
    console.error("Error saving history:", error);
  }
}

// Remove all records
export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
}