import React from "react"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import Layout from "../components/Layout"
import Meta from "../components/Meta"

const Tags = ({
  data: {
    allContentfulRecipes: { nodes: recipes },
  },
}) => {
  const tags = setupTags(recipes)
  return (
    <Layout>
      <Meta title="Tags" />
      <main className="page">
        <section className="tags-page">
          {tags.map(tag => {
            const [text, value] = tag

            return (
              <Link key={text} to={`/${text}`} className="tag">
                <h5>{text}</h5>
                <p>{value > 1 ? `${value} Recipes` : `1 recipe`}</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipes {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
