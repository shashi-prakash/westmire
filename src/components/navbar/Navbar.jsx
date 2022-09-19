import React from 'react'
import './navbar.css'
export default function Navbar() {
  return (
    
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light text-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Westimire Wired</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#"  aria-disabled="true">Contact</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}
