import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <a className="navbar-brand" href="#">Quizing</a>
          </div>
          <form className="d-flex searchMenu mx-1" role="search">
            <input className="form-control me-2" style={{ width: '600px' }} type="search" placeholder="Search a quiz" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className='d-flex'>
            <button type="button" className='btn btn-primary SignButton border' onClick={() => navigate('/Login')}>
              Sign In
            </button>
            <button type="button" className='btn btn-light mx-2 SignButton border-primary'>Sign Up</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;