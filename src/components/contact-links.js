import React from 'react'
import system from '@rebass/components'
import { themeGet } from 'styled-system'
import { GitHub, Linkedin, Codepen, Twitter, Instagram } from 'react-feather'

const ContactList = system(
  {
    as: 'ul',
    display: 'flex',
    m: 0,
    p: 0,
  },{
    listStyle: 'none'
  },
  'display',
  'space',
)

const ContactListItem = system(
  {
    as: 'li',
    pr: 3,
  },
  'space'
)

const ContactLink = system(
  {
    as: 'a',

    bg: 'white',
    borderRadius: '100%',
    boxShadow: 1,
    color: 'offBlack',
    display: 'flex',
    p: 2,
  },
  props => ({
    '&:hover': {
      boxShadow: `${themeGet('shadows.2')(props)}`,
    }
  }),
  'borderRadius',
  'boxShadow',
  'color',
  'display',
  'space',
)

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
      <ContactListItem
        key={link.title}
      >
        <ContactLink
          href={link.location}
          title={link.title}
        >
          {link.icon}
        </ContactLink>
      </ContactListItem>
    )
  })
}

const ContactLinks = () => {
  return (
    <ContactList>
      {renderContactLinks()}
    </ContactList>
  )
}

export default ContactLinks
