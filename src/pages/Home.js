import React from "react";
import Profile from "../components/Profile"
import Buttons from "../components/Buttons"
import Logo from "../components/Logo"
import Footer from "../components/Footer"


export default function Home() {
    return (
        <div className="container">
            <Profile />
            <Buttons />
            <Logo />
            <hr />
            <Footer />
        </div>
    )
}