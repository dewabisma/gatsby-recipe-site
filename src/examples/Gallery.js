import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { extension: { nin: ["svg", "css"] } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 200
            height: 200
            placeholder: TRACED_SVG
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes

  return (
    <Wrapper>
      {nodes.map((image, index) => (
        <article key={index} className="item">
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt={image.name}
            className="gallery-img"
          />
          <p>{image.name}</p>
        </article>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  .item {
    margin-right: 1rem;
  }

  .gallery-img {
    border-radius: 1rem;
  }
`

export default Gallery
