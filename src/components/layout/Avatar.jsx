import currentUser from "../../constants/user.js";

function Avatar() {
  if (currentUser.avatar) {
    return (
      <img
        src={currentUser.avatar}
        alt={currentUser.name}
        className="h-10 w-10 rounded-full object-cover"
      />
    );
  }

  const initials = currentUser.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">
      {initials}
    </div>
  );
}

export default Avatar;