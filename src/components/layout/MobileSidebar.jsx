import {
  useEffect,
} from "react";

import Sidebar from "./Sidebar";
import SidebarOverlay from "./SidebarOverlay";

import { useSidebar } from "../../context/SidebarContext";

import useLockBodyScroll from "../../hooks/useLockBodyScroll";

function MobileSidebar() {
  const {
    isMobileOpen,
    closeMobileSidebar,
  } = useSidebar();

  useLockBodyScroll(isMobileOpen);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        closeMobileSidebar();
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleEscape
      );
  }, [closeMobileSidebar]);

  return (
    <>
      <SidebarOverlay
        visible={isMobileOpen}
        onClick={closeMobileSidebar}
      />

      <div
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          transform
          transition-transform
          duration-300
          lg:hidden
          ${
            isMobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <Sidebar />
      </div>
    </>
  );
}

export default MobileSidebar;