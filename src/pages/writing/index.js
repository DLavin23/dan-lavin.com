import React from "react"
import { Link, graphql } from "gatsby"
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import SectionHeader from '../../components/SectionHeader'
import Layout from "../../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <Hero>
        <h2>My Awesome list of Random Thoughts</h2>
      </Hero>
      <Section>
        <SectionHeader title="Posts" />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
