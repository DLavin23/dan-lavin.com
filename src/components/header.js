import React from 'react'
import { system } from 'system-components'
import { Link } from 'gatsby'

const Logo = system({
  is: 'div',
  border: '1px solid red',
  fontSize: 2,
  fontWeight: 'bold',
  color: 'offBlack',
  m: 0,
  py: 1,
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
