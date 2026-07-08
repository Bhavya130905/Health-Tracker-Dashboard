import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(() => {
    const saved = localStorage.getItem("sidebar");
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [isMobileOpen, setMobileOpen] =
    useState(false);

  useEffect(() => {
    localStorage.setItem(
      "sidebar",
      JSON.stringify(isSidebarOpen)
    );
  }, [isSidebarOpen]);

  const toggleSidebar = () =>
    setSidebarOpen((prev) => !prev);

  const openMobileSidebar = () =>
    setMobileOpen(true);

  const closeMobileSidebar = () =>
    setMobileOpen(false);

  const toggleMobileSidebar = () =>
    setMobileOpen((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        isMobileOpen,
        openMobileSidebar,
        closeMobileSidebar,
        toggleMobileSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () =>
  useContext(SidebarContext);