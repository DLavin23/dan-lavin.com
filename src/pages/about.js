import React from 'react'
import { Box, Flex, Text } from 'rebass'
import Layout from '../components/layout'

const About = () => (
  <Layout>
    <Box py={[4,5]}>
      <div>
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
            {/* <Image src={Bio}/> */}
          </Box>
        </Flex>

        <Box mb={5}>
          <Text>Some things I care about</Text>
          <ul>
            <li>Building digital products that solve real problems</li>
            <li>Leading product and engineering teams</li>
            <li>Listening to customers</li>
            <li>Focusing on outcomes</li>
            <li>Design Systems</li>
          </ul>
        </Box>

        <Box mb={5}>
          <Text>Some things I know how to do</Text>
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
          <Text>Some things I'm trying to improve</Text>
          <ul>
            <li>UI and Visual Design</li>
            <li>Systems Thinking</li>
            <li>Programming</li>
            <li>Writing</li>
          </ul>
        </Box>
      </div>
    </Box>
  </Layout>
)

export default About
