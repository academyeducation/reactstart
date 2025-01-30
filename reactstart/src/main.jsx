import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import User from "./pages/user/User.jsx";
import Dashboard from "./pages/user/dashboard/Dashboard.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:userId" element={<User />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
