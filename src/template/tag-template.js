import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const TagTemplate = ({ data, pageContext: { tag } }) => {
  const recipesData = data.allContentfulRecipes.nodes
  return (
    <Layout>
      <SEO title={tag} />
      <main className="page">
        <h2>{tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipesData} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getRecipesByTag($tag: String) {
    allContentfulRecipes(filter: { content: { tags: { eq: $tag } } }) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`

export default TagTemplate
