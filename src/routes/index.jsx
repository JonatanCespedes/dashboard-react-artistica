import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Auth } from "../pages/Auth";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/login" element={<Auth />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    )
}