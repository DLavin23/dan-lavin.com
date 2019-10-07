import React from 'react'
import { graphql } from 'gatsby'
import { Box } from 'rebass'
import { Layout, PostPreview } from '../components'

class BookIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    const books = data.allMarkdownRemark.edges
      .map(edge => <PostPreview key={edge.node.fields.slug} post={edge.node} prefix='books' />)

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        desc={description}
      >
        <Box py={[4,5]} width={['100%', '600px']}>
          {books}
        </Box>
      </Layout>
    )
  }
}

export default BookIndex

export const bookQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceName: { eq: "books" } } }

    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            authors
            tags
          }
        }
      }
    }
  }
`
