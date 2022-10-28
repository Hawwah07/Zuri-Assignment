import React from "react";
import "./style.css"
import Profile from "./components/Profile"
import Buttons from "./components/Buttons"
import Logo from "./components/Logo"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            <Profile />
            <Buttons />
            <Logo />
            <Footer />
        </div>
    )
}