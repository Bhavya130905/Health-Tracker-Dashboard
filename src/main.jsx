import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HealthProvider } from "./context/HealthContext.jsx";
import "./styles/global.css";
import { HistoryProvider } from "./context/HistoryContext.jsx";
import App from "./App";

import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SidebarProvider>
          <HealthProvider>
            <HistoryProvider>
              <App />
            </HistoryProvider>
          </HealthProvider>
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);