/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetData {
      allContentfulPerformance {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const performances = result.data.allContentfulPerformance.edges

  performances.forEach(({ node }) => {
    const performanceSlug = node.slug
    createPage({
      path: `/${performanceSlug}`,
      component: require.resolve('./src/templates/performance-template.js'),
      context: { slug: performanceSlug },
    })
  })
}
