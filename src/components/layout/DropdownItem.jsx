function DropdownItem({
  icon: Icon,
  label,
  danger = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        text-left
        transition

        hover:bg-slate-100
        dark:hover:bg-slate-800

        ${
          danger
            ? "text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
            : "text-slate-700 dark:text-slate-200"
        }

        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
      `}
    >
      <Icon size={18} />

      <span>{label}</span>
    </button>
  );
}

export default DropdownItem;