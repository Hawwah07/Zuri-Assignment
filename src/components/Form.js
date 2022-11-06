import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="form-container">
      <form action="/new.php" onSubmit={handleSubmit(onSubmit)}>
        <div className="name-div">
          <div className="first-name-div">
            <label className="first-name-label" htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
              // required="required"
              {...register("firstName", { required: true, minLength: 5 })}
            />
            {errors.firstName && <p className="errortext">Please check the First Name</p>}
          </div>

          <div className="last-name-div">
            <label className="last-name-label" htmlFor="last_name">Last Name</label>
            <input
              type="text"
              height=""
              width=""
              id="last_name"
              placeholder="Enter your last name"
              {...register("lastName",  { required: true, minLength: 5 })}
              // required
            />
            {errors.lastName && <p className="errortext">Please check the Last Name</p>}
          </div>
        </div>

        <div class="email-div">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            height=""
            width=""
            id="email"
            placeholder="yourname@email.com"
            // required
            {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
          />
          {errors.email && <p className="errortext">Please check the Email</p>}
        </div>
        <div class="message-div">
          <label htmlFor="message">Message </label>
          <textarea
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            // required
            {...register("message", { required: true, minLength: 10 })}
          ></textarea>
          {errors.message && <p className="errortext">Please enter a message.</p>}
        </div>
        <div className="box-div">
          <label className="checkbox-label" htmlFor="checkbox">
            <input type="checkbox" id="checkbox"
            {...register("checkbox", { required: true })}
            //  required 
            />
            You agree to providing your data to Hawwah who may contact you.
          </label>
            {errors.checkbox && <p className="errortext">Please check this box.</p>}
        </div>
        <button type="submit" id="btn__submit" value="submit">
          Send message
        </button>
      </form>
    </div>
  );
}
