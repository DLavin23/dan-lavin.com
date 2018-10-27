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

// TODO: refactor and move to separate component
const Nav = system({
  is: 'nav',
  display: 'flex',
})

const Header = ({ siteTitle }) => (
  <UIHeader>
    <Logo>
      <Link
        to="/"
        activeStyle={{
          textDecoration: 'underline'
        }}
      >
        {siteTitle}
      </Link>
    </Logo>
    <Nav>
      <Link
        to="/about"
        activeStyle={{
          textDecoration: 'underline'
        }}
      >
        About
      </Link>
      <Link
        to="/writing"
        activeStyle={{
          textDecoration: 'underline'
        }}
      >
        Writing
      </Link>
    </Nav>
  </UIHeader>
)

export default Header
