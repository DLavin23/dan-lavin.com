/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Box, Text } from 'rebass'

const PostLink = ({ color, fontSize, ...props }) => (
  <Link
    {...props}
    sx={{
      color: 'heading',
      fontWeight: 'bold',
      fontSize: [4,5,6],
      textDecoration: 'none',
      '&:hover': {
        color: 'primary'
      }
    }}
  />
)

const PostPreview = ({ post, prefix }) => {
  return (
    <Box pb={5}>
      <Text
        as='h3'
        fontFamily='heading'
        mb={2}
      >
        <PostLink to={`/${prefix}/${post.fields.slug}`}>
          {post.frontmatter.title}
        </PostLink>
      </Text>
      <Text
        fontSize={[2]}
        color='muted'
        mb={2}
      >
        {post.frontmatter.date}
      </Text>
      <Text
        as='p'
        color='text'
        fontSize={[2,3]}
        fontFamily='body'
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
    </Box>
  )
}


export default PostPreview