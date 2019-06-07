const path = require('path')

exports.createPages = (graphql, createPage) => new Promise((resolve, reject) => {
  const journalTemplate = path.resolve('./src/templates/journal.js')

  graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {fields: {sourceName: {eq: "journal"}}}
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors)
      reject(result.errors)
    }

    const { data: { allMarkdownRemark } } = result

    allMarkdownRemark.edges.forEach(post => {
      createPage({
        path: `/journal${post.node.fields.slug}`,
        component: journalTemplate,
        context: {
          slug: post.node.fields.slug,
          title: post.node.frontmatter.title
        },
      })
    })

    resolve()
  })
})
