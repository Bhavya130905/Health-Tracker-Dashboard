import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
  const [isDesktopOpen, setDesktopOpen] = useState(true);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth < 1024;

      setIsMobile(mobile);

      if (!mobile) {
        setMobileOpen(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen((prev) => !prev);
    } else {
      setDesktopOpen((prev) => !prev);
    }
  };

  const closeSidebar = () => setMobileOpen(false);

  return (
    <SidebarContext.Provider
      value={{
        isMobile,
        isDesktopOpen,
        isMobileOpen,
        toggleSidebar,
        closeSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useSidebar must be used inside SidebarProvider"
    );
  }

  return context;
}