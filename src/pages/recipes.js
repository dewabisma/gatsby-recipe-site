import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"
import Meta from "../components/Meta"

const Recipes = () => {
  return (
    <Layout>
      <Meta title="Recipes" />
      <main className="page">
        <h1>Recipes</h1>

        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
