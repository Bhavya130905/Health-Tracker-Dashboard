import {
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { navigation } from "../../constants/navigation";
import { useSidebar } from "../../context/SidebarContext";

import SidebarItem from "./SidebarItem";

function Sidebar() {
  const {
    isDesktopOpen,
    isMobileOpen,
    isMobile,
    toggleSidebar,
    closeSidebar,
  } = useSidebar();

  const expanded = isMobile
    ? isMobileOpen
    : isDesktopOpen;

  return (
    <>
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="
              fixed
              inset-0
              z-40
              bg-black/50
              backdrop-blur-sm
              lg:hidden
            "
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{
          width: isMobile
            ? 288
            : expanded
            ? 288
            : 88,

          x: isMobile
            ? isMobileOpen
              ? 0
              : -320
            : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          flex-col
          border-r
          border-slate-200
          bg-white
          shadow-xl
          dark:border-slate-700
          dark:bg-slate-900
          lg:sticky
        "
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5 dark:border-slate-700">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <HeartPulse size={24} />
            </div>

            {expanded && (
              <div>
                <h2 className="font-bold text-slate-800 dark:text-white">
                  VitalSync
                </h2>

                <p className="text-xs text-slate-500">
                  Health Dashboard
                </p>
              </div>
            )}
          </div>

          {isMobile ? (
            <button
              onClick={closeSidebar}
              className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X size={20} />
            </button>
          ) : (
            <button
              onClick={toggleSidebar}
              className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {expanded ? (
                <ChevronLeft size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
          )}
        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-3 py-5">
          {navigation.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              collapsed={!expanded}
              onClick={isMobile ? closeSidebar : undefined}
            />
          ))}
        </nav>

        {/* Footer */}

        <div className="border-t border-slate-200 p-4 dark:border-slate-700">
          {expanded ? (
            <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
              <p className="font-semibold dark:text-white">
                VitalSync
              </p>

              <p className="text-sm text-slate-500">
                Version 1.0.0
              </p>
            </div>
          ) : (
            <div className="flex justify-center">
              <HeartPulse
                className="text-blue-600"
                size={24}
              />
            </div>
          )}
        </div>
      </motion.aside>
    </>
  );
}

export default Sidebar;