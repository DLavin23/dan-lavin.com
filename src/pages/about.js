import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'
import { Minus } from 'react-feather'
import { Layout } from '../components'

const About = () => (
  <Layout>
    <Box py={[4,5]} width={['100%','60%']}>
      <Box>
        <Heading
          as="h2"
          fontSize={6}
          fontWeight="800"
          mb={3}
        >
          Hi, I'm Dan!
        </Heading>
        <Text fontSize={[3,4]} mb={3} pr={3}>
          I love products that solve real problems, for real people. I enjoy design that is both simple and intuitive. I believe that talking to actual customers is the best way to make sure you're building the right product. I embrace change. Failure happens from time to time. That's OK, as long as you learn from your mistakes. I value strong communication. It's impossible to build a great product if design, engineering, and the business are not working together as one team. Finally, I approach every problem with an "empty cup" and a "beginners mind".
        </Text>
      </Box>
    </Box>


    <Box mb={5}>
      <Heading as="h3">Some things I care about</Heading>
      <Box as="hr" my={3} bg="hr" height="5px" width="40px"/>
      <Box as="ul" m={0} py={2} sx={{listStyle: 'none'}}>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>Building digital products that solve real problems</Box>
        </Flex>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>Leading product and engineering teams</Box>
        </Flex>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>Clear and thoughtful communication</Box>
        </Flex>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>Learning from customers</Box>
        </Flex>
      </Box>
    </Box>

    <Box mb={5}>
      <Heading as="h3">Some things I know how to do</Heading>
      <Box as="hr" my={3} bg="hr" height="5px" width="40px"/>
      <Box as="ul" m={0} py={2} sx={{listStyle: 'none'}}>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>Product Management</Box>
        </Flex>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>Product Design</Box>
        </Flex>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>Prototyping</Box>
        </Flex>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>Javascript</Box>
        </Flex>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>HTML</Box>
        </Flex>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>CSS</Box>
        </Flex>
      </Box>
    </Box>

    <Box mb={5}>
      <Heading as="h3">Some things I'm trying to improve</Heading>
      <Box as="hr" my={3} bg="hr" height="5px" width="40px"/>
      <Box as="ul" m={0} py={2} sx={{listStyle: 'none'}}>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>          UI and Visual Design</Box>
        </Flex>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>Systems Thinking</Box>
        </Flex>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>Programming</Box>
        </Flex>
        <Flex as="li" display="flex" alignItems="center" mb={2}>
          <Box as={Minus} size={16} color="muted"/>
          <Box as="span" px={2}>Writing</Box>
        </Flex>
      </Box>
    </Box>
  </Layout>
)

export default About
