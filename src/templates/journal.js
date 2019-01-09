// import React from "react"
// import { graphql } from "gatsby"
// import system from 'system-components'
// import Layout from "../components/layout"
// import Hero from "../components/Hero"
// import Section from "../components/Section"

// const Wrapper = system({
//   is: 'div',
//   mx: 'auto',
//   maxWidth: '700px'
// })

// export default ({ data }) => {
//   const post = data.markdownRemark
//   return (
//     <Layout>
//       <Wrapper>
//         <Hero>
//           <h1>{post.frontmatter.title}</h1>
//         </Hero>
//         <Section>
//           <div dangerouslySetInnerHTML={{ __html: post.html }} />
//         </Section>
//       </Wrapper>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `