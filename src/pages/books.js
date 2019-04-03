import React from "react"
import { Link, graphql } from "gatsby"
import Box from 'src/components/box'
import Section from 'src/components/section'
import Layout from "src/components/layout"
import Text from 'src/components/text'
import Wrapper from 'src/components/wrapper'

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
        pageBackground="offWhite"
      >
        <Section>
          <Wrapper>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const authors = node.frontmatter.authors
              // const tags = node.frontmatter.tags
              // const renderMultipleTags = tags.map(tag => `${tag}, `)
              const renderMultipleAuthors = authors.map(author => `${author}, `)

              return (
                <Box maxWidth="600px" pb={4} key={node.fields.slug}>
                  {/* <Tag>{tags.length > 1 ? renderMultipleTags : tags}</Tag> */}
                  <Text is="h3" fontSize={[3,5]} m={0} pb={1}>
                    <Link to={node.fields.slug}>{title}</Link>
                  </Text>
                  <Text is="p" color="grayDark" m={0} pb={3} fontSize={1}>
                    Written by: {authors.length > 1 ? renderMultipleAuthors : authors}
                  </Text>
                  <Text is="p" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </Box>
              )
            })}
          </Wrapper>
        </Section>
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
      filter: { fileAbsolutePath: {regex : "\/books/"} },

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
