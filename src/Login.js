import React from 'react'

export default function Login(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props;

  return (
    <div>
      <h2>Log in to your account</h2>
      <form onSubmit={submit}>
        <label>
          Email:
          <input 
            type='email'
            name='email'
            value={values.email}
            onChange={change}
          />
        </label>
        <label>
          Password:
          <input 
            type='password'
            name='password'
            value={values.password}
            onChange={change}
          />
        </label>

        {/* Errors */}
        <div className='error'>{errors.email}</div>
        <div className='error'>{errors.password}</div>
        <input
          type='submit'
          value='Submit'
          id='submitBtn'
          disabled={disabled}
        />
      </form>
    </div>
  )
}
