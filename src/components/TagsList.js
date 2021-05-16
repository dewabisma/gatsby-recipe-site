import React from "react"
import { Link } from "gatsby"
import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  const tags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {tags.map(tag => {
          const [text, value] = tag
          return <Link key={text} to={`/${text}`}>{`${text} (${value})`}</Link>
        })}
      </div>
    </div>
  )
}

export default TagsList
