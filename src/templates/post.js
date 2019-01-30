import React from 'react'
import { graphql } from 'gatsby'
import system from 'system-components'
import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'

const PostBody = system({
  is: 'div',
  // fontSize: 4,
})
class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Wrapper>
          <h1>{post.frontmatter.title}</h1>
          <p>
            {post.frontmatter.date}
          </p>
          <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />
        </Wrapper>
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