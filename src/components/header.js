import React from 'react'
import { themeGet } from 'styled-system'
import system from 'system-components'
import Box from './Box'
import Wrapper from './Wrapper'
import { Link } from 'gatsby'
import { AtSign } from 'react-feather'

const UIHeader = system({
  is: 'header',
  borderTop: '4px solid',
  borderColor: 'blue',
  py: 3,
  w: 1,
})

const Logo = system({
  is: 'h1',
  m: 0,
  fontSize: 4,
  width: ['auto', '25%']
})

const LogoLink = system({
  is: 'a',
  alignItems: 'center',
  color: 'offBlack',
  display: 'flex',
  fontWeight: '700',
})

const NavLink = system(
{
  is: Link,
  color: 'grayDark',
  // display: ['none', 'inline-block'],
  fontSize: 3,
  px: 2,
  blacklist: ['Link']
},
  props => ({
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      color: themeGet('colors.blue')(props),
    },
  })
)

// TODO: refactor and move to separate component
const Nav = system({
  is: 'nav',
  display: 'flex'
})

const Header = ({ siteTitle, navLinks }) => (
  <UIHeader>
    <Wrapper>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Logo>
          <LogoLink
            href="/"
          >
            <AtSign size={20} color="#999" />
            <Box is="span" px={1}>{siteTitle}</Box>
          </LogoLink>
        </Logo>
        <Nav>
          {
            navLinks.map(link =>
              <NavLink key={link.name}>
                <Link
                  to={link.link}
                  style={{textDecoration: 'none', color: 'inherit'}}
                  activeStyle={{
                    textDecoration: 'underline'
                  }}
                >
                  {link.name}
                </Link>
              </NavLink>
            )
          }
        </Nav>
      </Box>
    </Wrapper>
  </UIHeader>
)

export default Header
