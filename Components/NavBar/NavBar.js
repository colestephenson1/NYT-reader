import React from 'react'
import Link from 'next/link'
import 'bulma/css/bulma.min.css'


const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="container">
        <div id="navbarMenu" className="navbar-menu">
            <Link legacyBehavior href="/"><a className="navbar-item is-active is-size-5 has-text-weight-bold">Home </a></Link>
            <div className="navbar-end">
                <Link legacyBehavior href="/articles/arts"><a className="navbar-item is-active is-size-5 has-text-weight-semibold">Arts</a></Link>
                <Link legacyBehavior href="/articles/sports"><a className="navbar-item is-active is-size-5 has-text-weight-semibold">Sports</a></Link>
                <Link legacyBehavior href="/articles/movies"><a className="navbar-item is-active is-size-5 has-text-weight-semibold">Movies</a></Link>
                <Link legacyBehavior href="/articles/us"><a className="navbar-item is-active is-size-5 has-text-weight-semibold"> U.S</a></Link>
                <Link legacyBehavior href="/articles/world"><a className="navbar-item is-active is-size-5 has-text-weight-semibold">World</a></Link>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default NavBar