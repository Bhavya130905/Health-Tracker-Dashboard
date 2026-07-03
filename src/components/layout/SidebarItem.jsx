import { NavLink } from "react-router-dom";

function SidebarItem({ item, collapsed = false }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200
        ${
          isActive
            ? "bg-blue-600 text-white shadow-md"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`
      }
    >
      <Icon size={22} className="shrink-0" />

      {!collapsed && (
        <span className="font-medium whitespace-nowrap">
          {item.title}
        </span>
      )}
    </NavLink>
  );
}

export default SidebarItem;