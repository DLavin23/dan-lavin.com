import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { Link } from 'gatsby'
import Container from './container'

const Header = ({ siteTitle, navLinks }) => (
  <Box as="header">
    <Container>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        py={3}
      >
        <Text as="h1" fontWeight='bold'>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </Text>

        <Box as="nav">
          <Flex
            as="ul"
            sx={{
              listStyleType: "none"
            }}
            alignItems="center"
            justifyContent="space-between"
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
                    style={{textDecoration: 'none', color: 'inherit'}}
                    activeStyle={{
                      borderBottom: '2px solid #517dbc',
                    }}
                  >
                    {link.name}
                  </Link>
                </Box>
              )
            }
          </Flex>
        </Box>
      </Flex>
    </Container>
  </Box>
)

export default Header
