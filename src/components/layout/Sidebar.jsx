import {
  HeartPulse,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { navigation } from "../../constants/navigation.js";
import { useSidebar } from "../../context/SidebarContext.jsx";

import SidebarItem from "./SidebarItem.jsx";

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <aside
      className={`
        sticky top-0 flex h-screen flex-col
        border-r border-slate-200
        bg-white
        transition-all duration-300

        dark:border-slate-700
        dark:bg-slate-900

        ${isSidebarOpen ? "w-72" : "w-24"}
      `}
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-6 dark:border-slate-700">

        <div className="flex items-center gap-3 overflow-hidden">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">

            <HeartPulse size={24} />

          </div>

          {isSidebarOpen && (
            <div>

              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                VitalSync
              </h1>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Health Dashboard
              </p>

            </div>
          )}
        </div>

        <button
          onClick={toggleSidebar}
          className="hidden lg:flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {isSidebarOpen ? (
            <ChevronLeft size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </button>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">

        {navigation.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            collapsed={!isSidebarOpen}
          />
        ))}

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-200 p-4 dark:border-slate-700">

        {isSidebarOpen ? (
          <div className="rounded-2xl bg-slate-100 p-4 transition dark:bg-slate-800">

            <p className="font-semibold text-slate-700 dark:text-white">
              VitalSync
            </p>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
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