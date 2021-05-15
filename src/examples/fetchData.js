import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const componentQuery = graphql`
  query {
    site {
      info: siteMetadata {
        title
        author
        person {
          name
          age
        }
        simpleData
        complexData {
          name
          age
        }
      }
    }
  }
`

const FetchData = () => {
  const data = useStaticQuery(componentQuery)
  const { title, person } = data.site.info
  return (
    <div>
      <h2>{title}</h2>
      <p>{person.name}</p>
    </div>
  )
}

export default FetchData
