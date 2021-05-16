import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  const tags = setupTags(recipes)

  console.log(tags)
  return <div>Tags List</div>
}

export default TagsList
