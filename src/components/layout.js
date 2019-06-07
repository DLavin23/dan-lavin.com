import React from 'react'
import system from '@rebass/components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'
import theme from '../theme'
import Header from './header'
import Footer from './footer'


const PageWrapper = system({
  as: 'div',
  bg: 'white',
},
  'bg',
  'color',
)

const Main = system({
  as: 'main',
})

const Layout = ({ children, pageBackground, pageColor}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            navLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'The Personal site of Dan Lavin' },
            { name: 'keywords', content: 'dan, lavin, dan lavin, product, product management, design, product design,' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <PageWrapper bg={pageBackground} color={pageColor}>
            <Header
              navLinks={data.site.siteMetadata.navLinks}
              siteTitle={data.site.siteMetadata.title}
            />
            <Main role="main">
              {children}
            </Main>
            <Footer />
          </PageWrapper>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
