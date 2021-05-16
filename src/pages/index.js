import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import Meta from "../components/Meta"

export default function Home() {
  return (
    <Layout>
      <Meta title="Home" />
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

        <AllRecipes />
      </main>
    </Layout>
  )
}
