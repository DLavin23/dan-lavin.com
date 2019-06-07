const path = require('path')

exports.createPages = (graphql, createPage) => new Promise((resolve, reject) => {
  const bookTemplate = path.resolve('./src/templates/book.js')

  graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {fields: {sourceName: {eq: "books"}}}
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
        path: `/books${post.node.fields.slug}`,
        component: bookTemplate,
        context: {
          slug: post.node.fields.slug,
          title: post.node.frontmatter.title
        },
      })
    })

    resolve()
  })
})
