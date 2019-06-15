import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Text } from 'rebass'
import Layout from "../components/layout"
import Wrapper from '../components/wrapper'

class WorkIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    const jobs = data.allMarkdownRemark.edges

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        desc={description}
        pageBackground="offWhite"
      >
        <Box py={[4,5]}>
          <Wrapper>
            {jobs.map(({ node }) => {
              const company = node.frontmatter.company

              return (
                <Box maxWidth="600px" pb={4} key={node.fields.slug}>
                  <Text as="h3" fontSize={[3,5]} m={0} pb={1}>
                    <Link to={`/work/${node.fields.slug}`}>{company}</Link>
                  </Text>
                  <Text as="p" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </Box>
              )
            })}
          </Wrapper>
        </Box>
      </Layout>
    )
  }
}

export default WorkIndex

export const workQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceName: { eq: "work" } } }

    ) {
      edges {
        node {
          excerpt
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
