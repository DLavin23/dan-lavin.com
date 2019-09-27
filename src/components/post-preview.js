import React from 'react'
import styled from '@emotion/styled'
import { useThemeUI } from 'theme-ui'
import { Link } from 'gatsby'
import { Box, Text } from 'rebass'

const PreviewLink = ({ post, prefix }) => {
  const context = useThemeUI()

  const PostLink = styled(props => <Link {...props} />)`
    color: ${context.theme.colors.accent};
    font-size: ${context.theme.fontSizes[4]}px;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: ${context.theme.colors.primary};
    }
  `;

  return (
    <Box pb={4}>
      <Text
        as='h3'
        mb={2}
      >
        <PostLink to={`/${prefix}/${post.fields.slug}`}>
          {post.frontmatter.title}
        </PostLink>
      </Text>
      <Text
        fontSize={3}
        color='muted'
        mb={2}
      >
        {post.frontmatter.date}
      </Text>
      <Text
        as='p'
        color='text'
        fontSize={3}
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
    </Box>
  )
}


export default PreviewLink