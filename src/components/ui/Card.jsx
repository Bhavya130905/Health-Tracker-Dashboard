function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        h-full
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        dark:border-slate-700
        dark:bg-slate-900
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;