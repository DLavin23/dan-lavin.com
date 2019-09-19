import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './layout.css'

import Container from './container'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
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
        <Header
          navLinks={data.site.siteMetadata.navLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <Container
          as="main"
          role="main"
        >
          {children}
        </Container>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
