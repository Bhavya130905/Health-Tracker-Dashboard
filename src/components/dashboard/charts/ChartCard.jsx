function ChartCard({
  title,
  children,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-6 text-xl font-semibold text-slate-800 dark:text-white">
        {title}
      </h2>

      {children}
    </div>
  );
}

export default ChartCard;