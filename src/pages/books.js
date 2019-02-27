import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from '../components/Hero'
import Wrapper from '../components/Wrapper'
import Box from '../components/Box'
import Text from '../components/Text'

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
        <Hero>
          <Wrapper>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Box maxWidth="600px" pb={4} key={node.fields.slug}>
                  <Text is="h3" fontSize={[3,5]} m={0} pb={1}>
                    <Link to={node.fields.slug}>{title}</Link>
                  </Text>
                  <Text is="p" color="grayDark" m={0} pb={3} fontSize={1}>By: {node.frontmatter.author}</Text>
                  <Text is="p" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </Box>
              )
            })}
          </Wrapper>
        </Hero>
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
            author
            tags
          }
        }
      }
    }
  }
`