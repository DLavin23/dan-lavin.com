import React from 'react'
import { graphql, Link } from 'gatsby'
import { Box, Text } from 'rebass'
import { Layout } from '../components'

class JournalIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        desc={description}
      >
        <Box py={[4,5]}>
          <div>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Box width={['100%', '600px']}  pb={4} key={node.fields.slug}>
                  <Link
                    to={`/journal/${node.fields.slug}`}
                    color="gray700"
                    fontSize={[4,5]}
                    fontWeight="800"
                  >
                    {title}
                  </Link>
                  <Text
                    as="p"
                    color="gray600"
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  />
                </Box>
              )
            })}
          </div>
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
