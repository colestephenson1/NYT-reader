import React from 'react'
import Link from 'next/link'
import 'bulma/css/bulma.min.css'


const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
       <Link legacyBehavior href="../">
        <a className="navbar-item" >
          <h1>Daily Stories</h1>
        </a>
       </Link> 
      </div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <div className=" navbar-item">
            <div className="control has-icons-left">
              <input className="input is-rounded" type="email" placeholder="Search"/>
              <span className="icon is-left">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </div>
          <Link legacyBehavior href="/">
            <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
                Home
            </a>
          </Link>
          {/* <Link legacyBehavior href="/resources/new">
            <a className="navbar-item is-size-5 has-text-weight-semibold">
                Add
            </a>
          </Link>
          <a className="navbar-item is-size-5 has-text-weight-semibold">
            Features
          </a> */}
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavBar