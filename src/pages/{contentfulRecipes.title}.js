import React from "react"

const RecipesTemplate = ({ params }) => {
  const { title } = params

  return <h2>{title}</h2>
}

export default RecipesTemplate
