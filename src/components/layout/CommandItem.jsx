function CommandItem({
  command,
  active,
  onSelect,
}) {
  const Icon = command.icon;

  return (
    <button
      onClick={onSelect}
      className={`flex w-full items-center gap-4 rounded-xl p-4 text-left transition ${
        active
          ? "bg-emerald-600 text-white"
          : "hover:bg-slate-100"
      }`}
    >
      <Icon size={20} />

      <span>{command.title}</span>
    </button>
  );
}

export default CommandItem;