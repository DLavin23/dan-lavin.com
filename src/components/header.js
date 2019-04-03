import React from 'react'
import { Link } from 'gatsby'
import { AtSign } from 'react-feather'
// import { themeGet } from 'styled-system'
import system from 'system-components'
import Box from './box'
import Wrapper from './wrapper'

const UIHeader = system({
  is: 'header',
  bg: 'offWhite',
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
},
{
  textDecoration: 'none'
})

const NavLink = system(
  {
    is: 'li',
    color: 'offBlack',
    fontSize: 3,
    fontWeight: 400,
    display: 'inline-flex',
    px: 2,
    m: 0,
  },
  {
    listStyleType: 'none',
  }
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
                    borderBottom: '2px solid #517dbc',
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
