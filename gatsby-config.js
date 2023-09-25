require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Performa Biennial 2023`,
    description: `Founded by art historian and curator RoseLee Goldberg, Performa is the leading organization dedicated to exploring the critical role of live performance in the history of twentieth-century art and to encouraging new directions in performance for the twenty-first century.`,
    author: `@performanyc`,
    keywords: `performance, nyc, dance, art, avant-garde, events`,
    siteUrl: `https://performa2023.org/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `fsbkf27sqc87`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
