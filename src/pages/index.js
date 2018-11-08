import React from 'react'
import Layout from '../components/layout'
import Box from '../components/Box'
import Hero from '../components/Hero'
import Highlight from '../components/Highlight'
import HeroHeadline from '../components/HeroHeadline'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import UILink from '../components/UILink'
import Text from '../components/Text'
import { Sunrise, Sun, Moon} from 'react-feather'

// move to seperate file
const getWelcomeMessage = () => {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()
  if (currentHour >= 0 && currentHour < 12) {
    return (
      <Box
        is="div"
        alignItems="center"
        display="flex"
      >
        <Sunrise />
        <Box is="span" px={2}>Good Morning!</Box>
      </Box>
    )

  }
  if (currentHour >= 12 && currentHour < 17) {
    return (
      <Box
        is="div"
        alignItems="center"
        display="flex"
      >
        <Sun />
        <Box is="span" px={2}>Good Afternoon!</Box>
      </Box>
    )
  } else {
    return (
      <Box
        is="div"
        alignItems="center"
        display="flex"
      >
        <Moon />
        <Box is="span" px={2}>Good Evening!</Box>
      </Box>
    )
  }
}

export default ({ data }) => {
  return (
    <Layout>
      <Hero>
        <Text
          is="h4"
          color="offBlack"
          fontSize={3}
          mb={2}
        >
          {getWelcomeMessage()}
        </Text>
        <HeroHeadline>
          I'm Dan, a <Highlight>product</Highlight> leader with a passion for design, development &amp; user experience.
        </HeroHeadline>
        <Text fontSize="4" color="gray">
          Currently, I lead product at Hatch Loyalty, where we're focused on building a platform to help businesses create stronger, more personalized relationships with their customers.
        </Text>
      </Hero>

      <Section>
        <SectionHeader title="Experience" />
        <p>Product Management</p>
        <p>Everything starts with the customer, without them, there is no product. I work collaboratively with everyone in the company to come up with creative solutions to real problems. Communication and empathy are keys to success.</p>
        <p>Web Development</p>
        <p>Performance is design. A great product should load fast and work as intended regardless of device or screen size. Thoughtful architecture and modular components are the key to writing scalable and maintainable code. Functional CSS is my jam.</p>
        <p>Product Design</p>
        <p>Good design is simple, intuitive, and solves real problems. My process starts with research. I believe in talking to real customers, designing with content, and building prototypes with HTML and CSS. Design systems and pattern libraries FTW!</p>
      </Section>

      <Section>
        <SectionHeader title="Recent Writing" />
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Box
              pb={3}
              key={node.id}>
              <UILink
                to={node.fields.slug}
                color="grayDark"
              >
                <Text
                  is="h4"
                  m={0}
                  p={1}
                  fontWeight="400">
                  {node.frontmatter.title}{" "}
                </Text>
                {/* <p>{node.excerpt}</p> */}
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