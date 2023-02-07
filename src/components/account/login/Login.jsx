import React from 'react'

import './Login.css'

function Login() {
  return (
    <div className='login'>
      <h1 className='login__text login__title'>Login</h1>
      <h3 className='login__text'>Email:</h3>
      <input className='login__box'></input>
      <h3 className='login__text'>Password:</h3>
      <input className='login__box'></input>
      <button className='login__box'>Login</button>
      <section className='login__registerContainer'>
        <p className='login__text'>Don't have an account?</p>
        <button className='login__box'>Register</button>
      </section>
    </div>
  )
}

export default Login
