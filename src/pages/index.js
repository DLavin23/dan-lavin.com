import React from 'react'
import { graphql } from "gatsby"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Box from '../components/Box'
import Panel from '../components/Panel'
import ContactLinks from '../components/ContactLinks'
import Hero from '../components/Hero'
import Highlight from '../components/Highlight'
import HeroHeadline from '../components/HeroHeadline'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import UILink from '../components/UILink'
import Text from '../components/Text'
import Wrapper from '../components/Wrapper'
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
        <Box is="span" px={2}>Good Morning, I'm Dan!</Box>
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
        <Box is="span" px={2}>Good Afternoon, I'm Dan!</Box>
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
        <Box is="span" px={2}>Good Evening, I'm Dan!</Box>
      </Box>
    )
  }
}

export default ({ data }) => {
  return (
    <Layout>
      <Hero>
        <Wrapper>
          <Text
            is="h4"
            color="offBlack"
            fontSize={[3,4]}
            mb={2}
          >
            {getWelcomeMessage()}
          </Text>
          <HeroHeadline>
            A <Highlight>product</Highlight> leader with a passion for design, development &amp; user experience.
          </HeroHeadline>
          <Text fontSize={[4,5]} color="grayDark" mb={3}>
            Currently, I lead product at Hatch, Where we're focused on building a platform to help businesses create stronger, more personalized relationships with their customers.
          </Text>
          <p>check out the slightly longer version <Link to="/about">here.</Link></p>
          <ContactLinks />
        </Wrapper>
      </Hero>

      {/* <Section>
        <SectionHeader title="Experience" />
        <p>Product Management</p>
        <p>Everything starts with the customer, without them, there is no product. I work collaboratively with everyone in the company to come up with creative solutions to real problems. Communication and empathy are keys to success.</p>
        <p>Web Development</p>
        <p>Performance is design. A great product should load fast and work as intended regardless of device or screen size. Thoughtful architecture and modular components are the key to writing scalable and maintainable code. Functional CSS is my jam.</p>
        <p>Product Design</p>
        <p>Good design is simple, intuitive, and solves real problems. My process starts with research. I believe in talking to real customers, designing with content, and building prototypes with HTML and CSS. Design systems and pattern libraries FTW!</p>
      </Section> */}

      <Section py={4} bg="offWhite">
        <Wrapper>
          <SectionHeader title="Recent Writing" />
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Panel
                mb={4}
                key={node.id}>
                <Text>#Tag</Text>
                <UILink
                  to={node.fields.slug}
                  color="grayDark"
                >
                  <Text
                    is="h4"
                    color="grayDark"
                    fontSize={4}
                    fontWeight='bold'
                    m={0}
                    pb={1}
                  >
                    {node.frontmatter.title}{" "}
                  </Text>
                  <p>{node.excerpt}</p>
                </UILink>
              </Panel>
            ))}
        </Wrapper>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
    ) {
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
