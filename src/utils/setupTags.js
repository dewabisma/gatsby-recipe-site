const setupTags = recipes => {
  console.log("setting up tags")
  let allTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] += 1
      } else {
        allTags[tag] = 1
      }
    })
  })

  return Object.entries(allTags).sort((a, b) => {
    return a[0].localeCompare(b[0])
  })
}

export default setupTags
