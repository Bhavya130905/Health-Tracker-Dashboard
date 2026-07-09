import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import MobileHeader from "../components/layout/MobileHeader";
import Container from "../components/ui/Container";

function Layout() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <MobileHeader />

        <main
          id="main-content"
          className="
            flex-1
            overflow-y-auto
            py-6
          "
        >
          <Container>
            <Outlet />
          </Container>
        </main>
      </div>
    </div>
  );
}

export default Layout;