import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavBar2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid d-flex Nav2 justify-content-between">
          <div>
            <a className="navbar-brand" href="#">Quizing</a>
          </div>
            <button className="btn btn-outline-success HOME" type="submit" onClick={()=>{
              navigate('/')
            }}>GO HOME</button>
        </div>
      </nav>
      
    </div>
  )
}

export default NavBar2