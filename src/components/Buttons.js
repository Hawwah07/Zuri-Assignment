import React from "react";

export default function Buttons() {
    return (
       <div className="btn">
        <a id="twitter" target="_blank" href="twitterlinkwhenimakeit"><p>Twitter Link</p></a>
        <a target="_blank" id="btn__zuri" href="https://training.zuri.team/"><p>Zuri Team</p></a>
        
        <a target="_blank" id="books" href="http://books.zuri.team ">
            <p>Zuri Books</p>
            <small>You can get books about design and coding here</small>
            </a>
        <a target="_blank" id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=Hawwah">
            <p>Python Books</p>
            <small>Get Python book for beginners and start coding Today! </small>
            </a>
        <a target="_blank" id="pitch" href="https://background.zuri.team">
            <p>Background Check for Coders</p>
            <small>Background Checks Today, Fast and Accurate</small>
            </a>
        <a target="_blank" id="book__design" href="https://books.zuri.team/design-rules">
            <p>Design Book</p>
            <small>Click and get Free Design Book Offered by Zuri</small>
            </a>
        
       </div> 
    )
}