import clsx from "clsx";

function Badge({
  children,
  variant = "primary",
  size = "md",
}) {
  const variants = {
    primary:
      "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",

    success:
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",

    warning:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200",

    danger:
      "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",

    gray:
      "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full font-semibold",
        variants[variant],
        sizes[size]
      )}
    >
      {children}
    </span>
  );
}

export default Badge;