import { NavLink } from "react-router-dom";

function SidebarItem({
  item,
  collapsed = false,
}) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      end
      className={({ isActive }) =>
        `
        group
        flex
        items-center
        gap-3
        rounded-2xl
        px-4
        py-3
        transition-all
        duration-300

        ${
          isActive
            ? `
              bg-blue-600
              text-white
              shadow-lg
            `
            : `
              text-slate-600
              hover:bg-slate-100
              hover:text-slate-900

              dark:text-slate-300
              dark:hover:bg-slate-800
              dark:hover:text-white
            `
        }
      `
      }
    >
      <Icon
        size={22}
        className="shrink-0 transition-transform group-hover:scale-110"
      />

      {!collapsed && (
        <span className="truncate font-medium">
          {item.title}
        </span>
      )}
    </NavLink>
  );
}

export default SidebarItem;