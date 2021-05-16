import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"

const About = ({
  data: {
    allContentfulRecipes: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Yeah, We Can Cook All Day!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sit
              amet nisi. Officiis eveniet eius reprehenderit dolores sapiente
              quae aliquam!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi error consectetur reprehenderit sint, deleniti
              laudantium.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>

          <StaticImage
            src="../assets/images/about.jpeg"
            alt="A Person Pouring Salt Into a Bowl"
            placeholder="blurred"
            className="about-img"
          />
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

export default About
