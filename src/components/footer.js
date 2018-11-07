import React from 'react'
import system from 'system-components'
import Wrapper from './Wrapper'
import { GitHub, Linkedin, Codepen, Twitter, Instagram } from 'react-feather'

const UIFooter = system({
  is: 'footer',
  borderTop: '1px solid',
  borderColor: 'grayLight',
  p: 3,
  width: '100%',
})

const FooterGreeting = system({
  is: 'span',
})

const FooterList = system({
  is: 'ul',
  display: 'flex',
  m: 0,
  p: 0,
},{
  listStyle: 'none'
})

const FooterListItem = system({
  is: 'li',
  px: 2,
})

const FooterLink = system({
  is: 'a',
  color: 'offBlack'
})

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function HumanReadableDay() {
  return days[new Date().getDay()]
}

const renderContactLinks = () => {
  const socialLinks = [
    {
      title: 'Github',
      location: 'https://github.com/DLavin23/',
      icon: <GitHub />
    },
    {
      title: 'Linkedin',
      location: 'https://www.linkedin.com/in/lavindan',
      icon: <Linkedin />,
    },
    {
      title: 'Codepen',
      location: 'http://codepen.io/DLavin23/',
      icon: <Codepen />
    },
    {
      title: 'Twitter',
      location: 'https://twitter.com/danlavin',
      icon: <Twitter />
    },
    {
      title: 'Instagram',
      location: 'https://instagram.com/dlavin',
      icon: <Instagram />
    },
  ]

  return socialLinks.map(link => {
    return (
      <FooterListItem
        key={link.title}
      >
        <FooterLink
          href={link.location}
          title={link.title}
        >
          {link.icon}
        </FooterLink>
      </FooterListItem>
    )
  })
}


const Footer = () => (
  <UIFooter>
    <Wrapper>
      <FooterGreeting>&copy;{new Date().getFullYear()} Happy {HumanReadableDay()}!</FooterGreeting>
      <FooterList>
        {renderContactLinks()}
      </FooterList>
    </Wrapper>
  </UIFooter>
)

export default Footer