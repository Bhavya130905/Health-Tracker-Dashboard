import clsx from "clsx";

function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  disabled = false,
  ...props
}) {
  const base = `
    inline-flex
    items-center
    justify-center
    rounded-2xl
    font-semibold
    transition-all
    duration-300
    outline-none
    focus:ring-2
    focus:ring-offset-2
    disabled:opacity-50
    disabled:cursor-not-allowed
    active:scale-95
  `;

  const variants = {
    primary: `
      bg-blue-600
      text-white
      hover:bg-blue-700
      focus:ring-blue-500
    `,

    secondary: `
      bg-slate-200
      text-slate-800
      hover:bg-slate-300
      dark:bg-slate-700
      dark:text-white
      dark:hover:bg-slate-600
    `,

    success: `
      bg-green-600
      text-white
      hover:bg-green-700
    `,

    danger: `
      bg-red-600
      text-white
      hover:bg-red-700
    `,

    ghost: `
      bg-transparent
      hover:bg-slate-100
      dark:hover:bg-slate-800
    `,
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",

    md: "px-5 py-3",

    lg: "px-7 py-4 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;