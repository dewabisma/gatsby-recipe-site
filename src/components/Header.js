import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src="" alt="simply recipes logo" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
