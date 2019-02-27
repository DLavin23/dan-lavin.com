import React from 'react'
// import { graphql } from "gatsby"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Box from '../components/Box'
import ContactLinks from '../components/ContactLinks'
import Hero from '../components/Hero'
import Highlight from '../components/Highlight'
// import Section from '../components/Section'
// import SectionHeader from '../components/SectionHeader'
// import UILink from '../components/UILink'
import Text from '../components/Text'
import Wrapper from '../components/Wrapper'
// import { Moon, Sunrise, Sun } from 'react-feather'

// move to seperate file
const currentDate = new Date()
const currentHour = currentDate.getHours()

const getWelcomeMessage = () => {
  if (currentHour >= 0 && currentHour < 12) {
    return (
      <Box
        alignItems="center"
        display="flex"
      >

        {/* <Sunrise /> */}
        <Box is="span">Good Morning, I'm Dan!</Box>
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

        {/* <Sun /> */}
        <Box is="span">Good Afternoon, I'm Dan!</Box>
      </Box>
    )
  } else {
    return (
      <Box
        is="div"
        alignItems="center"
        display="flex"
      >
        {/* <Moon /> */}
        <Box is="span">Good Evening, I'm Dan!</Box>
      </Box>
    )
  }
}


export default () => {
  return (
    <Layout pageBackground="offWhite">
      <Hero bg="offWhite" color="offBlack">
        <Wrapper>
          <Box width={['1','80%']}>
            <Text
              is="h4"
              fontSize={[3,4,5]}
              lineHeight="1.25"
              mb={0}
              pb={3}
            >
              {getWelcomeMessage()}
            </Text>
            <Text
              is="h2"
              fontSize={[6,7,8]}
              lineHeight="1.25"
              mb={0}
              pb={3}
            >
              I'm a <Highlight>product</Highlight> leader with a passion for design, development &amp; user experience.
            </Text>
            <Text is="p" fontSize={[3,4]} color="grayDark" mb={3}>
              Currently, I lead product at <a href="https://www.hatchloyalty.com/" target="_blank" rel="noopener noreferrer">Hatch</a>, where we're focused on building a platform that helps businesses create stronger, more personal relationships with their customers. If you're interested in a slightly longer version, click <Link to="/about">here.</Link>
            </Text>
            <Text fontSize={[3,4]} color="grayDark" mb={4}></Text>
            <ContactLinks />
          </Box>
        </Wrapper>
      </Hero>
    </Layout>
  )
}
