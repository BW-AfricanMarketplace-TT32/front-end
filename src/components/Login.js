import React from "react";
import Navbar from "./Navbar";

export default function Login(props) {
  const { values, submit, change, disabled, errors } = props;

  return (
    <div className='login-container'>
      <Navbar />
      <h1>Log in</h1>
      <form className='text-container' onSubmit={submit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={change}
            placeholder='johndoe@email.com'
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={change}
            placeholder='secure password'
          />
        </label>

        {/* Errors */}
        <div className="error">{errors.email}</div>
        <div className="error">{errors.password}</div>
        <input
          type="submit"
          value="Submit"
          id="submitBtn"
          disabled={disabled}
        />
      </form>
    </div>
  );
}
