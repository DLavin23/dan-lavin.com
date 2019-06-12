import * as React from 'react'
import { graphql } from 'gatsby'
import { Box, Text } from 'rebass'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'

class BookTemplate extends React.Component {
  render() {
    const post = this.props.data.post
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        pageBackground="white"
        pageColor="offBlack"
      >
        <Box py={[4,5]}>
          <Wrapper
            maxWidth="700px"
          >
            <Box py={4}>
              <Text
                is="h1"
                fontSize={[7,8,9]}
              >
              {post.frontmatter.title}
            </Text>
            </Box>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Wrapper>
        </Box>
      </Layout>
    )
  }
}

export default BookTemplate

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
