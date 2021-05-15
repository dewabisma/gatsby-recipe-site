/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Best recipes site ever",
    author: "@dwbisma",
    person: { name: "bisma", age: 22 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "bisma", age: 22 },
      { name: "ayu", age: 20 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
