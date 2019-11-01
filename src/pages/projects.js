import React from 'react'
import { Link, graphql } from 'gatsby'
import { Box } from 'rebass'
import { Layout } from '../components'

class ProjectIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        desc={description}
      >
        <Box py={[4,5]}>
          <h1>Side Projects, etc.</h1>
          <ul>
            <li>
              <Link to='/projects/drumkit'>Drum Kit</Link>
            </li>
            <li>
              <Link to='/projects/clock'>Clock</Link>
            </li>
          </ul>
        </Box>
      </Layout>
    )
  }
}

export default ProjectIndex

export const projectQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
