import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Text } from 'rebass'
import { GitHub, Linkedin, Codepen, Twitter, Instagram } from 'react-feather'

const renderContactLinks = () => {
  const socialLinks = [
    {
      title: 'Github',
      location: 'https://github.com/DLavin23/',
      icon: <GitHub size={18} />,
    },
    {
      title: 'Linkedin',
      location: 'https://www.linkedin.com/in/lavindan',
      icon: <Linkedin size={18} />,
    },
    {
      title: 'Codepen',
      location: 'http://codepen.io/DLavin23/',
      icon: <Codepen size={18} />,
    },
    {
      title: 'Twitter',
      location: 'https://twitter.com/danlavin',
      icon: <Twitter size={18} />,
    },
    {
      title: 'Instagram',
      location: 'https://instagram.com/dlavin',
      icon: <Instagram size={18} />,
    },
  ]

  return socialLinks.map(link => {
    return (
      <Box
        as='li'
        key={link.title}
        alignItems='center'
        justifyContent='center'
        display='flex'
        m={2}
      >
        <Link
          href={link.location}
          title={link.title}
        >
          <Text
            color='muted'
            sx={{
              '&:hover, &:focus': { color: 'gray800' },
            }}
          >
            {link.icon}
          </Text>
        </Link>
      </Box>
    )
  })
}

const ContactLinks = () => {
  return (
    <Flex
      as='ul'
      sx={{
        listStyle: 'none'
      }}
    >
      {renderContactLinks()}
    </Flex>
  )
}

export default ContactLinks
