import React from "react";
import zuriInternship from "../images/Zuri.Internship_Logo.png"
import i4g from "../images/I4G.png"

export default function() {
    return (
        <footer className="footer">
            <img src={zuriInternship}/>
            <small>HNG Internship 9 Frontend Task</small>
            <img src={i4g}/>
        </footer>
    )
}