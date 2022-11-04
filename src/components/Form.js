import React from "react";

export default function Form() {
    return (
        <form className="form-container">
            <div className="form-name">
            <label>First Name
            <input type="text" id="first_name" placeholder="Enter your first name" />
            </label>
            
            <label>Last Name
            <input type="text" height="" width="" id="last_name" placeholder="Enter your lastt name" />
            </label>
            
            </div>
            <label>Email
            <input type="text" height="" width="" id="email" placeholder="yourname@email.com" />
            </label>
            
            <label>Message
            <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
            </label>
            <label className="checkbox-label">   
        <input type="checkbox" id="checkbox" />
        You agree to providing your data to Hawwah who may contact you.</label>
        <button type="button" id="btn__submit">Send message</button>
        </form>
        
    )
}