import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const NotificationContext =
  createContext();

const initialNotifications = [
  {
    id: 1,
    title: "Welcome to VitalSync 🎉",
    message:
      "Start tracking your health today.",
    type: "success",
    read: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Drink Water 💧",
    message:
      "You're close to your daily goal.",
    type: "info",
    read: false,
    createdAt: new Date(),
  },
];

export function NotificationProvider({
  children,
}) {
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const unreadCount = useMemo(
    () =>
      notifications.filter(
        (n) => !n.read
      ).length,
    [notifications]
  );

  function markAllRead() {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        read: true,
      }))
    );
  }

  function clearNotifications() {
    setNotifications([]);
  }

  function addNotification(notification) {
    setNotifications((prev) => [
      {
        id: Date.now(),
        read: false,
        createdAt: new Date(),
        ...notification,
      },
      ...prev,
    ]);
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markAllRead,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  return useContext(
    NotificationContext
  );
}