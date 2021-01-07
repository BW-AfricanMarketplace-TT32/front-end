import React from "react";
import Navbar from "../components/Navbar";
import "../assets/stylesheets/forms.css";

export default function Register(props) {
  const { submit, values, change, errors, disabled } = props;

  return (
    <>
      <Navbar />
      <div className="bg-container">
        <div className="login-container">
          <h1>Register</h1>
          <form onSubmit={submit}>
            <div className="input-container">
              <i class="fas fa-user"></i>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={change}
                placeholder="johndoe@email.com"
              />
            </div>

            <div className="input-container">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={change}
                placeholder="secure password"
              />
            </div>

            <div className="role">
              <label>
                <input
                  type="radio"
                  name="admin_status"
                  value={1}
                  onChange={change}
                  placeholder="johndoe@email.com"
                />
                Merchant
              </label>
              <label>
                <input
                  type="radio"
                  name="admin_status"
                  value={0}
                  onChange={change}
                  placeholder="secure password"
                />
                Customer
              </label>
            </div>

            {/* Errors */}
            <div className="error">{errors.email}</div>
            <div className="error">{errors.password}</div>
            <div className="error">{errors.admin}</div>
            <input
              type="submit"
              value="Submit"
              id="submitBtn"
              disabled={disabled}
            />
          </form>
        </div>
      </div>
    </>
  );
}
