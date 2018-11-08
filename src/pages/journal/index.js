import React from "react"
import { graphql } from "gatsby"
import Box from '../../components/Box'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import SectionHeader from '../../components/SectionHeader'
import Layout from "../../components/layout"
import Text from "../../components/Text";
import UILink from '../../components/UILink'

export default ({ data }) => {
  return (
    <Layout>
      <Hero>
        <h2>My Awesome list of Random Thoughts</h2>
      </Hero>
      <Section>
        <SectionHeader title="Posts" />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Box
            borderBottom="1px solid"
            borderColor="grayLight"
            p={2}
            mb={4}
            key={node.id}>

            <UILink
              to={node.fields.slug}
            >
              <Text is="h3" color="offBlack" m={0} pb={2}>
                {node.frontmatter.title}{" "}
              </Text>
              <Text color="grayDark" fontSize="2">{node.frontmatter.date}</Text>
              <Text color="grayDark" fontSize="3">{node.excerpt}</Text>
            </UILink>
          </Box>
        ))}
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
