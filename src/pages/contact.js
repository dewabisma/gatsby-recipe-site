import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({
  data: {
    allContentfulRecipes: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get in Touch?</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quos debitis nemo exercitationem inventore quo laudantium, alias
              repellendus illo numquam?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Mollitia, voluptatum.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa
              saepe, labore est accusamus itaque.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>

              <div className="form-row">
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="message"></textarea>
              </div>

              <button className="btn block" type="submit">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipes(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        cookTime
        title
        prepTime
        image {
          gatsbyImageData
        }
      }
    }
  }
`

export default Contact
