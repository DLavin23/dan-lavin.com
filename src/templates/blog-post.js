import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Section from "../components/Section"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Hero>
        <h1>{post.frontmatter.title}</h1>
      </Hero>
      <Section>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`