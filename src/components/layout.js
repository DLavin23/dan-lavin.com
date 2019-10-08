import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Main } from 'theme-ui'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './layout.css'
import { SiteHeader, SiteFooter } from '.'

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
        <SiteHeader
          navLinks={data.site.siteMetadata.navLinks}
          siteTitle={data.site.siteMetadata.title}
        />

        <Main>
          <Container>
            {children}
          </Container>
        </Main>

        <SiteFooter />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
