import { click } from "@testing-library/user-event/dist/click";
import React from "react";

export default function Form() {
  return (
    <div className="form-container">
      <form action="/new.php" onSubmit={click}>
        <div className="name-div">
          <div className="first-name-div">
            <label className="first-name-label">First Name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
              required="required"
            />
          </div>

          <div className="last-name-div">
            <label className="last-name-label">Last Name</label>
            <input
              type="text"
              height=""
              width=""
              id="last_name"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div class="email-div">
          <label>Email</label>
          <input
            type="text"
            height=""
            width=""
            id="email"
            placeholder="yourname@email.com"
            required
          />
        </div>
        <div class="message-div">
          <label>Message </label>
          <textarea
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            required
          ></textarea>
        </div>
        <div className="box-div">
          <label className="checkbox-label">
            <input type="checkbox" id="checkbox" required />
            You agree to providing your data to Hawwah who may contact you.
          </label>
        </div>
        <button type="submit" id="btn__submit" value="submit">
          Send message
        </button>
      </form>
    </div>
  );
}
