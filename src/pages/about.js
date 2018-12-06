import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Box from '../components/Box'
import Text from '../components/Text'
import Wrapper from '../components/Wrapper'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'

const About = () => (
  <Layout>
    <Hero>
      <Wrapper>
        <Box display={['block', 'flex']}>
          <Box>
            <SectionHeader title="Hi, I'm Dan." />
            <Text fontSize={[3,4]} color="grayDark" mb={3} pr={3}>
              I love products that solve real problems. I enjoy design that is both simple and intuitive. I believe that talking to actual customers is the best way to make sure you're building the right product. I embrace change. Failure happens from time to time. That's OK, as long as you learn from your mistakes. I value strong communication. It's impossible to build a great product if design, engineering, and the business are not working as one team. Finally, I approach every problem with an "empty cup" and a "beginners mind".
            </Text>
          </Box>
          <Box p={6} width={['100%','50%']} bg="offWhite" border="1px solid" borderColor="grayLight" borderRadius={4}/>
        </Box>
      </Wrapper>
    </Hero>

    <Wrapper>
      <Section mb={5}>
        <SectionHeader title="Some things I care about" />
        <ul>
          <li>Building digital products that solve real problems</li>
          <li>Leading product and engineering teams</li>
          <li>Listening to customers</li>
          <li>Focusing on outcomes</li>
          <li>Design Systems</li>
        </ul>
      </Section>
      <Section mb={5}>
        <SectionHeader title="Some things I know how to do" />
        <ul>
          <li>Product Management</li>
          <li>Product Design</li>
          <li>Prototyping</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </Section>
      <Section mb={5}>
        <SectionHeader title="Some things I'm trying to improve" />
        <ul>
          <li>UI and Visual Design</li>
          <li>Systems Thinking</li>
          <li>Programming</li>
          <li>Writing</li>
        </ul>
      </Section>
    </Wrapper>
  </Layout>
)

export default About
