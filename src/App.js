import React from "react";
import "./style.css"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default function App() {
    return (
        <div className="app-container">
        <Router>
        <Routes>
            <Route path="/Zuri-Assignment" element={<Home />} />
            <Route path="/Zuri-Assignment/contact" element={<Contact />} />
        </Routes>
        </Router>
        </div>
    )
}