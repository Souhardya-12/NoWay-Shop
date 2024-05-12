import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='lsu'>
      <div className="lsuc">
        <h1>Sign Up</h1>
        <div className="lsuf">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='lsul'>Already have an account? <span>Login Here</span> </p>
        <div className="lsua">
          <input type="checkbox" name='' id='' />
          <p>By continuing I agree to the terms and privacy policy. </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup