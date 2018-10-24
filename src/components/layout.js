import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './layout.css'
import theme from '../theme'
import system from 'system-components'
import Header from './header'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

// const Header = system({
//   is: 'header',
//   borderBottom: '1px solid',
//   borderColor: 'grayLight',
//   p: 3,
// })

const Main = system({
  is: 'main',
  mx: 'auto',
  maxWidth: '1024px',
})

const Footer = system({
  is: 'footer',
  border: '1px solid',
  borderColor: 'grayLight',
  p: 3,
})

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <div>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Main>
              {children}
            </Main>
            <Footer>
              Footer
            </Footer>
          </div>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
