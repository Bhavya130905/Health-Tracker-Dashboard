function SidebarOverlay({
  visible,
  onClick,
}) {
  if (!visible) return null;

  return (
    <div
      onClick={onClick}
      className="
      fixed
      inset-0
      z-40
      bg-black/50
      backdrop-blur-sm
      lg:hidden
    "
    />
  );
}

export default SidebarOverlay;