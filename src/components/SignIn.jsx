import React from 'react'

const SignIn = () => {
  return (
    <div className='text-center'>
    <h1 className="signHeading">SIGN IN</h1>
    <form className="LoginContainer ">
    <div className="form-floating emailEntry mx-auto">
          <input type="email" className="form-control --bs-secondary-color" id="floatingInput" placeholder="name@example.com" size="5"/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
    
    <div className="form-floating passwordEntry mx-auto">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="d-flex justify-content-between mx-auto signBtn">
        <button className="btn btn-secondary w-100 py-2 mx-1 signInUp" style={{backgroundColor:"oklch(0% 0.48 279 / 45%)", color:"#c8d5f9"}} type="submit">Sign in</button>
    
    </div>
    <div style={{textAlign:'center', marginTop:'20px'}}>
    <p >OR</p>
    </div>
    <div className="d-flex justify-content-between mx-auto signBtn">
        <button className="btn btn-secondary w-100 py-2 mx-1 signInUp" style={{backgroundColor:"oklch(0% 0.48 279 / 45%)", color:"#c8d5f9"}} type="submit">Sign up</button>
    </div>
    </form>

    </div>
  )
}

export default SignIn;