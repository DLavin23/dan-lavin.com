import React from 'react'
import { Box, Flex } from 'rebass'
import { useThemeUI } from 'theme-ui'
import { GitHub, Linkedin, Codepen, Twitter, Instagram } from 'react-feather'

const ContactLinks = () => {
  const context = useThemeUI()
  const { colorMode } = context
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

  const renderContactLinks =
    socialLinks.map(link => {
      return (
        <Box
          as='li'
          key={link.title}
          alignItems='center'
          justifyContent='center'
          display='flex'
          p={1}
        >
          <a
            href={link.location}
            title={link.title}
          >
          <Flex
            color='muted'
            sx={{
              borderRadius: 4,
              p: 2,
              '&:hover, &:focus': {
                bg: colorMode === 'light' ? 'rgba(255,255,255,1)' : 'gray700',
                boxShadow: 'base',
                color: 'text'
              },
            }}
            >
            {link.icon}
          </Flex>
          </a>
        </Box>
      )
    })

  return (
    <Flex
      as='ul'
      mx={-2}
      sx={{
        listStyle: 'none'
      }}
    >
      {renderContactLinks}
    </Flex>
  )
}

export default ContactLinks
