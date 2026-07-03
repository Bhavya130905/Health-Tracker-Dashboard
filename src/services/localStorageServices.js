const STORAGE_KEY = "vitalsync-user";

export function saveUserData(data) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function loadUserData() {
  const data = localStorage.getItem(
    STORAGE_KEY
  );

  return data ? JSON.parse(data) : null;
}

export function clearUserData() {
  localStorage.removeItem(STORAGE_KEY);
}