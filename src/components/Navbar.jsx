import React from 'react'

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container-fluid d-flex justify-content-between">
    <div>
      <a className="navbar-brand" href="#">Quizing</a>
      </div>
        <form className="d-flex" role="search">
          <input className="form-control me-2" style={{width:'600px'}}type="search" placeholder="Search a quiz" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className='d-flex'>
          <button type="submit" className='btn btn-primary SignInButton border'>Sign In</button>
          <button type="submit" className='btn btn-light mx-2 border-primary'>Sign Up</button>
        </div>
    </div>
  </nav></div>
  )
}

export default Navbar