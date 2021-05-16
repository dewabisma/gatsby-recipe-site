const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tagTemplate = path.resolve("src/template/tag-template.js")
  const result = await graphql(`
    query getTag {
      allContentfulRecipes {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulRecipes.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      createPage({
        path: `/${tag}`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  })
}
