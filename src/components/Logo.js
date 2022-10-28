import React from "react";
import slack from "../images/slack.png"
import Iconcat from "../images/Iconcat.png"

export default function Logo() {
    return (
        <div className="logo">
        <img src={slack} className="slack-logo"/>
        <img src={Iconcat} className="github-logo"/>
        </div>
    )
}