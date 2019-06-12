import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Text } from 'rebass'
import Layout from "../components/layout"
import Wrapper from '../components/wrapper'

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
        pageBackground="offWhite"
      >
        <Box py={[4,5]}>
          <Wrapper>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              console.log(node)
              return (
                <Box maxWidth="600px" pb={4} key={node.fields.slug}>
                  <Text as="h3" fontSize={[3,5]} m={0} pb={1}>
                    <Link to={`/journal/${node.fields.slug}`}>{title}</Link>
                  </Text>
                  <Text is="p" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </Box>
              )
            })}
          </Wrapper>
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