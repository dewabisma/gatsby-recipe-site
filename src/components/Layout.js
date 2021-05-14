import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      {children}

      <Footer />
    </React.Fragment>
  )
}

export default Layout
