import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex } from 'rebass'
import { GitHub, Linkedin, Codepen, Twitter, Instagram } from 'react-feather'

const renderContactLinks = () => {
  const socialLinks = [
    {
      title: 'Github',
      location: 'https://github.com/DLavin23/',
      icon: <GitHub size={16} />,
    },
    {
      title: 'Linkedin',
      location: 'https://www.linkedin.com/in/lavindan',
      icon: <Linkedin size={16} />,
    },
    {
      title: 'Codepen',
      location: 'http://codepen.io/DLavin23/',
      icon: <Codepen size={16} />,
    },
    {
      title: 'Twitter',
      location: 'https://twitter.com/danlavin',
      icon: <Twitter size={16} />,
    },
    {
      title: 'Instagram',
      location: 'https://instagram.com/dlavin',
      icon: <Instagram size={16} />,
    },
  ]

  return socialLinks.map(link => {
    return (
      <Box
        as='li'
        key={link.title}
        bg='primary'
        color='colors.white'
        m={2}
      >
        <Link
          href={link.location}
          title={link.title}
        >
          {link.icon}
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
