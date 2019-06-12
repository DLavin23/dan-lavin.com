import React from 'react'
import { Box, Text } from 'rebass'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'

const Principles = () => (
  <Layout>
    <Box py={[4,5]}>
      <Wrapper>
        <Text as="h2">
          Coming Soon!
          {/* https://about.gitlab.com/handbook/values/ */}
        </Text>
      </Wrapper>
    </Box>
  </Layout>
)

export default Principles
