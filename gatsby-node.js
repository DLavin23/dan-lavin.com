/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require('gatsby-source-filesystem')

const { createPages: createBookPages } = require('./config/book-setup')
const { createPages: createJournalPages } = require('./config/journal-setup')
const { createPages: createWorkPages } = require('./config/work-setup')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const setupSteps = []

  setupSteps.push(createBookPages(graphql, createPage))
  setupSteps.push(createJournalPages(graphql, createPage))
  setupSteps.push(createWorkPages(graphql, createPage))

  return Promise.all(setupSteps)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}