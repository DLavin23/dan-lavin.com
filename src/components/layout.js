import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import './layout.css'
import theme from 'src/theme'
import system from 'system-components'
import Header from 'src/components/header'
import Footer from 'src/components/footer'


const PageWrapper = system({
  is: 'div',
  bg: 'white',
},
  'bg',
  'color',
)

const Main = system({
  is: 'main',
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
