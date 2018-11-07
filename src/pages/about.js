import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Text from '../components/Text'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'

const About = () => (
  <Layout>
    <Hero>
      <Text>
        Hello, I'm Dan.
      </Text>
      <Text>
        Currently, I lead product at Hatch Loyalty, where we're focused on building a platform that helps businesses build stronger relationships with their customers.
      </Text>
    </Hero>
    <Section>
      <SectionHeader title="About Me" />
      <p>I love products that solve real problems. I enjoy design that is both simple and intuitive. I believe that talking to actual customers is the best way to make sure you're building the right product. I embrace change. Failure happens from time to time. That's OK, as long as you learn from your mistakes. I value strong communication. It's impossible to build a great product if design, engineering, and the business are not working as one team. Finally, I approach every problem with an "empty cup" and a "beginners mind".</p>
    </Section>
    <Section>
      <SectionHeader title="Stuff I'm Passionate About" />
      <ul>
        <li>Building digital products that solve real problems</li>
        <li>Leading product and engineering teams</li>
        <li>Listening to customers</li>
        <li>Focusing on outcomes</li>
        <li>Design Systems</li>
      </ul>
    </Section>


    <h3>Stuff I'm passionate about:</h3>
    <ul>
      <li>Building digital products that solve real problems</li>
      <li>Leading product and engineering teams</li>
      <li>Listening to customers</li>
      <li>Focusing on outcomes</li>
      <li>Design Systems</li>
    </ul>

    <h3>Stuff I know how to do:</h3>
    <ul>
      <li>Product Management</li>
      <li>Product Design</li>
      <li>User Experience</li>
      <li>Prototyping</li>
      <li>Javascript</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>

    <h3>Stuff I'm trying to improve:</h3>
    <ul>
      <li>Functional Programming</li>
      <li>React and React Native</li>
      <li>UI and Visual Design</li>
      <li>Systems Thinking</li>
      <li>Writing</li>
    </ul>
  </Layout>
)

export default About
