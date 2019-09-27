import React from 'react'
import styled from '@emotion/styled'
import { useColorMode, useThemeUI } from 'theme-ui'
import { Link } from 'gatsby'
import { Box, Flex, Text } from 'rebass'
import { Home, Moon, Sun } from 'react-feather'
import { Container } from '.'

const Header = ({ siteTitle, navLinks }) => {
  const [colorMode, setColorMode] = useColorMode()
  const context = useThemeUI()

  const StyledLink = styled(props => <Link {...props} />)`
    color: ${context.theme.colors.text};
    display: inline-flex;
    padding-bottom: ${context.theme.space[2]}px;
    padding-top: ${context.theme.space[2]}px;
    text-decoration: none;
    &:hover {
      color: ${context.theme.colors.primary};
    }
  `;

  return (
    <Box as="header" fontFamily='body'>
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
            sx={{alignItems: 'center', display: 'flex'}}
          >
            <StyledLink
              to="/"
            >
              <Flex
                alignItems="center"
                justifyContent="center"
              >
                <Home size={18} color={context.theme.colors.muted}/>
                <Box as="span" px={2}>{siteTitle}</Box>
              </Flex>

            </StyledLink>
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
                    fontSize={3}
                    px={2}
                  >
                    <StyledLink
                      to={link.link}
                      activeStyle={{
                        boxShadow: `inset 0 -2px 0 ${context.theme.colors.primary}`,
                        color: `${context.theme.colors.primary}`,
                        fontWeight: '600',
                      }}
                    >
                      {link.name}
                    </StyledLink>
                  </Box>
                )
              }
              <Text
                as="li"
                display="inline-flex"
                fontSize={3}
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
