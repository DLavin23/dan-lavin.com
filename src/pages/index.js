import React from 'react'
// import { graphql } from "gatsby"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Box from '../components/Box'
// import Panel from '../components/Panel'
import ContactLinks from '../components/ContactLinks'
import Hero from '../components/Hero'
import Highlight from '../components/Highlight'
import HeroHeadline from '../components/HeroHeadline'
// import Section from '../components/Section'
// import SectionHeader from '../components/SectionHeader'
// import UILink from '../components/UILink'
import Text from '../components/Text'
import Wrapper from '../components/Wrapper'
import { Moon, Sunrise, Sun } from 'react-feather'

// move to seperate file
const getWelcomeMessage = () => {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()
  if (currentHour >= 0 && currentHour < 12) {
    return (
      <Box
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
        <Box is="span" px={2}>Good Evening. I'm Dan.</Box>
      </Box>
    )
  }
}

export default () => {
  return (
    <Layout bg={'red'}>
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
            I'm a <Highlight>product</Highlight> leader with a passion for design, development &amp; user experience.
          </HeroHeadline>
          <Text fontSize={[4,5]} color="grayDark" mb={4}>
            Currently, I lead product at Hatch, Where we're focused on building a platform to help businesses create stronger, more personalized relationships with their customers.
          </Text>
          <Text fontSize={[4,5]} color="grayDark" mb={4}>check out the slightly longer version <Link to="/about">here.</Link></Text>
          <ContactLinks />
        </Wrapper>
      </Hero>
    </Layout>
  )
}
