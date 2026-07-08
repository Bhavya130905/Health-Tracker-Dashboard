import SidebarItem from "./SidebarItem.jsx";

function SidebarSection({
  title,
  items,
  collapsed,
}) {
  return (
    <section className="space-y-2">
      {!collapsed && (
        <h2 className="px-3 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          {title}
        </h2>
      )}

      <div className="space-y-1">
        {items.map((item) => (
          <SidebarItem
            item={item}
            collapsed={collapsed}
          />
        ))}
      </div>
    </section>
  );
}

export default SidebarSection;