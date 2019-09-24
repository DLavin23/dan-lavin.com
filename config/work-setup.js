const path = require('path')

exports.createPages = (graphql, createPage) => new Promise((resolve, reject) => {
  const workTemplate = path.resolve('./src/templates/work.js')

  graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {fields: {sourceName: {eq: "work"}}}
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                company
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

    allMarkdownRemark.edges.forEach(job => {
      createPage({
        path: `/work${job.node.fields.slug}`,
        component: workTemplate,
        context: {
          slug: job.node.fields.slug,
          title: job.node.frontmatter.title
        },
      })
    })

    resolve()
  })
})
