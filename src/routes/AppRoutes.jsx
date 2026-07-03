import { Routes, Route } from "react-router-dom";

import Layout from "../layouts/Layout.jsx";
import Profile from "../pages/Profile.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Calculator from "../pages/Calculator.jsx";
import History from "../pages/History.jsx";
import Settings from "../pages/Settings.jsx";
import About from "../pages/About.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}