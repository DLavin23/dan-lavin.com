import React from 'react'
// import { graphql } from "gatsby"
import { Link } from 'gatsby'
// import { Moon, Sunrise, Sun } from 'react-feather'
import Box from 'src/components/box'
import ContactLinks from 'src/components/contact-links'
import Section from 'src/components/section'
import Highlight from 'src/components/highlight'
import Layout from 'src/components/layout'
import Text from 'src/components/text'
import UILink from 'src/components/ui-link'
import Wrapper from 'src/components/wrapper'

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
      <Section color="offBlack">
        <Wrapper>
          <Box width={['1','75%']}>
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
            <Text is="p" fontSize={[3,4]} color="offBlack" mb={4} >
              Currently, I lead product at <UILink.External href="https://www.hatchloyalty.com/" target="_blank" rel="noopener noreferrer">Hatch</UILink.External> where our team is focused on building a technology platform that helps businesses create stronger, more personal relationships with their customers. If you're interested in a slightly longer version, click <Link to="/about">here.</Link>
            </Text>
            <ContactLinks />
          </Box>

          <Section>

          </Section>
        </Wrapper>
      </Section>
    </Layout>
  )
}
