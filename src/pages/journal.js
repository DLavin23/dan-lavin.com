import React from 'react'
import { graphql } from 'gatsby'
import { Box } from 'rebass'
import { Layout, PreviewLink } from '../components'

class JournalIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    const journalEntries = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <PreviewLink key={edge.node.fields.slug} post={edge.node} prefix='journal' />)

    console.log(data.allMarkdownRemark.edges)

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        desc={description}
      >
        <Box py={[4,5]} width={['100%', '600px']}>
          {journalEntries}
        </Box>
      </Layout>
    )
  }
}

export default JournalIndex

export const journalQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceName: { eq: "journal" } } }

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
          }
        }
      }
    }
  }
`
