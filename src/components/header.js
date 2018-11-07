import React from 'react'
import system from 'system-components'
import Box from './Box'
import { Link } from 'gatsby'
import { AtSign } from 'react-feather'

const UIHeader = system({
  is: 'header',
  borderBottom: '1px solid',
  borderColor: 'grayLight',
  py: 3,
  w: 1,
})

const Wrapper = system({
  is: 'div',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  mx: 'auto',
  px: [2,4],
  maxWidth: '960px'
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
    <Wrapper>
      <Logo>
        <Link
          to="/"
          activeStyle={{
            textDecoration: 'none'
          }}
        >
          <Box display="flex" alignItems="center">
            <AtSign />
            {siteTitle}
          </Box>
        </Link>
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
