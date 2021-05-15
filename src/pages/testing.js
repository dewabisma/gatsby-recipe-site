import React from "react"
import { graphql } from "gatsby"

const Testing = props => {
  console.log(props)
  return <div>hehe</div>
}
export const data = graphql`
  query {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
      }
    }
  }
`
export default Testing
