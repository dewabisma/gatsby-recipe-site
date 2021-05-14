import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Recipes</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </ul>
  )
}

export default Header
