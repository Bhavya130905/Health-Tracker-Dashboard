export function formatTime(date) {
  const now = new Date();
  const notificationDate = new Date(date);

  const diff =
    Math.floor(
      (now - notificationDate) / 1000
    );

  if (diff < 60)
    return `${diff} sec ago`;

  if (diff < 3600)
    return `${Math.floor(diff / 60)} min ago`;

  if (diff < 86400)
    return `${Math.floor(diff / 3600)} hrs ago`;

  return `${Math.floor(diff / 86400)} days ago`;
}