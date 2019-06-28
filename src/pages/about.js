import React from 'react'
import { Box, Flex, Image, Text } from 'rebass'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import SectionHeader from '../components/section-header'
import Bio from '../images/dan-lavin-bio.png'

const About = () => (
  <Layout pageBackground="gray100" pageColor="gray700">
    <Box py={[4,5]}>
      <Wrapper>
        <Flex>
          <Box width={['100%','60%']}>
            <Text
              as="h3"
              fontSize={7}
              fontWeight="800"
              mb={3}
            >
              Hi, I'm Dan!
            </Text>
            <Text fontSize={[3,4]} mb={3} pr={3}>
              I love products that solve real problems. I enjoy design that is both simple and intuitive. I believe that talking to actual customers is the best way to make sure you're building the right product. I embrace change. Failure happens from time to time. That's OK, as long as you learn from your mistakes. I value strong communication. It's impossible to build a great product if design, engineering, and the business are not working as one team. Finally, I approach every problem with an "empty cup" and a "beginners mind".
            </Text>
          </Box>
          <Box width={['100%','40%']}>
            <Image src={Bio}/>
          </Box>
        </Flex>

        <Box mb={5}>
          <SectionHeader title="Some things I care about" />
          <ul>
            <li>Building digital products that solve real problems</li>
            <li>Leading product and engineering teams</li>
            <li>Listening to customers</li>
            <li>Focusing on outcomes</li>
            <li>Design Systems</li>
          </ul>
        </Box>

        <Box mb={5}>
          <SectionHeader title="Some things I know how to do" />
          <ul>
            <li>Product Management</li>
            <li>Product Design</li>
            <li>Prototyping</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </Box>

        <Box mb={5}>
          <SectionHeader title="Some things I'm trying to improve" />
          <ul>
            <li>UI and Visual Design</li>
            <li>Systems Thinking</li>
            <li>Programming</li>
            <li>Writing</li>
          </ul>
        </Box>
      </Wrapper>
    </Box>
  </Layout>
)

export default About
