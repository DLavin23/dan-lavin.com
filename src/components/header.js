import React from 'react'
import system from 'system-components'
import Box from './Box'
import Wrapper from './Wrapper'
import { Link } from 'gatsby'
import { AtSign } from 'react-feather'

const UIHeader = system({
  is: 'header',
  borderBottom: '1px solid',
  borderColor: 'grayLight',
  py: 3,
  w: 1,
})

const Logo = system({
  is: 'h1',
  m: 0,
  fontSize: 4,
  width: '25%'
})

const UINavLink = system({
  is: Link,
  display: 'flex',
  alignItems: 'center',
})

// TODO: refactor and move to separate component
const Nav = system({
  is: 'nav',
  display: 'flex',
})

const Header = ({ siteTitle }) => (
  <UIHeader>
    <Wrapper>
      <Logo>
        <UINavLink
          to="/"
          activeStyle={{
            textDecoration: 'none'
          }}
        >
          <AtSign size={20}/>
          <Box is="span" px={1}>{siteTitle}</Box>
        </UINavLink>
      </Logo>
      <Nav>
        <Link
          to="/about"
          activeStyle={{
            textDecoration: 'none'
          }}
        >
          About
        </Link>
        <Link
          to="/writing"
          activeStyle={{
            textDecoration: 'none'
          }}
        >
          Writing
        </Link>
      </Nav>
    </Wrapper>
  </UIHeader>
)

export default Header
