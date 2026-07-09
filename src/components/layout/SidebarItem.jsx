import { NavLink } from "react-router-dom";
import Tooltip from "../ui/Tooltip";

function SidebarItem({
  item,
  collapsed,
  onClick,
}) {
  const Icon = item.icon;

  const content = (
    <NavLink
      to={item.path}
      onClick={onClick}
      aria-label={item.label}
      className={({ isActive }) =>
        `
        group
        relative
        flex
        items-center
        gap-4
        overflow-hidden
        rounded-xl
        px-4
        py-3
        transition-all
        duration-200
        hover:scale-[1.02]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-emerald-500
        ${
          isActive
            ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30"
            : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        }
      `
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span
              className="
                absolute
                left-0
                top-2
                bottom-2
                w-1
                rounded-r-full
                bg-emerald-500
              "
            />
          )}

          <Icon
            size={21}
            className="shrink-0"
          />

          <span
            className={`
              flex-1
              whitespace-nowrap
              transition-all
              duration-300
              ${
                collapsed
                  ? "w-0 overflow-hidden opacity-0"
                  : "opacity-100"
              }
            `}
          >
            {item.label}
          </span>

          {!collapsed && item.badge && (
            <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-semibold text-white">
              {item.badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  );

  return collapsed ? (
    <Tooltip text={item.label}>
      {content}
    </Tooltip>
  ) : (
    content
  );
}

export default SidebarItem;