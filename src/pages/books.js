import React from 'react'
import { Link, graphql } from 'gatsby'
import { Box, Text } from 'rebass'
import { Layout } from '../components'

class BookIndex extends React.Component {
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
              const authors = node.frontmatter.authors
              // const tags = node.frontmatter.tags
              // const renderMultipleTags = tags.map(tag => `${tag}, `)
              // const renderMultipleAuthors = authors.length > 1 ? authors.join() : authors
              const renderMultipleAuthors = authors.map(author => author)

              return (
                <Box width={['100%', '600px']} pb={4} key={node.fields.slug}>
                  {/* <Tag>{tags.length > 1 ? renderMultipleTags : tags}</Tag> */}
                  <Text as="h3" fontSize={[3,5]} m={0} pb={1}>
                    <Link to={`/books/${node.fields.slug}`}>{title}</Link>
                  </Text>
                  <Text as="p" color="grayDark" m={0} pb={3} fontSize={1}>
                    Written by: {authors.length > 1 ? renderMultipleAuthors.join(", ") : authors}
                  </Text>
                  <Text as="p" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </Box>
              )
            })}
          </div>
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
