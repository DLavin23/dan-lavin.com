import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Text from '../components/Text'
import Wrapper from '../components/Wrapper'

const Principles = () => (
  <Layout>
    <Hero>
      <Wrapper>
        <Text is="h2">
          Coming Soon!
          {/* https://about.gitlab.com/handbook/values/ */}
        </Text>
      </Wrapper>
    </Hero>
  </Layout>
)

export default Principles
