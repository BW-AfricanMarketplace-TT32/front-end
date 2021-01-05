import React from "react";
import Navbar from "./Navbar";
import '../assets/stylesheets/forms.css'

export default function Login(props) {
  const { values, submit, change, disabled, errors } = props;

  return (
    <>
      <Navbar />
      <div className='login-container'>
        <h1>Login</h1>
        <form onSubmit={submit}>
          <div className='input-container'>
            <i class="fas fa-user"></i>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={change}
              placeholder='johndoe@email.com'
            />
          </div>

          <div className='input-container'>
            <i class="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={change}
              placeholder='secure password'
            />
          </div>

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
    </>
  );
}
