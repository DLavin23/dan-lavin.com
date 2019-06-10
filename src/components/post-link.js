import React from "react"
import { Link } from "gatsby"
import { Box } from 'rebass'

const PostLink = ({ post }) => (
  <Box>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </Box>
)

export default PostLink