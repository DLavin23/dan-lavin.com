import React from 'react'
import system from '@rebass/components'
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
    color: 'offBlack',
  },
  'color'
)

const renderContactLinks = () => {
  const socialLinks = [
    {
      title: 'Github',
      location: 'https://github.com/DLavin23/',
      icon: <GitHub />,
    },
    {
      title: 'Linkedin',
      location: 'https://www.linkedin.com/in/lavindan',
      icon: <Linkedin />,
    },
    {
      title: 'Codepen',
      location: 'http://codepen.io/DLavin23/',
      icon: <Codepen />,
    },
    {
      title: 'Twitter',
      location: 'https://twitter.com/danlavin',
      icon: <Twitter />,
    },
    {
      title: 'Instagram',
      location: 'https://instagram.com/dlavin',
      icon: <Instagram />,
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
