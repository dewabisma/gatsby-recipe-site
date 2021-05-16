import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const query = graphql`
  query getSiteMetadata {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const data = useStaticQuery(query)
  const { siteDescription, siteTitle } = data.site.siteMetadata
  return (
    <Helmet>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description || siteDescription} />
    </Helmet>
  )
}

export default SEO
