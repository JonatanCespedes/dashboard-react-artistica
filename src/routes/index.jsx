import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Auth } from "../pages/Auth";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
