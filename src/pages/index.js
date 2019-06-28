import React from 'react'
// import { graphql } from "gatsby"
// import { Link } from 'gatsby'
// import { Moon, Sunrise, Sun } from 'react-feather'
import { Box, Flex, Text } from 'rebass'
import ContactLinks from '../components/contact-links'
// import Highlight from '../components/highlight'
import Layout from '../components/layout'
import UILink from '../components/ui-link'
import Wrapper from '../components/wrapper'
// import Bio from '../images/dan-lavin-bio.png'

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
        <Box as="span">Good Morning, I'm Dan!</Box>
      </Box>
    )

  }
  if (currentHour >= 12 && currentHour < 17) {
    return (
      <Box
        as="div"
        alignItems="center"
        display="flex"
      >

        {/* <Sun /> */}
        <Box as="span">Good Afternoon, I'm Dan!</Box>
      </Box>
    )
  } else {
    return (
      <Box
        as="div"
        alignItems="center"
        display="flex"
      >
        {/* <Moon /> */}
        <Box as="span">Good Evening, I'm Dan!</Box>
      </Box>
    )
  }
}

export default () => {
  return (
    <Layout pageBackground='gray100' pageColor="gray700">
      <Box py={[4,5]} color="">
        <Wrapper>
          <Flex flexDirection={['column', 'row', 'row']}>
            <Box width={['100%','85%', '65%']}>
              <Text
                as="h4"
                fontSize={[3,4,5]}
                fontWeight="400"
                lineHeight="1.25"
                mb={3}
              >
                {getWelcomeMessage()}
              </Text>
              <Text
                as="h2"
                fontSize={[6,7,7]}
                fontWeight="800"
                lineHeight="1.25"
                mb={3}
              >
                I'm a product leader with a passion for design, development &amp; user experience.
              </Text>
              <Text as="p" fontSize={[3,4]} color="" mb={4} >
                Currently, I lead product at <UILink.External href="https://www.hatchloyalty.com/" target="_blank" rel="noopener noreferrer">Hatch</UILink.External> where our team is focused on building a technology platform designed to help businesses create stronger, more personal relationships with their customers.
              </Text>
              <Box mb={4}>
                <UILink.Button to="/about">
                  Learn More!
                </UILink.Button>
              </Box>
              <ContactLinks />
            </Box>

            {/* <Box width={['100%', '40%']}>
              <Image src={Bio}/>
            </Box> */}
          </Flex>
        </Wrapper>
      </Box>
    </Layout>
  )
}
