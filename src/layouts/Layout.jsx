import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";
import MobileSidebar from "../components/layout/MobileSidebar";
import useMediaQuery from "../hooks/useMediaQuery";

function Layout() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      {isDesktop ? <Sidebar /> : <MobileSidebar />}

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;