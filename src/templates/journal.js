import * as React from 'react'
import { graphql } from 'gatsby'
import { Box, Text } from 'rebass'
import Layout from '../components/layout'


class JournalTemplate extends React.Component {
  render() {
    const post = this.props.data.post
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
      >
        <Box py={[4,5]}>
          <div
            maxWidth="700px"
          >
            <Box py={4}>
              <Text
                as="h1"
                fontSize={[7,8,9]}
              >
              {post.frontmatter.title}
            </Text>
            <Text
              as="p"
              fontSize={[3,4]}
            >
              Written {post.frontmatter.date}
            </Text>
            </Box>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </Box>
      </Layout>
    )
  }
}

export default JournalTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        title
      }
      html
    }
  }
`
