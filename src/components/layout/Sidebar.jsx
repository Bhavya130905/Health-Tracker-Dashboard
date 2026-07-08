import {
  HeartPulse,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import sidebarNavigation from "../../constants/sidebarNavigation.js";
import { useSidebar } from "../../context/SidebarContext.jsx";
import SidebarSection from "./SidebarSection.jsx";

function Sidebar() {
  const {
    isSidebarOpen,
    toggleSidebar,
  } = useSidebar();

  return (
    <aside
      className={`
        sticky
        top-0
        flex
        h-screen
        flex-col
        border-r
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        ease-in-out
        dark:border-slate-700
        dark:bg-slate-900
        ${isSidebarOpen ? "w-72" : "w-20"}
      `}
    >
      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-5 dark:border-slate-700">

        <div className="flex items-center gap-3 overflow-hidden">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg">

            <HeartPulse size={24} />

          </div>

          <div
            className={`
              overflow-hidden
              transition-all
              duration-300
              ${isSidebarOpen
                ? "max-w-xs opacity-100"
                : "max-w-0 opacity-0"}
            `}
          >
            <h1 className="whitespace-nowrap text-xl font-bold text-slate-800 dark:text-white">
              VitalSync
            </h1>

            <p className="whitespace-nowrap text-xs text-slate-500 dark:text-slate-400">
              Health Dashboard
            </p>
          </div>

        </div>

        <button
          onClick={toggleSidebar}
          aria-label={
            isSidebarOpen
              ? "Collapse Sidebar"
              : "Expand Sidebar"
          }
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl transition hover:bg-slate-100 dark:hover:bg-slate-800 lg:flex"
        >
          {isSidebarOpen ? (
            <ChevronLeft size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </button>

      </div>

      {/* ================= NAVIGATION ================= */}

      <nav
        className="flex-1 space-y-6 overflow-y-auto px-4 py-6"
        aria-label="Primary Navigation"
      >
        {sidebarNavigation.map((section) => (
          <SidebarSection
            key={section.title}
            title={section.title}
            items={section.items}
            collapsed={!isSidebarOpen}
          />
        ))}
      </nav>

      {/* ================= FOOTER ================= */}

      <div className="border-t border-slate-200 p-4 dark:border-slate-700">

        {isSidebarOpen ? (
          <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">

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
              className="text-emerald-600"
            />

          </div>
        )}

      </div>
    </aside>
  );
}

export default Sidebar;