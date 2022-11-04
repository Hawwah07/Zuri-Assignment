import React from "react";
import Footer from "../components/Footer"
import Form from "../components/Form"

export default function Contact() {
    return (
        <div>
        <h1 className="contact-h1">Contact Me</h1>
        <p className="contact-p">Hi there, contact me to ask me about anything you have in mind.</p>
        <Form />
        <hr />
        <Footer />
        </div>
    )
}