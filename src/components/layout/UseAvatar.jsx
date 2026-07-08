import currentUser from "../../constants/user.js";

function UserAvatar({
  size = "md",
}) {
  const sizes = {
    sm: "h-10 w-10 text-sm",

    md: "h-12 w-12 text-base",

    lg: "h-14 w-14 text-lg",
  };

  const initials = currentUser.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  if (currentUser.avatar) {
    return (
      <img
        src={currentUser.avatar}
        alt={currentUser.name}
        className={`${sizes[size]} rounded-full object-cover`}
      />
    );
  }

  return (
    <div
      className={`${sizes[size]} flex items-center justify-center rounded-full bg-emerald-600 font-bold text-white`}
    >
      {initials}
    </div>
  );
}

export default UserAvatar;