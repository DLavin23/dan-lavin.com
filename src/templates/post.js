import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Box from '../components/Box'
import Hero from '../components/Hero'
import Text from '../components/Text'

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle} pageBackground="offWhite" pageColor="offBlack">
        <Hero>
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
        </Hero>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`