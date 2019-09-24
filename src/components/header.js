import React from 'react'
import { useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import { Box, Flex, Text } from 'rebass'
import { Moon, Sun } from 'react-feather'
import { Container } from '.'

const Header = ({ siteTitle, navLinks }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Box as="header">
      <Container>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          py={3}
        >
          <Text
            as="h1"
            fontWeight='bold'
            fontSize={4}
          >
            <Link
              to="/"
              style={{textDecoration: 'none'}}
            >
              <Text as="span" color="text" fontSize={5}>{siteTitle}</Text>
            </Link>
          </Text>

          <Box as="nav">
            <Flex
              as="ul"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                listStyleType: "none"
              }}
            >
              {
                navLinks.map(link =>
                  <Box
                    as="li"
                    key={link.name}
                    px={2}
                  >
                    <Link
                      to={link.link}
                      activeClassName='active-link'
                      style={{textDecoration: 'none'}}
                    >
                      <Text as="span" color="text">{link.name}</Text>
                    </Link>
                    {/* <Link
                      to={link.link}
                      activeClassName='active'
                      sx={{
                        color: 'inherit',
                        '&.active': {
                          color: 'primary',
                        }
                      }}>
                      {link.name}
                    </Link> */}
                  </Box>
                )
              }
              <Text
                as="li"
                display="inline-flex"
                px={2}
                sx={{cursor: 'pointer'}}
                onClick={e => {
                  setColorMode(colorMode === 'default' ? 'dark' : 'default')
                }}>
                  {colorMode === 'default' ? <Moon size={16} /> : <Sun size={16} /> }
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
