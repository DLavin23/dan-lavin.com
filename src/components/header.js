import React from 'react'
import system from 'system-components'
import { Link } from 'gatsby'

const UIHeader = system({
  is: 'header',
  alignItems: 'center',
  display: 'flex',
  borderBottom: '1px solid',
  borderColor: 'grayLight',
  justifyContent: 'space-between',
  p: 3,
  width: 1,
})

const Logo = system({
  is: 'h1',
  m: 0,
  fontSize: 2,
  width: '25%'
})

const LogoLink = system({
  is: Link,
  color: 'blue',
},
  {
    textDecoration: 'none',
  }
)

// TODO: refactor and move to separate component
const Nav = system({
  is: 'nav',
  display: 'flex',
})

const NavLink = system({
  is: Link,
  fontSize: 2,
  px: 2,
},
  {
    textDecoration: 'none',
  }
)

const Header = ({ siteTitle }) => (
  <UIHeader>
    <Logo>
      <LogoLink
        to="/"
        activeStyle={{
          textDecoration: 'underline'
        }}
      >
        {siteTitle}
      </LogoLink>
    </Logo>
    <Nav>
      <NavLink
        to="/about"
        activeStyle={{
          textDecoration: 'underline'
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/writing"
        activeStyle={{
          textDecoration: 'underline'
        }}
      >
        Writing
      </NavLink>
    </Nav>
  </UIHeader>
)

export default Header
