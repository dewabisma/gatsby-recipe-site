import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClock, BsClockHistory, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const RecipesTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    serving,
    prepTime,
    image,
    content,
    description: { description },
  } = data.contentfulRecipes
  const pathToImage = getImage(image)
  const { ingredients, instructions, tags, tools } = content

  return (
    <Layout>
      <SEO title={title} />
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />

            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{`${prepTime} min.`}</p>
                </article>

                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{`${cookTime} min.`}</p>
                </article>

                <article>
                  <BsPeople />
                  <h5>serving</h5>
                  <p>{serving}</p>
                </article>
              </div>

              <p className="recipe-tags">
                Tags :
                {tags.map(tag => (
                  <Link key={tag} to={`/${tag}`}>
                    {tag}
                  </Link>
                ))}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>
              {instructions.map((item, index) => (
                <div key={index} className="single-instruction">
                  <header>
                    <p>Step {index + 1}</p>
                    <div></div>
                  </header>

                  <p>{item}</p>
                </div>
              ))}
            </article>
            <article className="second-column">
              <div id="ingredients">
                <h4>ingredients</h4>
                {ingredients.map((item, index) => (
                  <p key={index} className="single-ingredient">
                    {item}
                  </p>
                ))}
              </div>
              <div id="tools">
                <h4>tools</h4>
                {tools.map((item, index) => (
                  <p key={index} className="single-tool">
                    {item}
                  </p>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipes(title: { eq: $title }) {
      cookTime
      title
      serving
      prepTime
      id
      image {
        gatsbyImageData(layout: CONSTRAINED)
      }
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
    }
  }
`

export default RecipesTemplate
