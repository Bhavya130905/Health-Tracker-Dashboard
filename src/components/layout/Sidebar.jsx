import { HeartPulse, ChevronLeft, ChevronRight } from "lucide-react";

import { navigation } from "../../constants/navigation.js";
import { useSidebar } from "../../context/SidebarContext.jsx";

import SidebarItem from "./SidebarItem.jsx";

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <aside
      className={`h-screen sticky top-0 bg-white border-r border-slate-200 transition-all duration-300 flex flex-col
      ${isSidebarOpen ? "w-72" : "w-24"}`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-6 border-b border-slate-200">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
            <HeartPulse size={24} />
          </div>

          {isSidebarOpen && (
            <div>
              <h1 className="text-xl font-bold text-slate-800">
                VitalSync
              </h1>

              <p className="text-xs text-slate-500">
                Health Dashboard
              </p>
            </div>
          )}
        </div>

        <button
          onClick={toggleSidebar}
          className="hidden lg:flex h-10 w-10 items-center justify-center rounded-xl hover:bg-slate-100 transition"
        >
          {isSidebarOpen ? (
            <ChevronLeft size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            collapsed={!isSidebarOpen}
          />
        ))}
      </nav>

      {/* Footer Card */}
      <div className="p-4 border-t border-slate-200">
        {isSidebarOpen ? (
          <div className="rounded-2xl bg-slate-100 p-4">
            <p className="font-semibold text-slate-700">
              VitalSync
            </p>

            <p className="text-sm text-slate-500 mt-1">
              Version 1.0.0
            </p>
          </div>
        ) : (
          <div className="flex justify-center">
            <HeartPulse
              size={24}
              className="text-blue-600"
            />
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;