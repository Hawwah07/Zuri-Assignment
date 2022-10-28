import React from "react";
import profileImage from "../images/profile__img.png"
import Iconarrow from "../images/Iconarrow.png"

export default function Profile() {
    return (
        <div className="profile">
            <img id="profile__img" src={profileImage}/>
            <h3>Annette Black</h3>
            {/* <p id="slack">Hawwah</p> */}
            <img src={Iconarrow} className="arrow"/>
        </div>
    )
}