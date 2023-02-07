import React from 'react'

import './Register.css'

function Register() {
  return (
    <div className='register'>
      <h1 className='register__text register__title'>Register</h1>
      <h3 className='register__text'>Email:</h3>
      <input className='register__box'></input>
      <h3 className='register__text'>Password:</h3>
      <input className='register__box'></input>
      <button className='register__box'>Login</button>
      <section className='register__loginContainer'>
        <p className='register__text'>Already have an account?</p>
        <button className='register__box'>Login</button>
      </section>
    </div>
  )
}

export default Register
