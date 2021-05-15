import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import FetchData from "../examples/fetchData"

import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            placeholder="tracedSVG"
            className="hero-img"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h4>No fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <FetchData />
      </main>
    </Layout>
  )
}
