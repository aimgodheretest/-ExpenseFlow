import { Routes, Route, Navigate } from "react-router-dom";

import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/" element={<Navigate to="/signup" replace />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/login" element={<Login />} />

      <Route path="*" element={<Navigate to="/signup" replace />} />
    </Routes>
  );
}
