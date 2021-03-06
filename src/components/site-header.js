/** @jsx jsx */
import { useState } from 'react'
import { Container, Header, jsx, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import { Box, Flex, Text } from 'rebass'
import { Menu, Moon, Sun, X} from 'react-feather'

const NavLink = ({ ...props }) => (
  <Link
    {...props}
    sx={{
      color: 'text',
      display: 'inline-flex',
      fontSize: 3,
      py: 2,
      position: 'relative',
      textDecoration: 'none',
      '&:hover': {
        color: 'primary'
      },
      '&.active': {
        color: 'primary',
      },
      '&.active::after': {
        borderRadius: '20px',
        bottom: '-5px',
        bg: 'primary',
        content: '""',
        height: '4px',
        right: '0',
        position: 'absolute',
        width: '100%',
      }
    }}
  />
)

const LogoLink = ({ ...props }) => (
  <Link
    {...props}
    sx={{
      alignItems: 'center',
      color: 'accent',
      display: 'flex',
      textDecoration: 'none',
      '&:hover': {
        color: 'primary'
      },
    }}
  >
  </Link>
)

const Nav = ({ ...props }) => (
  <Flex
    {...props}
    sx={{
      alignItems: 'center',
      backgroundColor: props.isMenuOpen ? 'background' : 'intial',
      display: props.isMenuOpen ? 'flex' : 'none',
      height: props.isMenuOpen ? '100%' : 'initial',
      left: props.isMenuOpen ? '0' : 'initial',
      position: props.isMenuOpen ? 'fixed' : 'inital',
      top: props.isMenuOpen ? '0' : 'initial',
      width: props.isMenuOpen ? '100%' : 'initial',
      '@media(min-width: 600px)': {
        display: 'flex'
      }
    }}
  >
  </Flex>
)

const NavList = ({ ...props }) => (
  <Box
    {...props}
    sx={{
      alignItems: 'center',
      display: props.isMenuOpen ? 'block' : 'flex',
      justifyContent: 'space-between',
      listStyleType: 'none',
      m: 0,
      pl: props.isMenuOpen ? 4 : 'inital',
      top: props.isMenuOpen ? '50%' : 'initial',
    }}
  >
  </Box>
)

const SiteHeader = ({ siteTitle, navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Header>
      <Container>
        <Flex
          alignItems='center'
          justifyContent='space-between'
          py={3}
        >
          <Text
            as='h1'
            fontWeight='700'
            fontSize={4}
            sx={{alignItems: 'center', display: 'flex'}}
          >
            <LogoLink to='/'>{siteTitle}</LogoLink>
          </Text>

          <Nav
            as='nav'
            isMenuOpen={isMenuOpen}
          >
            <NavList
              as='ul'
              isMenuOpen={isMenuOpen}
            >
              {
                navLinks.map(link =>
                  <Box
                    as='li'
                    key={link.name}
                    isMenuOpen={isMenuOpen}
                    fontSize={3}
                    px={2}
                    py={[2, 0]}
                  >
                    <NavLink
                      to={link.link}
                      activeClassName='active'
                    >
                      {link.name}
                    </NavLink>
                  </Box>
                )
              }
              <Box
                as='li'
                alignItems='center'
                display='flex'
                pt={[3,0]}
                px={2}
              >
                <Box
                  display={['flex', 'none']}
                  fontSize={3}
                  pr={3}
                >
                  { colorMode === 'light' ? 'Light Mode' : 'Dark Mode'}
                </Box>
                <Box
                  bg='offset'
                  display={'inline-flex'}
                  fontSize={3}
                  p={2}
                  ml={[0,2]}
                  sx={{
                    borderRadius: '4px',
                    boxShadow: 'base',
                    cursor: 'pointer',
                    '&:hover': {
                      boxShadow: 'large'
                    }
                  }}
                  onClick={e => {
                    setColorMode(colorMode === 'light' ? 'dark' : 'light')
                  }}
                >
                  { colorMode === 'light' ? <Moon size={16} color='#4A5568' fill='#CBD5E0' /> : <Sun size={16} color='#F6E05E' fill='#F6E05E' /> }
                </Box>
              </Box>
            </NavList>
          </Nav>

          <Box
            as='button'
            alignItems='center'
            bg='offset'
            color='text'
            display={['inline-flex', 'none']}
            fontSize={2}
            p={2}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            sx={{
              borderRadius: '4px',
              boxShadow: 'base',
              border: 0,
              cursor: 'pointer',
              zIndex: 100,
              '&:hover': {
                boxShadow: 'large'
              }
            }}
          >
            { isMenuOpen ? <X size={18} /> : <Menu size= {18} /> }
          </Box>
        </Flex>
      </Container>
    </Header>
  )
}

export default SiteHeader
