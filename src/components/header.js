import React from 'react'
import system from '@rebass/components'
import { Box, Flex } from 'rebass'
import { Link } from 'gatsby'
import { AtSign } from 'react-feather'
import Wrapper from '../components/wrapper'

const UIHeader = system(
  {
    as: 'header',
    bg: 'offWhite',
    py: 3,
    width: 1,
  },
  'color',
  'space',
  'width',
)

const Logo = system(
  {
    as: 'h1',
    m: 0,
    fontSize: 4,
    width: ['auto', '25%']
  },
  'fontSize',
  'space',
  'width',
)

const LogoLink = system(
  {
    as: 'a',
    alignItems: 'center',
    color: 'offBlack',
    display: 'flex',
    fontWeight: '700',
  },
  {
    textDecoration: 'none'
  },
  'alignItems',
  'color',
  'display',
  'fontWeight',
  'space',
  'width',
)

const NavLink = system(
  {
    as: 'li',
    color: 'offBlack',
    display: 'inline-flex',
    fontSize: 3,
    fontWeight: 400,
    px: 2,
    m: 0,
  },
  {
    listStyleType: 'none',
  },
  'color',
  'display',
  'fontSize',
  'fontWeight',
  'space',
)

// TODO: refactor and move to separate component
const Nav = system(
  {
    as: 'nav',
    display: 'flex'
  },
  'display'
)

const Header = ({ siteTitle, navLinks }) => (
  <UIHeader>
    <Wrapper>
      <Flex alignItems="center" justifyContent="space-between">
        <Logo>
          <LogoLink
            href="/"
          >
            <AtSign size={20} color="#999" />
            <Box as="span" px={1}>{siteTitle}</Box>
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
      </Flex>
    </Wrapper>
  </UIHeader>
)

export default Header
