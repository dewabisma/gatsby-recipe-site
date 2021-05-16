import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import RecipesList from "./RecipesList"
import TagsList from "./TagsList"

const query = graphql`
  {
    allContentfulRecipes(sort: { fields: title, order: ASC }) {
      nodes {
        id
        cookTime
        title
        prepTime
        image {
          gatsbyImageData
        }
        content {
          tags
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipes.nodes

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
