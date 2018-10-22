import React from 'react'
import system from 'system-components'
import { Link } from 'gatsby'

const Header = system({
  is: 'header',
  borderBottom: '1px solid',
  borderColor: 'grayLight',
  p: 3,
})

const Logo = system({
  is: 'h1',
  fontSize: 1,
})

const Header = ({ siteTitle }) => (
  <header>
    <Logo>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </Logo>
  </header>
)

export default Header
