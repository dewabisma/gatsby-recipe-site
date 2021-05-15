import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

import logo from "../assets/images/logo.svg"

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes logo" />
          </Link>

          <button className="nav-btn">
            <FaBars />
          </button>
        </div>
        <div className="nav-links show-links">
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
          >
            Recipes
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link">
            Tags
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            About
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
