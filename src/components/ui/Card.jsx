import clsx from "clsx";

function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={clsx(
        `
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300

        dark:bg-slate-900
        dark:border-slate-700

        `,
        hover &&
          `
          hover:-translate-y-1
          hover:shadow-xl
        `,
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;