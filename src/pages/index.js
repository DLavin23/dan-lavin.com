import React from 'react'
import Layout from '../components/layout'
import Box from '../components/Box'
import Hero from '../components/Hero'
import Highlight from '../components/Highlight'
import HeroHeadline from '../components/HeroHeadline'
import HeroSubHeadline from '../components/HeroSubHeadline'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import { Sunrise, Sun, Moon} from 'react-feather'
// import { Link } from 'gatsby'

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


const IndexPage = () => (
  <Layout>
    <Hero>
      <HeroHeadline>
        {getWelcomeMessage()}
      </HeroHeadline>
      <HeroSubHeadline>
        I'm Dan, a Chicago based <Highlight>product</Highlight> leader with a passion for design, development &amp; user experience.
      </HeroSubHeadline>
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
      <SectionHeader title="Writing" />
    </Section>
  </Layout>
)

export default IndexPage
