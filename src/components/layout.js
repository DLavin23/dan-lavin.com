import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './layout.css'
import theme from '../theme'
import system from 'system-components'
import Header from './header'
import Footer from './footer'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const Main = system({
  is: 'main',
  // mx: 'auto',
  px: [2, 4],
  maxWidth: '800px',
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
            <Footer />
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
