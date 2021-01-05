import React from "react";
import Navbar from "../components/Navbar";

export default function Register(props) {
  const { submit, values, change, errors, disabled } = props;

  return (
    <div>
      <Navbar />
      <div className='login-container'>
        <h1>Register</h1>
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


          <label>
            <input 
              type='radio'
              name='admin'
              value='1'
              checked={values.admin === '1'}
              onChange={change}
            />
            Merchant
          </label>

          <label>
          <input 
              type='radio'
              name='admin'
              value='0'
              checked={values.admin === '0'}
              onChange={change}
            />
            Customer
          </label>

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
  );
}
