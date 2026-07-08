function Tooltip({
  text,
  children,
}) {
  return (
    <div className="group relative flex">
      {children}

      <div
        className="
        pointer-events-none
        absolute
        left-full
        top-1/2
        z-50
        ml-3
        -translate-y-1/2
        whitespace-nowrap
        rounded-lg
        bg-slate-900
        px-3
        py-2
        text-sm
        text-white
        opacity-0
        shadow-xl
        transition-all
        duration-200
        group-hover:opacity-100
      "
      >
        {text}
      </div>
    </div>
  );
}

export default Tooltip;