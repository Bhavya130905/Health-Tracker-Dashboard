import { Menu, HeartPulse } from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";

function MobileHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        h-16
        items-center
        justify-between
        border-b
        border-slate-200
        bg-white/90
        px-4
        backdrop-blur-lg
        dark:border-slate-700
        dark:bg-slate-900/90
        lg:hidden
      "
    >
      <button
        onClick={toggleSidebar}
        aria-label="Open navigation"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          transition
          hover:bg-slate-100
          dark:hover:bg-slate-800
        "
      >
        <Menu size={24} />
      </button>

      <div className="flex items-center gap-3">
        <HeartPulse
          size={22}
          className="text-blue-600"
        />

        <span className="font-bold">
          VitalSync
        </span>
      </div>

      <div className="w-11" />
    </header>
  );
}

export default MobileHeader;